/**
 * Risk Assessment - ISA (UK) 315
 * Identifies and assesses the risks of material misstatement
 */

export const RISK_CATEGORIES = {
  INHERENT: 'inherent',
  CONTROL: 'control',
  DETECTION: 'detection',
};

export const ASSERTIONS = {
  EXISTENCE: 'existence',
  COMPLETENESS: 'completeness',
  ACCURACY: 'accuracy',
  VALUATION: 'valuation',
  RIGHTS_OBLIGATIONS: 'rights_and_obligations',
  PRESENTATION: 'presentation_and_disclosure',
  CUTOFF: 'cutoff',
  CLASSIFICATION: 'classification',
};

export class RiskAssessment {
  constructor(config = {}) {
    this.config = config;
    this.procedures = this.initProcedures();
  }

  initProcedures() {
    return {
      [ASSERTIONS.EXISTENCE]: [
        'Physical inspection',
        'Third-party confirmation',
        'Observation',
      ],
      [ASSERTIONS.COMPLETENESS]: [
        'Cut-off testing',
        'Analytical procedures',
        'Subsequent events review',
      ],
      [ASSERTIONS.ACCURACY]: [
        'Recalculation',
        'Vouching to source documents',
        'Reperformance',
      ],
      [ASSERTIONS.VALUATION]: [
        'Independent valuation',
        'Management estimate review',
        'Expert consultation',
      ],
      [ASSERTIONS.RIGHTS_OBLIGATIONS]: [
        'Legal confirmation',
        'Contract review',
        'Title documents inspection',
      ],
      [ASSERTIONS.PRESENTATION]: [
        'Disclosure checklist review',
        'Financial statement review',
        'Comparative analysis',
      ],
      [ASSERTIONS.CUTOFF]: [
        'Before/after period testing',
        'Sample testing near period end',
      ],
      [ASSERTIONS.CLASSIFICATION]: [
        'Account mapping review',
        'Chart of accounts analysis',
      ],
    };
  }

  /**
   * Calculate overall risk of material misstatement
   * RMM = Inherent Risk × Control Risk
   */
  calculateRMM(inherentRisk, controlRisk) {
    const validate = (r) => {
      if (r < 0 || r > 1) throw new Error('Risk must be between 0 and 1');
      return r;
    };
    return validate(inherentRisk) * validate(controlRisk);
  }

  /**
   * Calculate required detection risk
   * DR = AR / RMM (where AR is acceptable audit risk, typically 0.05)
   */
  calculateDetectionRisk(auditRisk, rmm) {
    if (rmm === 0) return 1;
    return Math.min(auditRisk / rmm, 1);
  }

  getProceduresFor(assertion) {
    return this.procedures[assertion] || [];
  }

  assessRiskLevel(riskValue) {
    if (riskValue < 0.3) return 'LOW';
    if (riskValue < 0.7) return 'MEDIUM';
    return 'HIGH';
  }
}
