/**
 * Utility function to merge class names
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Format price
 */
export const formatPrice = (price: number, currency: string = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }).format(price);
};

/**
 * Delay helper
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
