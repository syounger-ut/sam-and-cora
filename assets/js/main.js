document.addEventListener("DOMContentLoaded", function(event){
  addScrollEvent();

  var images = document.getElementsByClassName("thumbnail");
  addListenerToImages(images);
});

function changeSelectedImage(event) {
  event.preventDefault();
  imageSrc = event.currentTarget.src;
  var selectedImage = document.getElementById("selected-image");
  selectedImage.src = imageSrc;
}

function addListenerToImages(images) {
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', changeSelectedImage, false);
  }
}

function addScrollEvent() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
}
