const productos = [
  {
    id: 1,
    title: "sdfg",
    categoria: "remeras",
    foto: "https://placedog.net/500/270",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 2,
    title: "sdf",
    categoria: "hoodies",
    foto: "https://placedog.net/510/230",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 3,
    title: "sdf",
    categoria: "hoodies",
    foto: "https://placedog.net/970/210",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 4,
    title: "sdf",
    categoria: "accesorios",
    foto: "https://placedog.net/541/200",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 5,
    title: "dsfsd",
    categoria: "medias",
    foto: "https://placedog.net/470/230",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 6,
    title: "sdfsdf",
    categoria: "medias",
    foto: "https://placedog.net/509/230",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 7,
    title: "sdfs",
    categoria: "hoodies",
    foto: "https://placedog.net/570/230",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 8,
    title: "asda",
    categoria: "medias",
    foto: "https://placedog.net/560/230",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 9,
    title: "asfas",
    categoria: "remeras",
    foto: "https://placedog.net/545/230",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
  {
    id: 10,
    title: "asdda",
    categoria: "accesorios",
    foto: "https://placedog.net/520/230",
    price: 122,
    description: "iosdiojasddsfdsfdsafsdfsdfsdfsdfsdfddsf",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
