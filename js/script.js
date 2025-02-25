function renderPage() {
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
}

function copyEmail() {
    // add copy function to the button with envelope in hero section
  // add copy function to the .email-copy in the contact section
}

renderPage();