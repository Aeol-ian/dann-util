# Let's make code more simply!

❤ Simple functions for easy Coding.

## Installation
`$ npm install dann-util`

# Class and Methods

```JavaScript
const Util = require("dann-util");
// const { delay, unique } = require("dann-util");

await Util.delay(5000);


const unqiueArray = Util.unique([1, 1, 5, 1, 6, 7, 7, 5, 9, 5]);
console.log(uniqiueArray);

// After 5 seconds, Output: [1, 5, 6, 7, 9]
```

# Functions

### delay(ms)
Stopping the code for the time.

| PARAMETER  | TYPE | OPTIONAL | DEFAULT
| ------------- |:-------------:|:------:|:----:|
| ms     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  | | | 

### random(min, max)
Gives a random number between the specified range.
If `max` not specified, `min` will be `1`.

| PARAMETER  | TYPE | OPTIONAL| DEFAULT
| ------------- |:-------------:|:-----:|:----:
| min      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     |  | |
| max      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     | 🗸  | |
#### Returns: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### unique(array)
Removes duplicates from array.

| PARAMETER  | TYPE | OPTIONAL | DEFAULT
| ------------- |:-------------:|:-----------:|:---:|
| array      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)     |  | |
#### Returns: [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### shuffle(array)
Shuffles an array.

| PARAMETER  | TYPE | OPTIONAL | DEFAULT
| ------------- |:-------------:|:------:|:----:
| array      | [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)     |  |
#### Returns: [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### crFormat(number)
Makes a currency string ("150k").

| PARAMETER  | TYPE | OPTIONAL |DEFAULT
| ------------- |:-------------:|:---------:|:----:
| number      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     |  | 
#### Returns: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### formatNumber(number, locale)
Changes the format of number ("1,000,000").

| PARAMETER  | TYPE | OPTIONAL |DEFAULT
| ------------- |:-------------:|:---------:|:----:
| number      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     |  | 
| locale      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     | 🗸 | en-us
#### Returns: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### shorten(text, maxLength)
Shorts the text by adding "...".

| PARAMETER  | TYPE | OPTIONAL |DEFAULT
| ------------- |:-------------:|:---------:|:----:
| text      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)     |  | 
| maxLength      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     | 🗸 | 2000
#### Returns: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### stringify(object, space)
JSON.stringify, but more simply.

| PARAMETER  | TYPE | OPTIONAL |DEFAULT
| ------------- |:-------------:|:---------:|:----:
| object      | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)     |  | 
| space      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)     | 🗸 | 2
#### Returns: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


## Join to us!

* 💚 [Discord Embed Maker](https://www.npmjs.com/package/dann-embed)
* 💜 [OnlyChill Discord Server](https://discord.gg/2kAxJW4rzK)