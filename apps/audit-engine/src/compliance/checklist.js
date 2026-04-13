/**
 * Compliance Checklist - FRS 102 & Companies Act 2006
 */

export const FRS_102_DISCLOSURES = [
  'Statement of compliance with FRS 102',
  'Accounting policies',
  'Critical judgements and estimates',
  'Revenue recognition basis',
  'Going concern assessment',
  'Related party transactions',
  'Post-balance sheet events',
  'Contingent liabilities and commitments',
];

export const COMPANIES_ACT_2006 = {
  SMALL_COMPANY: {
    turnover: 10_200_000,
    balanceSheet: 5_100_000,
    employees: 50,
  },
  MEDIUM_COMPANY: {
    turnover: 36_000_000,
    balanceSheet: 18_000_000,
    employees: 250,
  },
};

export class ComplianceChecklist {
  constructor(config = {}) {
    this.config = config;
  }

  /**
   * Run full compliance checklist for an engagement
   */
  run(engagement) {
    return {
      engagementId: engagement.id,
      frs102: this.checkFRS102(engagement),
      companiesAct: this.checkCompaniesAct(engagement),
      runAt: new Date().toISOString(),
    };
  }

  checkFRS102(engagement) {
    return FRS_102_DISCLOSURES.map((item) => ({
      requirement: item,
      status: 'pending',
      notes: '',
    }));
  }

  checkCompaniesAct(engagement) {
    return [
      { requirement: 'Filing deadline compliance', status: 'pending' },
      { requirement: 'Director duties review', status: 'pending' },
      { requirement: 'Statutory audit threshold check', status: 'pending' },
      { requirement: 'Confirmation statement filed', status: 'pending' },
    ];
  }

  /**
   * Determine company size per Companies Act 2006 thresholds
   */
  classifyCompanySize(financials) {
    const { turnover = 0, balanceSheet = 0, employees = 0 } = financials;
    const meetsSmall =
      [
        turnover <= COMPANIES_ACT_2006.SMALL_COMPANY.turnover,
        balanceSheet <= COMPANIES_ACT_2006.SMALL_COMPANY.balanceSheet,
        employees <= COMPANIES_ACT_2006.SMALL_COMPANY.employees,
      ].filter(Boolean).length >= 2;
    const meetsMedium =
      [
        turnover <= COMPANIES_ACT_2006.MEDIUM_COMPANY.turnover,
        balanceSheet <= COMPANIES_ACT_2006.MEDIUM_COMPANY.balanceSheet,
        employees <= COMPANIES_ACT_2006.MEDIUM_COMPANY.employees,
      ].filter(Boolean).length >= 2;

    if (meetsSmall) return 'SMALL';
    if (meetsMedium) return 'MEDIUM';
    return 'LARGE';
  }
}
