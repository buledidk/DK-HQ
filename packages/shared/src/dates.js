/**
 * Date utilities for UK audit (fiscal year handling)
 */

export const formatUKDate = (date) => {
  const d = date instanceof Date ? date : new Date(date);
  return d.toLocaleDateString('en-GB');
};

export const getFiscalYear = (date) => {
  const d = date instanceof Date ? date : new Date(date);
  const month = d.getMonth();
  const year = d.getFullYear();
  return month >= 3 ? year : year - 1;
};

export const daysBetween = (start, end) => {
  const s = start instanceof Date ? start : new Date(start);
  const e = end instanceof Date ? end : new Date(end);
  return Math.floor((e - s) / (1000 * 60 * 60 * 24));
};
