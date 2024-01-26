import Header from "./component/Header.jsx";
import Meals from "./component/Meals.jsx";
import Cart from "./component/Cart.jsx";
import { CartContextProvider } from "./component/store/CartContext.jsx";
import { UserProgressContextProvider } from "./component/store/UserProgressContext.jsx";
import Checkout from "./component/Checkout.jsx";
function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
