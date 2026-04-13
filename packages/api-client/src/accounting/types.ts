/**
 * Common Accounting Types
 * Shared types for Xero, QuickBooks, and Sage integrations
 */

export interface TrialBalance {
  periodStart: string;
  periodEnd: string;
  entries: TrialBalanceEntry[];
  totals: {
    totalDebits: number;
    totalCredits: number;
  };
}

export interface TrialBalanceEntry {
  accountCode: string;
  accountName: string;
  accountType: string;
  debit: number;
  credit: number;
  balance: number;
}

export interface JournalEntry {
  id: string;
  date: string;
  reference?: string;
  narration?: string;
  lines: JournalLine[];
  status: 'draft' | 'posted' | 'voided';
  createdAt: string;
  updatedAt: string;
}

export interface JournalLine {
  accountCode: string;
  accountName: string;
  description?: string;
  debit: number;
  credit: number;
  taxCode?: string;
}

export interface BankTransaction {
  id: string;
  date: string;
  type: 'receive' | 'spend' | 'transfer';
  bankAccountId: string;
  bankAccountName: string;
  reference?: string;
  contact?: {
    id: string;
    name: string;
  };
  amount: number;
  status: 'pending' | 'reconciled';
  lines: BankTransactionLine[];
}

export interface BankTransactionLine {
  accountCode: string;
  description?: string;
  amount: number;
  taxCode?: string;
}

export interface Invoice {
  id: string;
  type: 'sales' | 'purchase';
  invoiceNumber: string;
  date: string;
  dueDate: string;
  contact: {
    id: string;
    name: string;
  };
  lineItems: InvoiceLineItem[];
  subtotal: number;
  tax: number;
  total: number;
  amountDue: number;
  amountPaid: number;
  status: 'draft' | 'submitted' | 'authorised' | 'paid' | 'voided';
}

export interface InvoiceLineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  accountCode: string;
  taxCode?: string;
  amount: number;
}
