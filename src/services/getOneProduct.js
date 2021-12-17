const oneProduct = {
  id: 1,
  image:
    "http://placekitten.com/g/200/300",
  title: "gatito",
  descripcion: "lindo",
  categoria: "mascota",
  price: "gratis",
  stock: "1",
};

const getOneProduct = new Promise((resolve) => {
  setTimeout(() => {
    resolve(oneProduct);
  }, 2000);
});

export default getOneProduct;
