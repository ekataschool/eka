//----------------------------------------------------nav bar start----------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
  
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });
  
  // nav bar end//
  
  //------------------------------------------------------hero start----------------------------------------------------------------------//
  
  document.addEventListener("DOMContentLoaded", () => {
    bulmaCarousel.attach("#slider-demo", {
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      animation: "fade", // Add this line for a smooth transition effect
      duration: 500 // Adjust duration as needed
    });
  });
  
  
  //-------------------------- navigating script start----------------------------------------
  document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar items
    const homeNavItem = document.querySelector(".navbar-item.text-not-selected:nth-child(1)");
    const coursesNavItem = document.querySelector(".navbar-item.text-not-selected:nth-child(2)");
    const aboutNavItem = document.querySelector(".navbar-item.text-not-selected:nth-child(3)");
    const facilitiesNavItem = document.querySelector(".navbar-item.text-not-selected:nth-child(4)");
    const contactNavItem = document.querySelector(".navbar-item.text-not-selected:nth-child(5)");
    // Get the corresponding sections
    const homeSection = document.getElementById("home");
    const coursesSection = document.getElementById("courses");
    const aboutSection = document.getElementById("about");
    const facilitiesSection = document.getElementById("facilities");
    const contactSection = document.getElementById("contact");
  
    // Add click event listeners to the navbar items
    homeNavItem.addEventListener("click", () => scrollToSection(homeSection));
    coursesNavItem.addEventListener("click", () => scrollToSection(coursesSection));
    aboutNavItem.addEventListener("click", () => scrollToSection(aboutSection));
    facilitiesNavItem.addEventListener("click", () => scrollToSection(facilitiesSection));
    contactNavItem.addEventListener("click", () => scrollToSection(contactSection));
  
    // Function to scroll to a section
    function scrollToSection(section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
  
  // ---------------------------navigating script end-------------------------
  
  // -----------------------goto top script start-------------------------------
  document.addEventListener("DOMContentLoaded", function() {
    const goUpButton = document.getElementById("go-up-button");
  
    // Function to toggle the visibility of the "Go Up" button
    function toggleGoUpButtonVisibility() {
      if (window.scrollY > 0) {
        goUpButton.style.display = "block";
      } else {
        goUpButton.style.display = "none";
      }
    }
  
    // Initial check for button visibility
    toggleGoUpButtonVisibility();
  
    // Listen for scroll events to update button visibility
    window.addEventListener("scroll", toggleGoUpButtonVisibility);
  
    // Scroll to top when the button is clicked
    goUpButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  
  
  // -----------------------goto top script end-------------------------------
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Hide the loading screen after a timeout
        document.querySelector(".loading-screen").style.display = "none";
    }, 5000); // Change the timeout value (in milliseconds) as needed
});
  
  