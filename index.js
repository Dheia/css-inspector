function toggleMenu() {
    const navMenuButton = document.querySelector(".nav-menu-button")
    const mobileMenu = document.querySelector(".nav-menu")
    navMenuButton.addEventListener("click" , (event) => {
        
        if (window.getComputedStyle(mobileMenu).getPropertyValue("display") === 'none') {
            mobileMenu.style.display = 'flex'
        }
        else {
            mobileMenu.style.display = 'none'
        }
    })
}

toggleMenu()