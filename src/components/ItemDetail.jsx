const ItemDetail = ({ item }) => {
  console.log("El item", item);
  return (
    <div>
      <h3>ItemDetail</h3>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <img src={`${item.foto}`} alt={`${item.foto}`}></img>
    </div>
  );
};

export default ItemDetail;
