/**
 * Companies House API Client
 * https://developer.company-information.service.gov.uk/
 */

import type { Company, Officer, Filing, PersonsOfSignificantControl } from './types';

const API_BASE = 'https://api.company-information.service.gov.uk';

export class CompaniesHouseClient {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.COMPANIES_HOUSE_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('Companies House API key is required');
    }
  }

  private async fetch<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(this.apiKey + ':').toString('base64')}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Companies House API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get company by company number
   */
  async getCompany(companyNumber: string): Promise<Company> {
    const data = await this.fetch<any>(`/company/${companyNumber}`);

    return {
      companyNumber: data.company_number,
      companyName: data.company_name,
      companyStatus: data.company_status,
      companyType: data.type,
      dateOfCreation: data.date_of_creation,
      registeredOfficeAddress: {
        addressLine1: data.registered_office_address?.address_line_1,
        addressLine2: data.registered_office_address?.address_line_2,
        locality: data.registered_office_address?.locality,
        region: data.registered_office_address?.region,
        postalCode: data.registered_office_address?.postal_code,
        country: data.registered_office_address?.country,
      },
      sicCodes: data.sic_codes,
      accounts: data.accounts ? {
        nextDue: data.accounts.next_due,
        lastMadeUpTo: data.accounts.last_accounts?.made_up_to,
        periodStart: data.accounts.accounting_reference_date?.day,
        periodEnd: data.accounts.accounting_reference_date?.month,
      } : undefined,
      confirmationStatement: data.confirmation_statement ? {
        nextDue: data.confirmation_statement.next_due,
        lastMadeUpTo: data.confirmation_statement.last_made_up_to,
      } : undefined,
    };
  }

  /**
   * Get company officers
   */
  async getOfficers(companyNumber: string): Promise<Officer[]> {
    const data = await this.fetch<any>(`/company/${companyNumber}/officers`);

    return data.items.map((item: any) => ({
      name: item.name,
      officerRole: item.officer_role,
      appointedOn: item.appointed_on,
      resignedOn: item.resigned_on,
      nationality: item.nationality,
      countryOfResidence: item.country_of_residence,
      occupation: item.occupation,
    }));
  }

  /**
   * Get filing history
   */
  async getFilingHistory(companyNumber: string, itemsPerPage = 25): Promise<Filing[]> {
    const data = await this.fetch<any>(
      `/company/${companyNumber}/filing-history?items_per_page=${itemsPerPage}`
    );

    return data.items.map((item: any) => ({
      date: item.date,
      type: item.type,
      description: item.description,
      category: item.category,
      barcode: item.barcode,
      pages: item.pages,
    }));
  }

  /**
   * Get persons of significant control
   */
  async getPSC(companyNumber: string): Promise<PersonsOfSignificantControl[]> {
    const data = await this.fetch<any>(
      `/company/${companyNumber}/persons-with-significant-control`
    );

    return data.items.map((item: any) => ({
      name: item.name,
      notifiedOn: item.notified_on,
      naturesOfControl: item.natures_of_control,
      kind: item.kind,
    }));
  }

  /**
   * Search companies by name
   */
  async searchCompanies(query: string, itemsPerPage = 20): Promise<Company[]> {
    const data = await this.fetch<any>(
      `/search/companies?q=${encodeURIComponent(query)}&items_per_page=${itemsPerPage}`
    );

    return data.items.map((item: any) => ({
      companyNumber: item.company_number,
      companyName: item.title,
      companyStatus: item.company_status,
      companyType: item.company_type,
      dateOfCreation: item.date_of_creation,
      registeredOfficeAddress: item.address ? {
        addressLine1: item.address.address_line_1,
        locality: item.address.locality,
        postalCode: item.address.postal_code,
      } : {},
    }));
  }
}
