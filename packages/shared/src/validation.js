/**
 * UK-specific validation utilities
 */

export const isValidCompanyNumber = (number) => {
  if (!number) return false;
  const normalized = String(number).toUpperCase().trim();
  return /^(SC|NI|OC|SO|NC|R|FC|GE|IP|LP|SL|SZ)?[0-9]{6,8}$/.test(normalized);
};

export const isValidVATNumber = (vat) => {
  if (!vat) return false;
  const normalized = String(vat).toUpperCase().replace(/\s/g, '');
  return /^GB([0-9]{9}|[0-9]{12}|GD[0-9]{3}|HA[0-9]{3})$/.test(normalized);
};

export const isValidUTR = (utr) => {
  if (!utr) return false;
  const normalized = String(utr).replace(/\s/g, '');
  return /^[0-9]{10}$/.test(normalized);
};
