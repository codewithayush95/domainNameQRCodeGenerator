/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';
import qrcodeTerminal from 'qrcode-terminal'; // Import the qrcode-terminal package


inquirer.prompt({
    message: "Type URL Here",
    name: 'URL'
}).then((answers) => {
    const url = answers.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // Generate QR code as ASCII art and print to terminal
    qrcodeTerminal.generate(url, { small: true }, function (qrcode) {
        console.log(qrcode); // Print QR code as ASCII art
    });

    fs.writeFile("URl.txt",url,(err)=>{
        if(err) throw err;
        console.log('The file has been saved.')
    } )
}).catch((err)=>{

})
