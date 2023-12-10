// TOGGLE NAV

const toggleBtn = document.querySelector(".hamburger-menu");
  const dropDownMenu = document.querySelector(".dropdown_menu");

  toggleBtn.onclick = () => {
    const iconElement = document.getElementById("menuIcon");
    const isOpen = dropDownMenu.classList.contains("open");
    
    // Toggle the "open" class
    dropDownMenu.classList.toggle("open");

    // Set the attribute based on the "open" class
    const newIcon = isOpen ? "menu" : "x";
    iconElement.setAttribute("data-feather", newIcon);

    // Redraw the icon using Feather Icons library
    feather.replace();
  };

