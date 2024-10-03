const http = require('http');
const {writeFileSync} = require('fs');
// Function to generate a string of size 10MB
const generateLargeText = () => {
  const textSize = 10 * 1024 * 1024; // 10MB in bytes
  const sampleText = 'A'; // Single character (1 byte)

  // Repeat the character to reach the desired size
  return sampleText.repeat(textSize);
};

writeFileSync("./content/subfolder/sample.txt",`${generateLargeText()}`)
// Create HTTP server

