export function extractNumberFromPrice(value: string): number {
    if (value.startsWith('$')) {
      const numericValue = parseFloat(value.slice(1));
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return 0;
  }