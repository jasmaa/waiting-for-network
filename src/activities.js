import * as pluralize from 'pluralize';

export const activities = [
  {
    generator: (n, item) => `Eat ${n} ${pluralize(item, n)} at the ballpark.`,
    item: 'hotdog',
    rate: 1/300,
  },
  {
    generator: (n, item) => `Make ${n} poorly-written web ${pluralize(item, n)}.`,
    item: 'app',
    rate: 1/12600,
  },
  {
    generator: (n, item) => `Read ${n} ${pluralize(item, n)} of A Certain Magical Index.`,
    item: 'volume',
    rate: 1/28800,
  },
];