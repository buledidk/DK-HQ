/**
 * @dk-hq/api-client
 * Unified API client for all external service integrations
 */

// AI Clients
export { AIClient } from './ai/client';
export type { AIProvider, AIClientOptions, AnalysisResult } from './ai/types';

// Companies House
export { CompaniesHouseClient } from './companies-house/client';
export type { Company, Officer, Filing } from './companies-house/types';

// Accounting Software
export { XeroClient } from './xero/client';
export { QuickBooksClient } from './quickbooks/client';
export type { TrialBalance, JournalEntry, BankTransaction } from './accounting/types';
