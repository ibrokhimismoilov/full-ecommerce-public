const product_01_img1 =
  require("../assets/images/products/product-1_1.jpg").default;
const product_01_img2 =
  require("../assets/images/products/product-1_2.jpg").default;

const product_02_img1 =
  require("../assets/images/products/product-2_1.jpg").default;
const product_02_img2 =
  require("../assets/images/products/product-2_2.jpg").default;

const product_03_img1 =
  require("../assets/images/products/product-3_1.jpg").default;
const product_03_img2 =
  require("../assets/images/products/product-3_2.jpg").default;

const product_04_img1 =
  require("../assets/images/products/product-4_1.jpg").default;
const product_04_img2 =
  require("../assets/images/products/product-4_2.jpg").default;

const product_05_img1 =
  require("../assets/images/products/product-5_1.jpg").default;
const product_05_img2 =
  require("../assets/images/products/product-5_2.jpg").default;

const product_06_img1 =
  require("../assets/images/products/product-6_1.jpg").default;
const product_06_img2 =
  require("../assets/images/products/product-6_2.jpg").default;

const product_07_img1 =
  require("../assets/images/products/product-7_1.jpg").default;
const product_07_img2 =
  require("../assets/images/products/product-7_2.jpg").default;

const product_08_img1 =
  require("../assets/images/products/product-8_1.jpg").default;
const product_08_img2 =
  require("../assets/images/products/product-8_2.jpg").default;

const product_09_img1 =
  require("../assets/images/products/product-9_1.jpg").default;
const product_09_img2 =
  require("../assets/images/products/product-9_2.jpg").default;

const product_10_img1 =
  require("../assets/images/products/product-10_1.jpg").default;
const product_10_img2 =
  require("../assets/images/products/product-10_2.jpg").default;

const products = [
  {
    title: "Product title 01",
    price: "189000",
    img1: product_01_img1,
    img2: product_01_img2,
    categorySlug: "category-1",
    colors: ["white", "red", "orange"],
    _id: "product-id-01",
    size: ["s", "m", "l", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 02",
    price: "159000",
    img1: product_02_img1,
    img2: product_02_img2,
    categorySlug: "category-1",
    colors: ["white", "red", "blue"],
    _id: "product-id-02",
    size: ["s", "m"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 03",
    price: "190000",
    img1: product_03_img1,
    img2: product_03_img2,
    categorySlug: "category-1",
    colors: ["white", "red", "orange", "yellow"],
    _id: "product-id-03",
    size: ["m"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 04",
    price: "194000",
    img1: product_04_img1,
    img2: product_04_img2,
    categorySlug: "category-1",
    colors: ["white", "orange", "blue"],
    _id: "product-id-04",
    size: ["xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 05",
    price: "194000",
    img1: product_05_img1,
    img2: product_05_img2,
    categorySlug: "category-1",
    colors: ["white", "pink"],
    _id: "product-id-05",
    size: ["xxl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 06",
    price: "194000",
    img1: product_06_img1,
    img2: product_06_img2,
    categorySlug: "category-1",
    colors: ["black"],
    _id: "product-id-06",
    size: ["s", "m", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 07",
    price: "194000",
    img1: product_07_img1,
    img2: product_07_img2,
    categorySlug: "category-2",
    colors: ["white", "red", "orange", "blue"],
    _id: "product-id-07",
    size: ["l", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 08",
    price: "194000",
    img1: product_08_img1,
    img2: product_08_img2,
    categorySlug: "category-2",
    colors: ["white", "red", "black"],
    _id: "product-id-08",
    size: ["s", "m", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 09",
    price: "194000",
    img1: product_09_img1,
    img2: product_09_img2,
    categorySlug: "category-2",
    colors: ["white", "blue"],
    _id: "product-id-09",
    size: ["m"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 10",
    price: "194000",
    img1: product_10_img1,
    img2: product_10_img2,
    categorySlug: "category-3",
    colors: ["blue", "black"],
    _id: "product-id-10",
    size: ["l"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 11",
    price: "189000",
    img1: product_01_img1,
    img2: product_01_img2,
    categorySlug: "category-1",
    colors: ["white", "red", "orange"],
    _id: "product-id-11",
    size: ["s", "m", "l", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 12",
    price: "159000",
    img1: product_02_img1,
    img2: product_02_img2,
    categorySlug: "category-1",
    colors: ["white", "red", "blue"],
    _id: "product-id-12",
    size: ["s", "m"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 13",
    price: "190000",
    img1: product_03_img1,
    img2: product_03_img2,
    categorySlug: "category-1",
    colors: ["white", "red", "orange", "yellow"],
    _id: "product-id-13",
    size: ["m"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 14",
    price: "194000",
    img1: product_04_img1,
    img2: product_04_img2,
    categorySlug: "category-1",
    colors: ["white", "orange", "blue"],
    _id: "product-id-14",
    size: ["xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 15",
    price: "194000",
    img1: product_05_img1,
    img2: product_05_img2,
    categorySlug: "category-1",
    colors: ["white", "pink"],
    _id: "product-id-15",
    size: ["xxl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 16",
    price: "194000",
    img1: product_06_img1,
    img2: product_06_img2,
    categorySlug: "category-1",
    colors: ["black"],
    _id: "product-id-16",
    size: ["s", "m", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 17",
    price: "194000",
    img1: product_07_img1,
    img2: product_07_img2,
    categorySlug: "category-2",
    colors: ["white", "red", "orange", "blue"],
    _id: "product-id-17",
    size: ["l", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 18",
    price: "194000",
    img1: product_08_img1,
    img2: product_08_img2,
    categorySlug: "category-2",
    colors: ["white", "red", "black"],
    _id: "product-id-18",
    size: ["s", "m", "xl"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 19",
    price: "194000",
    img1: product_09_img1,
    img2: product_09_img2,
    categorySlug: "category-2",
    colors: ["white", "blue"],
    _id: "product-id-19",
    size: ["m"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
  {
    title: "Product title 20",
    price: "194000",
    img1: product_10_img1,
    img2: product_10_img2,
    categorySlug: "category-3",
    colors: ["blue", "black"],
    _id: "product-id-20",
    size: ["l"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat repudiandae nulla quasi quibusdam dolore doloribus autem nemo ullam fugit!<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, natus blanditiis tempora nobis labore earum! Molestias hic animi eos saepe nam, non dolor dolorum, nobis unde sequi ducimus, error dolores.<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam commodi omnis aliquid tenetur nobis animi aspernatur, accusamus at iusto! Nobis at quia nesciunt molestias cumque quaerat accusantium nisi facere. Aperiam a quas recusandae aliquam, maiores beatae? Iste enim molestias, dolorem corporis nesciunt a dicta animi modi blanditiis cumque placeat!<br/><br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro fugit doloremque aut cumque odit natus dolores. Accusamus, rem beatae? Temporibus.",
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductById = (_id) => products.find((e) => e._id === _id);

const productData = {
  getAllProducts,
  getProducts,
  getProductById,
};

export default productData;
