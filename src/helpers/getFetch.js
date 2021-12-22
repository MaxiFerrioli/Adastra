const productos = [
  {
    id: 1,
    foto: "https://placedog.net/500/270",
    name: "sdfg",
    price: 122,
    categoria: "remeras",
  },
  {
    id: 2,
    foto: "https://placedog.net/510/230",
    name: "sdf",
    price: 122,
    categoria: "hoodies",
  },
  {
    id: 3,
    foto: "https://placedog.net/970/210",
    name: "sdf",
    price: 122,
    categoria: "hoodies",
  },
  {
    id: 4,
    foto: "https://placedog.net/541/200",
    name: "sdf",
    price: 122,
    categoria: "accesorios",
  },
  {
    id: 5,
    foto: "https://placedog.net/470/230",
    name: "dsfsd",
    price: 122,
    categoria: "medias",
  },
  {
    id: 6,
    foto: "https://placedog.net/509/230",
    name: "sdfsdf",
    price: 122,
    categoria: "medias",
  },
  {
    id: 7,
    foto: "https://placedog.net/570/230",
    name: "sdfs",
    price: 122,
    categoria: "hoodies",
  },
  {
    id: 8,
    foto: "https://placedog.net/560/230",
    name: "asda",
    price: 122,
    categoria: "medias",
  },
  {
    id: 9,
    foto: "https://placedog.net/545/230",
    name: "asfas",
    price: 122,
    categoria: "remeras",
  },
  {
    id: 10,
    foto: "https://placedog.net/520/230",
    name: "asdda",
    price: 122,
    categoria: "accesorios",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
