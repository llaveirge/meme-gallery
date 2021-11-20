const $gallery = document.querySelector('main');

const imageUrls = [
  'https://static3.cbrimages.com/wordpress/wp-content/uploads/2017/12/star-trek-memes.jpg',
  'https://www.techrepublic.com/a/hub/i/r/2017/03/24/d606aa81-e947-4449-b368-5d2e99cbf08b/resize/1200x900/7e9aecb7aaf38871f27440aee6e32817/119823.jpg',
  'https://thirtymarensagree.files.wordpress.com/2020/12/2020-slide.jpg?w=952'
];

const $imageUrlInput = document.querySelector('input');

const $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for ( i=0; i< imageUrls.length; i++) {
  var $imageElement = document.createElement('img');
  $imageElement.className = "gallery-image";
  $imageElement.src = imageUrls[i];
  $gallery.appendChild($imageElement);
  }
}

updateGallery();
