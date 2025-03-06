function loadPageComponents() { 
  showNavigationMenu();
  showProjectCards();
  addTopBtn();
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

  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !navBtn.contains(event.target)) {
      navigation.classList.remove("show");
    }
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

const heroEmailBtn = document.getElementById("hero-email");

function copyEmail() {
  const email = "martinekongsrud@outlook.com"

  navigator.clipboard.writeText(email).then(() => {
    const overlay = document.createElement("p")
    overlay.classList.add("copy-overlay");
    overlay.textContent = "Email copied"

    heroEmailBtn.appendChild(overlay)
    setTimeout(() => {
      heroEmailBtn.removeChild(overlay)
    }, 2000)
  }).catch(error => {
    console.error("Failed to copy email: ", error);
  });
  }

  function addTopBtn() {
    const topBtn = document.createElement("button");
    topBtn.classList.add("top-btn")
    topBtn.setAttribute("aria-label", "Back to top");
    const topIcon = document.createElement("i")
    topIcon.classList.add("fa-solid", "fa-chevron-up");
    topBtn.appendChild(topIcon);
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });
  
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });  
  }
  

loadPageComponents();

heroEmailBtn.addEventListener("click", copyEmail);