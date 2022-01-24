import { createContext, useState, useContext } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    const index = cartList.findIndex((i) => i.id === item.id);

    if (index > -1) {
      const oldQy = cartList[index].quantity;
      cartList.splice(index, 1);
      setCartList([...cartList, { ...item, quantity: item.quantity + oldQy }]);
    } 
    else { setCartList([...cartList, item]); }
  }

  const totalPrice = () => {
    return cartList.reduce( (acum, prod) => acum + prod.quantity * prod.price, 0 );
  };

  function deleteCart() {
    setCartList([]);
  }

  const iconCart = () => {
    return cartList.reduce( (acum, valor)=> acum + valor.quantity, 0) 
}

const deleteProd = (id) => {
  // setCartList(cartList.filter((producto) => producto.id !== id));
  const itemFiltrado = cartList.findIndex((prod) => prod.id === id);
  cartList.splice(itemFiltrado, 1);
  setCartList([...cartList]); 
};

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteCart,
        totalPrice,
        iconCart,
        deleteProd
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
