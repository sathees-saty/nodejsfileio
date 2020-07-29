var fs = require('fs');
//using writeFile function to create and writeFile
fs.writeFile('mywfile.txt', 'SATY Learning creating file using Node.js!', function (err) {
  if (err) throw err;
// Console will print the message  
  console.log('File Created and Saved!');
});