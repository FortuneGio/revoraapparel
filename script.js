// Add smooth scroll when clicking on nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Get all the clothing items and the image element
const clothingItems = document.querySelectorAll('.clothing-item');
const displayedImage = document.getElementById('displayed-image');

// Add event listener to each clothing item
clothingItems.forEach(item => {
  item.addEventListener('click', function() {
    // Get the image filename from the data attribute
    const imageSrc = item.getAttribute('data-image');

    // Update the image element's src and make it visible
    displayedImage.src = imageSrc;
    displayedImage.style.display = 'block';
  });
});

  