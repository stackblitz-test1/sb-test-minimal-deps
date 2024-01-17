import { defaults, partition } from 'lodash-es';

console.log(`// ${import.meta.url}`);
console.log(defaults({ a: 1 }, { a: 3, b: 2 }));
console.log(partition([1, 2, 3, 4], (n) => n % 2));
