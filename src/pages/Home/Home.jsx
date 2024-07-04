import React, { useEffect } from "react";
import "./Home.scss";
import { Text, TextVariants } from "@patternfly/react-core";
import InfoSlider from "../../components/Infoslider/InfoSlider";
import Products from "../../components/Products/Products";
import CategorySlider from "../../components/categoryslider/CategorySlider";
import ActivePill from "../../components/activePill/ActivePill";
import InactivePill from "../../components/inactivePill/InactivePill";

import { getProducts } from "../../components/redux_api/actions/productActions";

import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {products && (
        <div className="home-main-container">
          <InfoSlider products={products?.results?.slice(0, 4)} />
          <CategorySlider products={products?.results?.slice(4, 8)} />
          <div>
            <Text component={TextVariants.h1}>Want delivery today?</Text>
            <div className="delivery-container">
              <ActivePill content="All" />
              {products?.results?.slice(0, 10).map((product) => {
                return <InactivePill content={product?.name} key={product?.id} />;
              })}
            </div>
          </div>
          <Products products={products?.results?.slice(8, 12)} />
          <Products products={products?.results?.slice(15, 19)} />
        </div>
      )}
    </div>
  );
}

export default Home;
