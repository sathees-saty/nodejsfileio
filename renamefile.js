var fs = require('fs');
//using rename function to rename file
fs.rename('mywfile.txt', 'mynewfile.txt', function (err) {
  if (err) throw err;
// Console will print the message 
  console.log('File is Renamed!');
});