/**
 * Working Papers Generator
 * Generates ISA-compliant working papers for audit engagements
 */

export const WORKING_PAPER_TYPES = {
  LEAD_SCHEDULE: 'lead_schedule',
  TEST_OF_CONTROLS: 'test_of_controls',
  SUBSTANTIVE_TEST: 'substantive_test',
  ANALYTICAL_REVIEW: 'analytical_review',
  PLANNING_MEMO: 'planning_memo',
  COMPLETION_MEMO: 'completion_memo',
};

export class WorkingPapers {
  constructor(config = {}) {
    this.config = config;
  }

  /**
   * Generate a standard set of working papers for an engagement
   */
  generate(engagement) {
    return {
      engagementId: engagement.id,
      papers: [
        this.createLeadSchedule(engagement),
        this.createPlanningMemo(engagement),
      ],
      generatedAt: new Date().toISOString(),
    };
  }

  createLeadSchedule(engagement) {
    return {
      type: WORKING_PAPER_TYPES.LEAD_SCHEDULE,
      reference: `LS-${engagement.id}`,
      title: 'Lead Schedule',
      sections: [
        { name: 'Current Year Balance', required: true },
        { name: 'Prior Year Balance', required: true },
        { name: 'Variance', required: true },
        { name: 'Cross-References', required: true },
      ],
    };
  }

  createPlanningMemo(engagement) {
    return {
      type: WORKING_PAPER_TYPES.PLANNING_MEMO,
      reference: `PM-${engagement.id}`,
      title: 'Audit Planning Memorandum',
      sections: [
        { name: 'Client Background', required: true },
        { name: 'Risk Assessment', required: true },
        { name: 'Materiality', required: true },
        { name: 'Audit Strategy', required: true },
        { name: 'Team Composition', required: true },
        { name: 'Timeline', required: true },
      ],
    };
  }

  /**
   * Calculate materiality per ISA 320
   */
  calculateMateriality(financials, benchmark = 'profit_before_tax') {
    const BENCHMARKS = {
      profit_before_tax: 0.05,
      revenue: 0.005,
      total_assets: 0.005,
      equity: 0.01,
    };
    const percentage = BENCHMARKS[benchmark] || 0.05;
    const baseAmount = financials[benchmark] || 0;
    const overall = Math.abs(baseAmount * percentage);
    return {
      overall,
      performance: overall * 0.75,
      trivial: overall * 0.05,
      benchmark,
      percentage,
    };
  }
}
