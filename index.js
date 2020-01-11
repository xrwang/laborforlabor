var lastIndex = 0;




function randomImage() {
  var theImage = document.getElementById('siteimage');
  var imgDir = 'images/';
  var imgArray = new Array('IMG_5975.JPG','IMG_5976.JPG','IMG_5977.JPG');
  var imgIndex = 0;

  if(imgArray.length >= 1) {

   while(imgIndex == lastIndex) {
      imgIndex = Math.floor(Math.random() * imgArray.length);
   }
     lastIndex = imgIndex;

     var imgPath = imgDir + imgArray[imgIndex];

     theImage.src = imgPath;
     theImage.alt = imgArray[imgIndex];
  }
}

randomImage();
