const productos = [
  {
    id: 1,
    foto: "https://placedog.net/500/270",
    name: "medias",
    price: 122,
    categoria: "3/4",
  },
  {
    id: 2,
    foto: "https://placedog.net/500/230",
    name: "remeras",
    price: 122,
    categoria: "Oversized",
  },
  {
    id: 3,
    foto: "https://placedog.net/500/210",
    name: "bananos",
    price: 122,
    categoria: "Pastel",
  },
  {
    id: 4,
    foto: "https://placedog.net/500/200",
    name: "pantalones",
    price: 122,
    categoria: "Joggins",
  },
  {
    id: 5,
    foto: "https://placedog.net/500/230",
    name: "hoodies",
    price: 122,
    categoria: "Oversized",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
