let year = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
oLastModif = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(oLastModif);


document.getElementById(
  "currentyear"
).textContent = `${year}`;
document.getElementById(
  "lastModified"
).textContent = `Last Modification: ${oLastModif}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery div');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('caption');

  galleryItems.forEach(item => {
      const img = item.querySelector('img');
      const caption = item.querySelector('p').textContent;

      // Add click event to each image
      img.addEventListener('click', () => {
          lightboxImg.src = img.src;
          lightboxCaption.textContent = caption;
          lightbox.style.display = 'block';
      });
  });

  // Close lightbox functionality
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
  });
});