import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layouts/Header";
import Meals from './components/Meals/Meals'

function App() {
const [cartIsShown, setCartIsShown] = useState(false);

const ShowCartHandler = () => {
  setCartIsShown(true);

};

const hideCartHandler = () => {
  setCartIsShown(false);

};

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
