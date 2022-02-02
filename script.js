"use strict";

const root = document.querySelector("#root");

/* -function newElement-
first arg  - tag name
second arg - object with attributes
third arg  - array with childs */

function newElement(tagName, attributes, childs) {
  const element = document.createElement(tagName);

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  element.append(...childs);

  return element;
}

// HEADER SECTION START

function createHeader() {
  const logo = newElement("img", {src: "./img/logo.png", alt: "Logo"}, []),
    headingName = newElement("div", {class: "heading_name"}, [
      newElement("h1", {}, ["MAGNAT"]),
      newElement("h3", {}, ["HOOKAH"]),
    ]),
    logoWrapper = newElement("div", {class: "logo_wrapper"}, [logo, headingName]),
    home = newElement("a", {href: "#header"}, ["HOME"]),
    gallery = newElement("a", {href: "#gallery"}, ["GALLERY"]),
    partners = newElement("a", {href: "#partners"}, ["PARTNERS"]),
    order = newElement("a", {href: "#oredr"}, ["ORDER"]),
    navUl = newElement("ul", {class: "navbar_header_ul"}, [
      newElement("li", {class: "navbar_header_li"}, [home]),
      newElement("li", {class: "navbar_header_li"}, [gallery]),
      newElement("li", {class: "navbar_header_li"}, [partners]),
      newElement("li", {class: "navbar_header_li"}, [order]),
    ]),
    navbar = newElement("nav", {class: "navbar_header"}, [navUl]);

  return newElement("header", {id: "header"}, [logoWrapper, navbar]);
}

// HEADER SECTION END

root.append(createHeader());