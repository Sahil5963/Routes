import { MDCTopAppBar } from "@material/top-app-bar/index";
import { MDCRipple } from "@material/ripple";
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

import { MDCList } from '@material/list';
import { MDCNotchedOutline } from '@material/notched-outline';

import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';










const iconButtonRipple = [].map.call(document.querySelectorAll('.mdc-icon-button'), function (el) {
  return new MDCRipple(el)
});

iconButtonRipple.forEach(iconButtonRipple => {
  iconButtonRipple.unbounded = true;
});




const radio = [].map.call(document.querySelectorAll('.mdc-radio'), function (el) {
  return new MDCRadio(el);
});


const notchedOutlines = [].map.call(document.querySelectorAll('.mdc-notched-outline'), function (el) {
  return new MDCNotchedOutline(el);
});


const selectFields = [].map.call(document.querySelectorAll('.mdc-select'), function (el) {
  return new MDCSelect(el);
});


const lists = [].map.call(document.querySelectorAll('.mdc-list'), function (el) {
  return new MDCList(el);
});


const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    return new MDCTextField(el);
  });



const buttonRipples = [].map.call(
  document.querySelectorAll(".mdc-ripple-surface"),
  function(el) {
    return new MDCRipple(el);
  }
);

const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);

const toggleMenu = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebar--expanded")) {
    
    sidebar.classList.remove("sidebar--expanded");
    sidebar.classList.add("sidebar--shrinked");
    
  } else if (sidebar.classList.contains("sidebar--shrinked")) {
    sidebar.classList.remove("sidebar--shrinked");
    sidebar.classList.add("sidebar--expanded");
  }
});

const sidebarDropdown = document.querySelectorAll(
  ".sidebar__nav__link--drop-down"
);

// sidebarDropdown.addEventListener("click", () => {
//   if (!sidebarDropdown.nextElementSibling.classList.contains("active")) {
//     sidebarDropdown.nextElementSibling.classList.add("active");
//   } else if (sidebarDropdown.nextElementSibling.classList.contains("active")) {
//     sidebarDropdown.nextElementSibling.classList.remove("active");
//   }
// });

function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = "";

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = sectionHeight + "px";
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 0 + "px";
    });
  });

  // mark the section as "currently collapsed"
  element.setAttribute("data-collapsed", "true");
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + "px";

  // when the next css transition finishes (which should be the one we just triggered)
//   element.addEventListener("transitionend", function(e) {
//     // remove this event listener so it only gets triggered once
//     element.removeEventListener("transitionend", arguments.callee);

//     // remove "height" from the element's inline styles, so it can return to its initial value
//     element.style.height = null;
//   });

  // mark the section as "currently not collapsed"
  element.setAttribute("data-collapsed", "false");
}



sidebarDropdown.forEach((dropDown) => {

  let section1 = dropDown.nextElementSibling;
  let isCollapsed = section1.getAttribute("data-collapsed") === "false";
    
  if (isCollapsed) {
    expandSection(section1);
    section1.setAttribute("data-collapsed", "false");
  }

});

sidebarDropdown.forEach((dropDown) => {
    dropDown.addEventListener("click", () => {

            let section = dropDown.nextElementSibling;
            let isCollapsed = section.getAttribute("data-collapsed") === "true";
            if (isCollapsed) {
                expandSection(section);
                section.setAttribute("data-collapsed", "false");
            } else {
              collapseSection(section);
              section.setAttribute("data-collapsed", "true");
            }
        
    });
});



