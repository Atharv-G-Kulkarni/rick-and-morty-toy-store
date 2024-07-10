import React from "react";
import { TextContent } from "@patternfly/react-core";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddressPage from "./pages/AddressPage/AddressPage";
import PersonalizeYourCakePage from "./pages/PersonalizeYourCakePage/PersonalizeYourCakePage.jsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage/PaymentConfirmationPage.jsx";
import ProductDetail from "./components/details/ProductDetail";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/address",
    element: <AddressPage />,
  },
  {
    path: "/personalize-your-cake",
    element: <PersonalizeYourCakePage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/payment-confirm",
    element: <PaymentConfirmationPage />,
  },
];

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <TextContent>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route path={route.path} element={route.element} key={index} />
              );
            })}
          </Routes>
        </TextContent>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
