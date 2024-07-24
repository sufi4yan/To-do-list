const path = require('path');

module.exports = {
    entry: './src/index.js', // Your main JavaScript file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'development', // Set to 'production' for minified code
};
