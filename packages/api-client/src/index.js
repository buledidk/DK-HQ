/**
 * DK-HQ Unified API Client
 * Central access to all external API integrations
 */

export { CompaniesHouseClient } from './companies-house.js';
export { XeroClient } from './xero.js';
export { AnthropicClient } from './anthropic.js';
export { OpenAIClient } from './openai.js';

export class ApiClient {
  constructor(config = {}) {
    this.config = config;
  }

  static fromEnv() {
    return new ApiClient({
      openaiKey: process.env.OPENAI_API_KEY,
      anthropicKey: process.env.ANTHROPIC_API_KEY,
      companiesHouseKey: process.env.COMPANIES_HOUSE_API_KEY,
      xeroClientId: process.env.XERO_CLIENT_ID,
      xeroClientSecret: process.env.XERO_CLIENT_SECRET,
      qbClientId: process.env.QB_CLIENT_ID,
      qbClientSecret: process.env.QB_CLIENT_SECRET,
      sageClientId: process.env.SAGE_CLIENT_ID,
      sageClientSecret: process.env.SAGE_CLIENT_SECRET,
      hmrcClientId: process.env.HMRC_CLIENT_ID,
      hmrcClientSecret: process.env.HMRC_CLIENT_SECRET,
    });
  }
}
