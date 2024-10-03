const fs = require('fs');
const zlib = require('zlib');

// Read the 10MB text file, compress it using gzip, and write it to a .zip file
fs.createReadStream("./content/subfolder/sample.txt")
  .pipe(zlib.createGzip()) // Compress the file
  .pipe(fs.createWriteStream("./content/subfolder/sample.zip")) // Write the compressed file
  .on('finish', () => {
    console.log("File successfully compressed");
  });
