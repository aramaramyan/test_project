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

// PARTNERS SECTION START

function createPartners() {
  const h3 = newElement("h3", {}, ["OUR PARTNERS"]),
    mainUl = newElement("ul", {class:"main_ul"}, [
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "https://barvikhagroup.ru/", target: "_blank"}, ["BARVIKHA Lounge"])
      ]),
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "https://myataofficial.com/", target: "_blank"}, ["MYATA Lounge"])
      ]),
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "https://hookahplace.ru/", target: "_blank"}, ["HOOKAH Place"])
      ]),
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "https://www.instagram.com/hookah_place__yerevan/", target: "_blank"}, ["HOOKAH Place Yerevan"])
      ]),
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "http://ilpittore.ru/", target: "_blank"}, ["IL Pittore"])
      ]),
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "https://www.facebook.com/LaPiazzaYerevanOfficial/", target: "_blank"}, ["La Piazza"])
      ]),
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "https://absolem.pro/", target: "_blank"}, ["ABSOLEM.pro"])
      ]),
      newElement("li", {class: "main_li"}, [
        newElement("a", {href: "https://www.borodabrothers.ru/", target: "_blank"}, ["BORODA Brothers"])
      ]),
    ]);

  return newElement("aside", {id: "partners", class: "main_left_side"}, [h3, mainUl]);
}

// PARTNERS SECTION END

root.append(createHeader(),);