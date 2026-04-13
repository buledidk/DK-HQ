/**
 * Xero API Client
 * Accounting data: trial balance, journals, invoices, etc.
 * OAuth2 authentication required
 */

const BASE_URL = 'https://api.xero.com/api.xro/2.0';

export class XeroClient {
  constructor({ clientId, clientSecret, accessToken, tenantId } = {}) {
    if (!clientId || !clientSecret) {
      throw new Error('Xero clientId and clientSecret are required');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken;
    this.tenantId = tenantId;
  }

  get headers() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
      'Xero-Tenant-Id': this.tenantId,
      Accept: 'application/json',
    };
  }

  async request(path) {
    const response = await fetch(`${BASE_URL}${path}`, { headers: this.headers });
    if (!response.ok) throw new Error(`Xero API error: ${response.status}`);
    return response.json();
  }

  async getTrialBalance(date) {
    const params = date ? `?date=${date}` : '';
    return this.request(`/Reports/TrialBalance${params}`);
  }

  async getAccounts() {
    return this.request('/Accounts');
  }

  async getJournals() {
    return this.request('/Journals');
  }

  async getInvoices() {
    return this.request('/Invoices');
  }

  async getBankTransactions() {
    return this.request('/BankTransactions');
  }
}
