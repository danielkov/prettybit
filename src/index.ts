const byteUnits = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const bitUnits = [
  'b',
  'kbit',
  'Mbit',
  'Gbit',
  'Tbit',
  'Pbit',
  'Ebit',
  'Zbit',
  'Ybit',
];

const transform = (value: number, units: string[]) => {
  const prefix = value >= 0 ? '' : '-';
  const amount = Math.abs(value);
  if (amount === 0) {
    return `0 ${units[0]}`;
  }

  const exponent = Math.min(
    Math.floor(Math.log10(Math.abs(amount)) / 3),
    units.length - 1,
  );

  const number = Number((amount / 1000 ** exponent).toPrecision(3));

  const unit = units[exponent];

  return `${prefix}${number.toLocaleString()} ${unit}`;
};

export const bytes = (amount: number) => transform(amount, byteUnits);

export const bits = (amount: number) => transform(amount, bitUnits);
