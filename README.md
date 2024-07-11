# colors-list

A comprehensive list of color names with their corresponding RGB values.

## Installation

To install the package, use npm:

```sh
npm install colors-list
```

## Usage

This package provides an easy-to-use interface for accessing color names and their RGB values.

### Example

#### ES Module

```js
import colorNameList from 'colors-list';

// Access RGB values using color names
console.log(colorNameList.red); // [255, 0, 0]
console.log(colorNameList.aliceblue); // [240, 248, 255]
```
#### Example Code
```js
import colors from 'colors-list';
colors.red //[255,0,0]
```
#### CommonJS Module

If you need to use this package in a CommonJS environment, you can dynamically import the module:

```js
(async () => {
  const colorNameList = await import('colors-list');

  // Access RGB values using color names
  console.log(colorNameList.default.red); // [255, 0, 0]
  console.log(colorNameList.default.aliceblue); // [240, 248, 255]);
})();
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests.


## Contact

For any issues or questions, please visit the [GitHub Issues](https://github.com/ADITYABHAVAR17/colors-list/issues) page.

## Author

Aditya Bhavar
