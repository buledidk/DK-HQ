/**
 * Money formatting utilities - GBP default for UK audit
 */

export const formatGBP = (amount, options = {}) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    ...options,
  }).format(amount || 0);
};

export const parseAmount = (value) => {
  if (typeof value === 'number') return value;
  if (!value) return 0;
  return parseFloat(String(value).replace(/[£,\s]/g, '')) || 0;
};

export const roundToPence = (amount) => Math.round(amount * 100) / 100;
