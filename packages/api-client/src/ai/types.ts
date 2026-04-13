/**
 * AI Client Types
 */

export type AIProvider = 'openai' | 'anthropic';

export interface AIClientOptions {
  provider: AIProvider;
  apiKey?: string;
  model?: string;
}

export interface AnalysisResult {
  success: boolean;
  data?: unknown;
  error?: string;
}

export interface RiskAssessmentInput {
  financialData: Record<string, unknown>;
  industryType?: string;
  companySize?: 'small' | 'medium' | 'large';
  previousYearIssues?: string[];
}

export interface RiskAssessmentOutput {
  overallRisk: 'low' | 'medium' | 'high';
  riskAreas: {
    area: string;
    level: 'low' | 'medium' | 'high';
    factors: string[];
    suggestedProcedures: string[];
  }[];
  summary: string;
}

export interface DocumentAnalysisOutput {
  extractedText: string;
  documentType: string;
  keyData: Record<string, unknown>;
  confidence: number;
}
