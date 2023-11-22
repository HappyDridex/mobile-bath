export const fieldsAreFilled = (...args: (string | number | null)[]): boolean => {
    return args.every((el) => !!el) ? true : false;
};

export const returnOnlyNumbers = (string: string, negativeAllowed: boolean = false) => {
    if (negativeAllowed) {
        return string.replace(/[^0-9.-]/g, '');
    } else {
        return string.replace(/[^0-9.]/g, '');
    }
};

export const returnTelFomat = (string: string) => {
    return string.replace(/[^0-9()+-]/g, '');
};
