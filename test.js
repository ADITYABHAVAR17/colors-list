import _assert from 'node:assert';
import colorNameList from './index.js';

// Function to get RGB value by color name
function getColorByName(colorName) {
    return colorNameList[colorName.toLowerCase()] || null;
}


// Example usage
console.log(getColorByName('blue')); // [0, 0, 255]
console.log(getColorByName('red')); // [255, 0, 0]
console.log(getColorByName('unknownColor')); // null

