## numbers to words en and ge
This is a library for converting numbers to words or ordinals for both English and German.
Also supporting floats.


#### toWords
```typescript
//will print 'six hundred fifty-four point eight nine'
console.log(toWords(654.89));

//will print 'sechs hundert vierundfünfzig komma acht neun'
console.log(toWords(654.89, 'ge'));
```

#### toOrdinal
Since in Germany the ending depends on the gender, there are options for female (f), male (m) and neutral (n).
```typescript
//will print '654th'
console.log(toOrdinal(654));

//will print '654ster'
console.log(toOrdinal(654, 'ge', 'm'));

//will print '654ste'
console.log(toOrdinal(654, 'ge', 'f'));

//will print '654stes'
console.log(toOrdinal(654, 'ge', 'n'));
```

#### toOrdinalWords
Same for ordinals as words, there are options for female (f), male (m) and neutral (n). 
```typescript
//will print '654th'
console.log(toOrdinalWords(654));

//will print 'sechshundert vierundfünfzigstes'
console.log(toOrdinalWords(654, 'ge', 'n'));

//will print 'sechshundert vierundfünfzigste'
console.log(toOrdinalWords(654, 'ge', 'f'));

//will print 'sechshundert vierundfünfzigster'
console.log(toOrdinalWords(654, 'ge', 'm'));
```

This library extends [number-to-words](https://github.com/marlun78/number-to-words).