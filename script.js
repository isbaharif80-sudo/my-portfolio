// Category Projects Data with All Posts/Images
const projectData = {
  food: {
    category: "RESTAURANTS & FOOD",
    title: "Restaurant Branding & Menu Creatives",
    desc: "A full showcase of high-converting food posts, promotional banners, deals flyers, and custom menu designs.",
    images: [
      "images/food-2.png", "images/food-3.png", "images/food-4.png", "images/food-5.png",
      "images/food-6.png", "images/food-7.png", "images/food-8.png", "images/food-9.png", "images/food-10.png",
      "images/food-11.png", "images/food-12.png", "images/food-13.png", "images/food-14.png", "images/food-15.png",
      "images/food-16.jpeg", "images/food-17.jpeg", "images/food-18.jpeg", "images/food-19.jpeg", "images/food-20.jpeg",
      "images/food-21.jpeg", "images/food-22.jpeg", "images/food-23.jpeg", "images/food-24.jpeg", "images/food-25.jpeg",
      "images/food-26.jpeg", "images/food-27.jpeg", "images/food-28.jpeg", "images/food-29.jpeg", "images/food-30.jpeg",
      "images/food-31.jpeg", "images/food-32.jpeg", "images/food-33.jpeg", "images/food-34.jpeg", "images/food-35.jpeg",
      "images/food-36.jpeg", "images/food-37.jpeg", "images/food-38.jpeg", "images/food-39.jpeg", "images/food-40.jpeg",
      "images/food-41.jpeg", "images/food-42.jpeg", "images/food-43.jpeg", "images/food-44.jpeg", "images/food-45.jpeg",
      "images/food-46.jpeg", "images/food-47.jpeg", "images/food-48.jpeg", "images/food-49.jpeg", "images/food-50.jpeg",
      "images/food-51.jpeg", "images/food-52.jpeg", "images/food-53.jpeg", "images/food-54.jpeg", "images/food-55.jpeg",
      "images/food-56.jpeg", "images/food-57.jpeg"
    ]
  },
  beauty: {
    category: "BEAUTY & COSMETICS",
    title: "Product Launch & UGC Style Ads",
    desc: "Aesthetic product launch creatives, cosmetics marketing grid design, and promotional ad banners.",
    images: [
      "images/beauty-2.jpeg", "images/beauty-3.jpeg", 
      "images/beauty-4.jpeg", "images/beauty-5.jpeg", 
      "images/beauty-6.jpeg", "images/beauty-7.jpeg",
      "images/beauty-8.jpeg"
    ]
  },
  realestate: {
    category: "REAL ESTATE AGENCIES",
    title: "Property Listings & Ad Creatives",
    desc: "High-converting property listing flyers, lead generation ads, and open house event graphics.",
    images: [
      "images/realestate-2.jpeg", "images/realestate-3.jpeg", "images/realestate-4.jpeg",
      "images/realestate-5.jpeg", "images/realestate-6.jpeg", "images/realestate-7.jpeg", 
      "images/realestate-8.jpeg", "images/realestate-9.jpeg"
    ]
  },
  featured: {
    category: "FEATURED DESIGNS",
    title: "Custom Brand Visuals & Creatives",
    desc: "Handcrafted signature branding concepts, high-level graphics, and bespoke social media posts.",
    images: [
      "images/featured-2.jpeg", "images/featured-3.jpeg", "images/featured-4.jpeg", 
      "images/featured-5.png", "images/featured-6.jpg", "images/featured-7.png", 
      "images/featured-8.jpg", "images/featured-9.png", "images/featured-10.png", 
      "images/featured-11.png", "images/featured-12.png", "images/featured-13.png", 
      "images/featured-14.png", "images/featured-15.png", "images/featured-16.png", 
      "images/featured-17.png", "images/featured-18.png", "images/featured-19.png" 
    ]
  },
  doctor: {
    category: "DOCTORS & HEALTHCARE",
    title: "Clinic Branding & Medical Carousels",
    desc: "Informative medical carousel posts, patient awareness guides, and modern doctor portfolio branding.",
    images: [
     "images/doctor-2.jpeg", "images/doctor-3.jpeg", "images/doctor-4.png", 
     "images/doctor-5.png", "images/doctor-6.png", "images/doctor-7.png"
    ]
  },
  travel: {
    category: "TRAVEL AGENCIES & TOURISM",
    title: "Tour Packages & Vacation Creatives",
    desc: "Eye-catching vacation deal banners, flight & tour package promo posts, and travel agency branding.",
    images: [
      "images/travel-2.jpeg", "images/travel-3.jpeg", "images/travel-4.jpeg", 
      "images/travel-5.jpeg", "images/travel-6.jpeg", "images/travel-7.jpeg", 
      "images/travel-8.jpeg", "images/travel-9.jpeg", "images/travel-10.jpeg"
    ]
  },
  video: {
    category: "ANIMATED VIDEOS & REELS",
    title: "Motion Graphics, Reels & AI Video Ads",
    desc: "High-engagement animated promo videos, motion graphics, short-form reels, and AI video campaigns.",
    images: [
      "images/video-2.mp4",
      "images/video-3.mp4",
      "images/video-4.mp4",
      "images/video-5.mp4",
      "images/video-6.mp4",
      "images/video-7.mp4",
      "images/video-8.mp4",
      "images/video-9.mp4",
      "images/video-10.mp4",
      "images/video-11.mp4",
    ]
  },
  thumbnail: {
    category: "THUMBNAILS",
    title: "Catchy YouTube Thumbnail",
    desc: "High CTR Gaming, Vlogs, Podcast, and Tech Thumbnails designed to boost video clicks.",
    images: [
      "images/thumb-1.png",
      "images/thumb-2.jpg", 
      "images/thumb-3.jpg", 
      "images/thumb-4.jpg", 
      "images/thumb-5.jpg", 
      "images/thumb-6.jpg", 
      "images/thumb-7.jpg", 
      "images/thumb-8.jpg", 
      "images/thumb-9.jpg", 
      "images/thumb-10.jpg", 
      "images/thumb-11.jpg", 
      "images/thumb-12.jpg", 
      "images/thumb-13.jpg", 
      "images/thumb-14.jpg", 
      "images/thumb-15.jpg", 
      "images/thumb-16.jpg",
      "images/thumb-17.jpg",
    ]
  },
  menu: {
    category: "MENU DESIGN",
    title: "Cafe & Restaurant Menu",
    desc: "Modern Bi-fold, Tri-fold, and digital food menu designs for restaurants & cafes.",
    images: [
      "images/menu-2.jpeg", "images/menu-3.jpeg", "images/menu-4.jpeg", "images/menu-5.jpeg", 
      "images/menu-6.jpeg", "images/menu-7.jpeg", "images/menu-8.jpeg", "images/menu-9.jpeg", 
      "images/menu-10.jpeg", "images/menu-11.jpeg", "images/menu-12.jpeg", "images/menu-13.jpeg", 
      "images/menu-14.jpeg", "images/menu-15.jpeg", "images/menu-16.jpeg", "images/menu-17.jpeg", 
      "images/menu-18.jpeg", "images/menu-19.jpeg", "images/menu-20.jpeg", "images/menu-21.jpeg", 
      "images/menu-22.jpeg", "images/menu-23.jpeg", "images/menu-24.jpeg", "images/menu-25.jpeg", 
      "images/menu-26.jpeg", "images/menu-27.jpeg", "images/menu-28.jpeg", "images/menu-29.jpeg", 
      "images/menu-30.jpeg", "images/menu-31.jpeg", "images/menu-32.jpeg", "images/menu-33.jpeg",
      "images/menu-34.jpeg", "images/menu-35.jpeg", "images/menu-36.jpeg", "images/menu-37.jpeg", 
      "images/menu-38.jpeg", "images/menu-39.jpeg"
    ]
  }
};

// Safe Image Fallback Handler (Prevents Infinite Loop)
function handleImageError(img) {
  if (img.dataset.triedFallback === "3") return;

  const currentSrc = img.src;
  const attempts = parseInt(img.dataset.triedFallback || "0", 10);

  img.dataset.triedFallback = (attempts + 1).toString();

  if (currentSrc.endsWith('.png')) {
    img.src = currentSrc.replace('.png', '.jpg');
  } else if (currentSrc.endsWith('.jpg')) {
    img.src = currentSrc.replace('.jpg', '.jpeg');
  } else if (currentSrc.endsWith('.jpeg')) {
    img.src = currentSrc.replace('.jpeg', '.png');
  }
}

// Open Full Project Page Grid Modal
function openProjectPage(categoryKey) {
  const data = projectData[categoryKey];
  if (!data) return;

  const catEl = document.getElementById("page-category");
  const titleEl = document.getElementById("page-title");
  const descEl = document.getElementById("page-desc");
  const pageEl = document.getElementById("project-page");
  const galleryGrid = document.getElementById("page-gallery-grid");

  if (catEl) catEl.innerText = data.category;
  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;

  if (galleryGrid) {
    galleryGrid.innerHTML = "";

    data.images.forEach((fileSrc, index) => {
      const card = document.createElement("div");
      card.className = "gallery-item";

      const isVideo = /\.(mp4|webm|mov)$/i.test(fileSrc);

      if (isVideo) {
        card.innerHTML = `
          <video src="${fileSrc}" controls preload="metadata" style="width: 100%; height: auto; display: block; border-radius: 12px;"></video>
        `;
      } else {
        card.innerHTML = `
          <img src="${fileSrc}" alt="Design ${index + 1}" loading="lazy" onerror="handleImageError(this)">
        `;
      }
      galleryGrid.appendChild(card);
    });
  }

  if (pageEl) {
    pageEl.classList.add("active");
    pageEl.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }
}

// Close Page View Modal
function closeProjectPage() {
  const pageEl = document.getElementById("project-page");
  if (pageEl) {
    const videos = pageEl.querySelectorAll("video");
    videos.forEach(v => v.pause());

    pageEl.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

/* ==========================================================================
   GLOBAL PROOF MODAL FUNCTIONS (EXPLICITLY ATTACHED TO WINDOW)
   ========================================================================== */
window.openProofModal = function(imgSrc) {
  const modal = document.getElementById("proof-modal");
  const modalImg = document.getElementById("modal-img");
  
  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Scroll freeze
  } else {
    console.error("Modal element with ID 'proof-modal' or 'modal-img' was not found!");
  }
};

window.closeProofModal = function() {
  const modal = document.getElementById("proof-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto"; // Scroll restore
  }
};

// Filter Buttons & Navigation Logic
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Smooth scroll ONLY for page internal anchor links (#)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Prevent clicking on the open image from closing the modal
  const modalImg = document.getElementById("modal-img");
  if (modalImg) {
    modalImg.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
});

// Copy Email Functionality
function copyEmail() {
  const emailText = "isbadi205@gmail.com";
  navigator.clipboard.writeText(emailText).then(() => {
    const copyMsg = document.getElementById("copyMsg");
    if (copyMsg) {
      copyMsg.style.display = "block";
      setTimeout(() => {
        copyMsg.style.display = "none";
      }, 3000);
    }
  });
}
/* ======================================================
   AUTO HIDE / SHOW NAVBAR ON MOBILE SCROLL
   ====================================================== */
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Sirf mobile aur smaller screens ke liye (e.g., 992px se choti screen)
  if (window.innerWidth <= 992) {
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Neeche scroll karne par navbar upar chup jaye ga
      navbar.style.transform = 'translateY(-100%)';
      navbar.style.transition = 'transform 0.3s ease-in-out';
    } else {
      // Upar scroll karne par navbar wapis appear ho jaye ga
      navbar.style.transform = 'translateY(0)';
      navbar.style.transition = 'transform 0.3s ease-in-out';
    }
  } else {
    // Desktop ke liye navbar hamesha fixed rahega
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});