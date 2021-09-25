import React, { useMemo, useState } from "react";
import Layout from "../components/Layout";
import { ProductModalContext } from "../context/productModalContext";

const App = () => {
  const [contextProductValue, setContextProductValue] = useState(null);

  const productProviderValue = useMemo(
    () => ({ contextProductValue, setContextProductValue }),
    [contextProductValue, setContextProductValue]
  );

  return (
    <ProductModalContext.Provider value={productProviderValue}>
      <Layout />
    </ProductModalContext.Provider>
  );
};

export default App;
