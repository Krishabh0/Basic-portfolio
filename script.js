
   const seperator = document.querySelector('.horizontalLine');
   setInterval(() => {
       // Generate a random color in hexadecimal format
       const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
       seperator.style.background = randomColor;
   }, 500);

//    const image = document.querySelector('.img');
//    var position = 0; // Initial position

//    var interval = setInterval(function() {
//      // Move the element up or down
//      if (position === 0) {
//        position = 100; // Move down
//      } else {
//        position = 0; // Move up
//      }
//      image.style.top = position + 'px';
//    }, 500);
