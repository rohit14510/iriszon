function showCategory(category, event) {
    event.preventDefault();
    
    // Remove active class from all
    document.querySelectorAll('.category-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Add active class to clicked
    event.currentTarget.classList.add('active');
    
    // Here you can load different content based on category
    console.log('Selected category:', category);
  }
   document.querySelectorAll('.mobile-bottom-bar .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all
      document.querySelectorAll('.mobile-bottom-bar .nav-link').forEach(l => {
        l.classList.remove('active');
      });
      
      // Add active class to clicked
      this.classList.add('active');
    });
  });
 // Hero Swiper Slider
  var swiper = new Swiper(".heroSwiper", {
    slidesPerView: 2,        
    spaceBetween: 20,
    loop: true,
  speed: 900, 
  effect: "slide", 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".heroSlider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".heroSlider-next",
      prevEl: ".heroSlider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // Mobile view
      },
      768: {
        slidesPerView: 1, // Tablet and up
      },
    },
  });

 var swiper = new Swiper('.categorySwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".BannerSwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 600,
    });
  });
 
  const buttons = document.querySelectorAll('.category-btn');
  const bodySection = document.getElementById('bodySection');
  const skinSection = document.getElementById('skinSection');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;

      if (category === 'body') {
        bodySection.style.display = 'flex';
        skinSection.style.display = 'none';
      } 
      else if (category === 'skin') {
        skinSection.style.display = 'flex';
        bodySection.style.display = 'none';
      } 
      else { // all
        skinSection.style.display = 'flex';
        bodySection.style.display = 'flex';
      }
    });
  });

  // Default: All products visible
  skinSection.style.display = 'flex';
  bodySection.style.display = 'flex';
//product image gallery
 let currentIndex = 0;

    function changeImage(el, index) {
      document.querySelectorAll('.thumbnails img').forEach(img => img.classList.remove('active'));
      el.classList.add('active');

      const mainImg = document.getElementById('mainImg');
      mainImg.src = el.src;

      // Update spotlight main link
      const mainLink = mainImg.parentElement;
      const spotlightLinks = document.querySelectorAll('#spotlightGallery a');
      mainLink.href = spotlightLinks[index].href;

      currentIndex = index;
    }

    

    