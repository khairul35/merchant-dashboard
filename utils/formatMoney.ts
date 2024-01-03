export const formatMoney = (amount: number, currency: string): string => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });
    return formatter.format(amount);
};
