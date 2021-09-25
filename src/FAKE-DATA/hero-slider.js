const img1 = require("../assets/images/slider/slide_1.png").default;
const img2 = require("../assets/images/slider/slide_2.png").default;
const img3 = require("../assets/images/slider/slide_3.png").default;

const heroSliderData = [
  {
    title: "Product 1 Title",
    description:
      "Product 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi nam earum pariatur ab exercitationem accusantium quam temporibus suscipit! Maiores nam, facilis ducimus voluptatem doloremque dolor dolores ratione eveniet? Corrupti.",
    img: img1,
    color: "blue",
    path: "/catalog/banner-product-01",
  },
  {
    title: "Product 2 Title",
    description:
      "Product 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi nam earum pariatur ab exercitationem accusantium quam temporibus suscipit! Maiores nam, facilis ducimus voluptatem doloremque dolor dolores ratione eveniet? Corrupti.",
    img: img2,
    path: "/catalog/banner-product-02",
    color: "pink",
  },
  {
    title: "Product 3 Title",
    description:
      "Product 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi nam earum pariatur ab exercitationem accusantium quam temporibus suscipit! Maiores nam, facilis ducimus voluptatem doloremque dolor dolores ratione eveniet? Corrupti.",
    img: img3,
    path: "/catalog/banner-product-03",
    color: "orange",
  },
];

export default heroSliderData;
