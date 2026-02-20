var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array
if (hotItems.length > 0) {                          // If it contains items

  for (var i = 0; i < hotItems.length; i++) {       // Loop through each item
    hotItems[i].className = 'cool';         // Change value of class attribute
  }

}

var changeColor = document.getElementById('three');
 {
  changeColor.style.backgroundColor = 'Red';
  changeColor.style.color = 'yellow';
}

var pockBg = document.querySelector('li.hot');
if (hotItems.length > 0) {
  for (var i = 0; i < hotItems.length; i++) {
    hotItems[1].style.backgroundColor = 'Yellow';
  } 
   hotItems[1].style.color = 'Green';
};