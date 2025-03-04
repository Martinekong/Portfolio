function renderPage() { //call this function something else?
  showNavigationMenu();
  showProjectCards();
  copyEmail();
}

function showNavigationMenu() {
  const navBtn = document.getElementById("nav-btn");
  const closeBtn = document.getElementById("close-btn");
  const navigation = document.getElementById("navigation");
  const navLinks = document.querySelectorAll("#navigation a");

  navBtn.addEventListener("click", () => {
    navigation.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("show");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("show");
    });
  });

  // need to add event listener to close the navigation when clicking outside
}

function showProjectCards() {
  document.querySelectorAll(".project-banner").forEach(banner => {
    banner.addEventListener("click", () => {
      const dropdown = banner.nextElementSibling;
      
      dropdown.classList.toggle("show");
  
      const icon = banner.querySelector("i");
      icon.classList.toggle("rotate");
    });
  });

  // Need to add event listener so that when one card is open, it closes when another is opened
}

function copyEmail() {
  // add copy function to the button with envelope in hero section
  // add copy function to the .email-copy in the contact section
  
  // add overlays to show the user the url has been copied
}

renderPage();