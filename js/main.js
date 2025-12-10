 (() =>{ 

console.log("JavaScript File is linked");

const navToggle = document.querySelector('#navToggle');
const navMenu = document.querySelector('#navMenu');


function toggleNavMenu() {
    console.log("toggle nav function called");
    navMenu.classList.toggle('running');
    navToggle.classList.toggle('running');
    console.log("Navigation menu toggled - running state:", navMenu.classList.contains('running'));
}

function closeNavMenu() {
    console.log("close nav function called");
    navMenu.classList.remove('running');
    navToggle.classList.remove('running');
    console.log("Navigation menu closed");
}

function closeNavMenuOnClickOutside(e) {
    console.log("click outside nav function called");
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        console.log("clicked outside of nav");
        closeNavMenu();
    } else {
        console.log("clicked inside nav, menu stays open");
    }
}

// event listeners
if (navToggle && navMenu) {
    console.log("nav elements found ");
    
    navToggle.addEventListener('click', toggleNavMenu);
    console.log("toggle button event listener added");

    const navLinks = navMenu.querySelectorAll('a');
    console.log("found", navLinks.length, "nav links");
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavMenu);
    });
    console.log("nav link event listeners added");

    document.addEventListener('click', closeNavMenuOnClickOutside);
    console.log("document click event listener added");
    
} else {
    console.log("nav elements not found");
}



// SIDE SCROLLING BANDS SIDE SCROLLING BANDS SIDE SCROLLING BANDS SIDE SCROLLING BANDS 


const topMarquee = document.querySelector("#top-stripe .scrolling-text");
const bottomMarquee = document.querySelector("#bottom-stripe .scrolling-text");

function updatePosition(currentX, wrapWidth) {
  const numericX = parseFloat(currentX);

  if (numericX <= -wrapWidth) {
    return "0px";
  }

  if (numericX > 0) {
    return -wrapWidth + "px";
  }

  return numericX + "px";
}

function startMarquee(element, duration, direction) {
  const width = element.scrollWidth;
  const startX = direction === "left" ? 0 : -width;
  const endX = direction === "left" ? -width : 0;

  gsap.set(element, { x: startX });

  gsap.to(element, {
    x: endX,
    duration: duration,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: function(nextX) {
        return updatePosition(nextX, width);
      }
    }
  });
}

startMarquee(topMarquee, 20, "left");
startMarquee(bottomMarquee, 20, "right");

})();


