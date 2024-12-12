export const numberToCurrency = (value: number | string, decimalPlaces = 2) => {
    if (!value) {
        value = 0;
    }

    if (typeof value === 'string') {
        value = parseFloat(value);
    }

    return (Math.round(value * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)).toFixed(decimalPlaces);
};
export const currencyFormat = (
    value: number | string,
    currency = 'USD',
    removeZeroAfterDot = false,
    decimalPlaces = 2,
) => {
    const formattedValue = numberToCurrency(value, decimalPlaces);
    const formattedCurrency = parseFloat(formattedValue).toLocaleString('en-US', {
        style: 'currency',
        currency: currency,
    });

    if (removeZeroAfterDot) {
        return formattedCurrency.replace(/\.00$/g, '');
    }

    return formattedCurrency;
};
