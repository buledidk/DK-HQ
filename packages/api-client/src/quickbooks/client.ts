/**
 * QuickBooks Online API Client
 * https://developer.intuit.com/
 */

import type { TrialBalance, JournalEntry, BankTransaction, Invoice } from '../accounting/types';

export interface QuickBooksTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  realmId: string;
}

export class QuickBooksClient {
  private tokens?: QuickBooksTokens;
  private clientId: string;
  private clientSecret: string;
  private environment: 'sandbox' | 'production';

  constructor(environment: 'sandbox' | 'production' = 'sandbox') {
    this.clientId = process.env.QB_CLIENT_ID || '';
    this.clientSecret = process.env.QB_CLIENT_SECRET || '';
    this.environment = environment;
  }

  private get baseUrl(): string {
    return this.environment === 'production'
      ? 'https://quickbooks.api.intuit.com'
      : 'https://sandbox-quickbooks.api.intuit.com';
  }

  /**
   * Set authentication tokens
   */
  setTokens(tokens: QuickBooksTokens): void {
    this.tokens = tokens;
  }

  /**
   * Get OAuth2 authorization URL
   */
  getAuthorizationUrl(redirectUri: string, state: string): string {
    const scopes = ['com.intuit.quickbooks.accounting'].join(' ');

    return `https://appcenter.intuit.com/connect/oauth2?` +
      `client_id=${this.clientId}&` +
      `scope=${encodeURIComponent(scopes)}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `response_type=code&` +
      `state=${state}`;
  }

  /**
   * Exchange authorization code for tokens
   */
  async exchangeCodeForTokens(code: string, redirectUri: string, realmId: string): Promise<QuickBooksTokens> {
    const response = await fetch('https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for tokens');
    }

    const data = await response.json();

    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: Date.now() + data.expires_in * 1000,
      realmId,
    };
  }

  /**
   * Get trial balance report
   */
  async getTrialBalance(startDate: string, endDate: string): Promise<TrialBalance> {
    this.ensureAuthenticated();
    // Implementation pending
    throw new Error('Not implemented');
  }

  /**
   * Get journal entries
   */
  async getJournalEntries(options?: { limit?: number }): Promise<JournalEntry[]> {
    this.ensureAuthenticated();
    // Implementation pending
    throw new Error('Not implemented');
  }

  /**
   * Get bank transactions
   */
  async getBankTransactions(): Promise<BankTransaction[]> {
    this.ensureAuthenticated();
    // Implementation pending
    throw new Error('Not implemented');
  }

  /**
   * Get invoices
   */
  async getInvoices(): Promise<Invoice[]> {
    this.ensureAuthenticated();
    // Implementation pending
    throw new Error('Not implemented');
  }

  private ensureAuthenticated(): void {
    if (!this.tokens) {
      throw new Error('Not authenticated. Call setTokens() first.');
    }
    if (Date.now() >= this.tokens.expiresAt) {
      throw new Error('Token expired. Refresh required.');
    }
  }
}
