// interactive elements
const photo = document.getElementsByClassName("contact__avatar")[0];
const projects = document.getElementsByClassName("right-side__portfolios")[0];

// change effect functions
function photoShowToggle(e) {
  const triggerElements = ["figcaption", "p", "div"];
  const { localName } = e.target;
  if (triggerElements.indexOf(localName) > -1) {
    const [figcaption, p, div] = triggerElements;
    photo.querySelector(figcaption).classList.toggle("captionHide");
    photo.querySelector(div).classList.toggle("clearShade");
    photo.querySelector(p).classList.toggle("showPhoto");
  }
}

function projectDisplayContent(e) {
  if (e.target.classList.contains("intro__toggle-btn")) {
    e.target.nextElementSibling.classList.toggle("showIntro");
    e.target.nextElementSibling.classList.toggle("hideIntro");

    if (e.target.innerText === "詳細") {
      e.target.innerText = "收起";
    } else {
      e.target.innerText = "詳細";
    }
  }
}

// eventListeners
photo.addEventListener("click", photoShowToggle, false);
projects.addEventListener("click", projectDisplayContent, false);
