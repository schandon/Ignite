const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('SR000001-S.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // number of pages
    console.log(data.name_vessel);
    // number of rendered pages
    console.log(data.flag_registry);
    // PDF info
    console.log(data.work_order);
    // PDF metadata
    console.log(data.collaborators_name); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.data_service);
    // PDF text
    console.log(data.service_port); 
        
});