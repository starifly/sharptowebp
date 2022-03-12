
'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


const INPUT = './input';
const OUTPUT = './output';


fs.readdir(INPUT, (err, files) => {
    if (err) {
        console.warn(err);
    } else {
        for (let i of files) {
            
            // input 
            const input = path.join(INPUT, i);
            
            // output
            const name = i.substring(0, i.lastIndexOf('.'));
            const output = path.join(OUTPUT, name + '.webp');
            
            sharp(input)
				.webp({
					quality: 90
			})
                .toFile(output, (err, info) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`${input} to ${output} Successful conversion`);
                    }
                });
        }
    }
})
    