//@STCGoal A sequence of shooting contains many HDR.  We read the Exif, observe the BKT -0.7, -1.0 or other data to learn which are sequence
//@a We run luminance-hdr-cli -g 1.1 -s ../my_c.tif DSC_1273.NEF  DSC_1274.NEF  DSC_1275.NEF  DSC_1276.NEF  DSC_1277.NEF

//


var ExifImage = require('exif').ExifImage;


try {
  new ExifImage({ image : './samples/DSC_1280.jpg' }, function (error, exifData) {
      if (error)
          console.log('Error: '+error.message);
      else
          console.log(exifData); // Do something with your data!
  });
} catch (error) {
  console.log('Error: ' + error.message);
}