const data = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL.__AC_SY300_SX300_QL70_ML2_.jpg",
    title: "Ryzen 5900x",
    descripcion: "este es el primer producto",
    categoria: "Procesadores",
    price: "73000",
    stock: "4",
  },
  {
    id: 2,
    image: "https://i.blogs.es/588c7d/amd6/original.jpeg",
    title: "Ryzen 5800x",
    descripcion: "este es el primer producto",
    categoria: "Procesadores",
    price: "58000",
    stock: "10",
  },
  {
    id: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_884972-MLA40182457265_122019-O.jpg",
    title: "Ryzen 2200G",
    descripcion: "este es el primer producto",
    categoria: "Procesadores",
    price: "22000",
    stock: "5",
  },
  {
    id: 4,
    image:
      "https://app.contabilium.com/files/explorer/20302/Productos-Servicios/concepto-4886285.jpg",
    title: "Radeon 6800XT",
    descripcion: "este es el primer producto",
    categoria: "Placas-de-video",
    price: "280000",
    stock: "3",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg",
    title: "Radeon 6900XT",
    descripcion: "este es el primer producto",
    categoria: "Placas-de-video",
    price: "305000",
    stock: "15",
  },
  {
    id: 6,
    image:
      "https://s3-sa-east-1.amazonaws.com/saasargentina/0q6tMtEfaFFScGS5Wuhn/imagen",
    title: "RTX 3080",
    descripcion: "este es el primer producto",
    categoria: "Placas-de-video",
    price: "320000",
    stock: "1",
  },
  {
    id: 7,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_963530-MLA46418767025_062021-O.jpg",
    title: "RTX 3070",
    descripcion: "este es el primer producto",
    categoria: "Placas-de-video",
    price: "200000",
    stock: "3",
  },
  {
    id: 8,
    image:
      "https://s3-sa-east-1.amazonaws.com/peluffo/39b42091-a487-4a90-9628-15868cb7a18d.jpg",
    title: "Teclado Generico",
    descripcion: "este es el primer producto",
    categoria: "perifericos",
    price: "2000",
    stock: "4",
  },
  {
    id: 9,
    image:
      "https://picodotdev.github.io/blog-bitix/2020/12/guia-basica-sobre-teclados-mecanicos-para-ordenador/images/ducky-one-2-tkl_hu354ab0c3d09f385c997f31ff19e237d6_461539_1040x0_resize_box_2.png",
    title: "Teclado Mecanico",
    descripcion: "este es el primer producto",
    categoria: "perifericos",
    price: "6800",
    stock: "4",
  },
  {
    id: 10,
    image:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g203-0.jpg",
    title: "Raton logitech",
    descripcion: "este es el primer producto",
    categoria: "perifericos",
    price: "3800",
    stock: "4",
  },
];

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

export default getProducts;
