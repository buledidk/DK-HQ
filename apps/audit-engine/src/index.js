/**
 * DK-HQ Audit Engine
 *
 * Professional Audit Automation Platform
 * - ISA (UK) compliant
 * - FRS 102 compliant
 * - Companies Act 2006 compliant
 */

import { RiskAssessment } from './compliance/risk-assessment.js';
import { WorkingPapers } from './compliance/working-papers.js';
import { ComplianceChecklist } from './compliance/checklist.js';

export class AuditEngine {
  constructor(config = {}) {
    this.config = {
      standard: 'ISA_UK',
      framework: 'FRS_102',
      ...config,
    };
    this.riskAssessment = new RiskAssessment(this.config);
    this.workingPapers = new WorkingPapers(this.config);
    this.checklist = new ComplianceChecklist(this.config);
  }

  /**
   * Initialize a new audit engagement
   */
  async createEngagement(client) {
    return {
      id: `ENG-${Date.now()}`,
      client,
      standard: this.config.standard,
      framework: this.config.framework,
      createdAt: new Date().toISOString(),
      status: 'planning',
    };
  }

  /**
   * Get available audit procedures for a given assertion
   */
  getProcedures(assertion) {
    return this.riskAssessment.getProceduresFor(assertion);
  }

  /**
   * Generate working papers for an engagement
   */
  generateWorkingPapers(engagement) {
    return this.workingPapers.generate(engagement);
  }

  /**
   * Run compliance checklist
   */
  runChecklist(engagement) {
    return this.checklist.run(engagement);
  }
}

export default AuditEngine;
