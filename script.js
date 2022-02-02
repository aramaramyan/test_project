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

// GALLERY SECTION START

function createGallery() {
  const h3 = newElement("h3", {}, ["GALLERY"]),
    articleWrapper = newElement("div", {class: "article_wrapper"}, [
      newElement("article", {class: "article"}, [
        newElement("div", {class: "article_img_wrapper"}, [
          newElement("img", {src: "./img/p4.jpeg", alt: "Hookah Image"}, [])
        ]),
        newElement("div", {class: "article_paragraph_wrapper"}, [
          newElement("p", {}, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores debitis, eos laboriosam minus nam obcaecati quaerat quam soluta ullam. Amet error recusandae saepe sed voluptatem? Enim quas rerum sapiente sed similique, tenetur. Dolore, labore maiores molestias officia pariatur saepe!"])
        ])
      ]),
      newElement("article", {class: "article"}, [
        newElement("div", {class: "article_img_wrapper"}, [
          newElement("img", {src: "./img/p5.jpeg", alt: "Hookah Image"}, [])
        ]),
        newElement("div", {class: "article_paragraph_wrapper"}, [
          newElement("p", {}, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque cum cumque, cupiditate doloribus excepturi expedita fuga harum illo laboriosam magni minima mollitia natus nisi non optio provident quae reprehenderit suscipit tempora vel veniam vitae."])
        ])
      ]),
      newElement("article", {class: "article"}, [
        newElement("div", {class: "article_img_wrapper"}, [
          newElement("img", {src: "./img/p6.jpeg", alt: "Hookah Image"}, [])
        ]),
        newElement("div", {class: "article_paragraph_wrapper"}, [
          newElement("p", {}, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto, distinctio, error exercitationem expedita harum impedit modi nobis possimus quaerat rem vel voluptatum. Architecto dolore est, iste laborum optio tempora."])
        ])
      ]),
      newElement("article", {class: "article"}, [
        newElement("div", {class: "article_img_wrapper"}, [
          newElement("img", {src: "./img/p7.jpeg", alt: "Hookah Image"}, [])
        ]),
        newElement("div", {class: "article_paragraph_wrapper"}, [
          newElement("p", {}, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consequuntur cupiditate delectus eligendi et eveniet id itaque iure iusto laboriosam magnam, molestiae nemo nesciunt non omnis optio quaerat quas quia quidem quos ratione sit tempora ut voluptas? Deserunt, numquam!"])
        ])
      ]),
      newElement("article", {class: "article"}, [
        newElement("div", {class: "article_img_wrapper"}, [
          newElement("img", {src: "./img/p8.jpeg", alt: "Hookah Image"}, [])
        ]),
        newElement("div", {class: "article_paragraph_wrapper"}, [
          newElement("p", {}, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis dicta, dolor dolorum, ea harum illo ipsum magnam maxime pariatur quam quis quod rem similique temporibus vel vero? Beatae corporis distinctio nemo officiis, omnis quasi quisquam voluptate? Neque, optio perspiciatis."])
        ])
      ]),
      newElement("article", {class: "article"}, [
        newElement("div", {class: "article_img_wrapper"}, [
          newElement("img", {src: "./img/p9.jpeg", alt: "Hookah Image"}, [])
        ]),
        newElement("div", {class: "article_paragraph_wrapper"}, [
          newElement("p", {}, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad assumenda beatae blanditiis consequuntur cum distinctio est ex, in incidunt ipsum, modi molestias neque omnis perferendis sint sit unde voluptatibus!"])
        ])
      ]),
    ]);

  return newElement("aside", {id: "gallery" class: "main_right_side"}, [h3, articleWrapper]);
}

// GALLERY SECTION END