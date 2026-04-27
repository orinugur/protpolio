const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:/Users/jade9/workspace/portpolio/public/1-agrishield/[CleviCS]병해충 탐지 플랫폼_260414.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error){
    console.error(error);
});
