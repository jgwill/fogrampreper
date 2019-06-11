//@STCGoal A sequence of Photogrammetry has been shot in both RAW and low res JPG.  JPG sequence are visualized and cleared manually.


var inputRawDir ,  //@cr Where are the uncleared raw.
    inputLrDir, //@cr Where we cleaned up
    outputRawDir; //@result Where are saved the raw we desire to Photogrammetrize.
//@result At the end, the deleted raw are left in the old folder.


const fs = require('fs');
const { exec } = require('child_process');

fs.readdir(".", (err, files) => {

  files.forEach(file => {
      var cmd = `mv ../ori/${file.replace(".JPG",".NEF")} ../raw`;
   // console.log(cmd);
    //@a Iterate on each file in the path
    
    //@a Move each JPG file

    exec('' + cmd, (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            return;
        }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    });

  });
});


