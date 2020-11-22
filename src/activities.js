import * as pluralize from 'pluralize';

export const activities = [
  {
    generator: (n, item) => `Sleep for ${n} ${pluralize(item, n)}.`,
    item: 'hour',
    rate: 1 / 3600,
  },
  {
    generator: (n, item) => `Count ${n} ${pluralize(item, n)}.`,
    item: 'sheep',
    rate: 1,
  },
  {
    generator: (n, item) => `Eat ${n} ${pluralize(item, n)}.`,
    item: 'hotdog',
    rate: 1 / 300,
  },
  {
    generator: (n, item) => `Circle campus ${n} ${pluralize(item, n)} on foot.`,
    item: 'time',
    rate: 1 / 6000,
  },
  {
    generator: (n, item) => `Ask ${n} ${pluralize(item, n)} on Piazza.`,
    item: 'questions',
    rate: 1 / 60,
  },
  {
    generator: (n, item) => `Take ${n} round ${pluralize(item, n)} from MD to NYC.`,
    item: 'trip',
    rate: 1 / 24960,
  },
  {
    generator: (n, item) => `Rub Testudo's nose ${n} ${pluralize(item, n)}.`,
    item: 'time',
    rate: 4,
  },
  {
    generator: (n, item) => `Drink ${n} ${pluralize(item, n)} of water.`,
    item: 'bottle',
    rate: 1 / 180,
  },
  {
    generator: (n, item) => `Save ${n} ${pluralize(item, n)} before they hit Iribe.`,
    item: 'bird',
    rate: NaN,
  },
  {
    generator: (n, item) => `Draw ${n} ${pluralize(item, n)}.`,
    item: 'cow',
    rate: 1 / 11.78,
  },
  {
    generator: (n, item) => `Catch ${n} ${pluralize(item, n)} in Pokemon Go.`,
    item: 'Pikachu',
    rate: 1 / 240,
  },
  {
    generator: (n, item) => `Listen to ${n} K-pop ${pluralize(item, n)}.`,
    item: 'song',
    rate: 1 / 189,
  },
  {
    generator: (n, item) => `Go on ${n} ${pluralize(item, n)}.`,
    item: 'date',
    rate: 0,
  },
  {
    generator: (n, item) => `Read ${n} ${pluralize(item, n)}.`,
    item: 'tweet',
    rate: 1 / 2,
  },
  {
    generator: (n, item) => `Microwave ${n} ${pluralize(item, n)}®.`,
    item: 'Hot Pocket',
    rate: 1 / 180,
  },
  {
    generator: (n, item) => `Use the toilet ${n} ${pluralize(item, n)}.`,
    item: 'time',
    rate: 1 / 960,
  },
  {
    generator: (n, item) => `Send out ${n} grad school ${pluralize(item, n)}.`,
    item: 'application',
    rate: 1 / 43200,
  },
  {
    generator: (n, item) => `Take ${n} standardized ${pluralize(item, n)}.`,
    item: 'exam',
    rate: 1 / 10800,
  },
  {
    generator: (n, item) => `Fill out ${n} job ${pluralize(item, n)}.`,
    item: 'application',
    rate: 1 / 120,
  },
  {
    generator: (n, item) => `Plan ${n} virtual ${pluralize(item, n)}.`,
    item: 'event',
    rate: 1 / 25200,
  },
  {
    generator: (n, item) => `Win as imposter in ${n} ${pluralize(item, n)} of Among Us.`,
    item: 'game',
    rate: 1 / 36000,
  },
  {
    generator: (n, item) => `Create ${n} poorly-written web ${pluralize(item, n)}.`,
    item: 'app',
    rate: 1 / 12600,
  },
  {
    generator: (n, item) => `Read ${n} ${pluralize(item, n)} of A Certain Magical Index.`,
    item: 'volume',
    rate: 1 / 28800,
  },
];