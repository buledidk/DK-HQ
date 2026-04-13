/**
 * Companies House API Types
 */

export interface Company {
  companyNumber: string;
  companyName: string;
  companyStatus: string;
  companyType: string;
  dateOfCreation: string;
  registeredOfficeAddress: Address;
  sicCodes?: string[];
  accounts?: AccountsInfo;
  confirmationStatement?: ConfirmationStatement;
}

export interface Address {
  addressLine1?: string;
  addressLine2?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export interface AccountsInfo {
  nextDue?: string;
  lastMadeUpTo?: string;
  nextMadeUpTo?: string;
  periodStart?: string;
  periodEnd?: string;
}

export interface ConfirmationStatement {
  nextDue?: string;
  lastMadeUpTo?: string;
  nextMadeUpTo?: string;
}

export interface Officer {
  name: string;
  officerRole: string;
  appointedOn: string;
  resignedOn?: string;
  nationality?: string;
  countryOfResidence?: string;
  occupation?: string;
}

export interface Filing {
  date: string;
  type: string;
  description: string;
  category: string;
  barcode?: string;
  pages?: number;
}

export interface PersonsOfSignificantControl {
  name?: string;
  notifiedOn: string;
  naturesOfControl: string[];
  kind: string;
}
