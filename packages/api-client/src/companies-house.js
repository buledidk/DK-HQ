/**
 * Companies House API Client
 * UK Government API for company data
 * Rate limit: 600 requests per 5 minutes
 */

const BASE_URL = 'https://api.company-information.service.gov.uk';

export class CompaniesHouseClient {
  constructor(apiKey) {
    if (!apiKey) throw new Error('Companies House API key is required');
    this.apiKey = apiKey;
    this.headers = {
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
    };
  }

  async request(path) {
    const response = await fetch(`${BASE_URL}${path}`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Companies House API error: ${response.status}`);
    }
    return response.json();
  }

  async searchCompany(query) {
    return this.request(`/search/companies?q=${encodeURIComponent(query)}`);
  }

  async getCompany(companyNumber) {
    return this.request(`/company/${companyNumber}`);
  }

  async getOfficers(companyNumber) {
    return this.request(`/company/${companyNumber}/officers`);
  }

  async getFilingHistory(companyNumber) {
    return this.request(`/company/${companyNumber}/filing-history`);
  }

  async getPSC(companyNumber) {
    return this.request(`/company/${companyNumber}/persons-with-significant-control`);
  }
}
