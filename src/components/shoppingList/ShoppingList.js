import React, { useState, useEffect } from "react";

import { Lista } from "./Lista";
import { InputList } from "./InputList";

import { Container, Typography } from "@material-ui/core";


const ShoppingList = () => {

  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
  }, [allproducts]);

  const deleteProduct = (elementid) => {
    setAllproducts(allproducts.filter((product, index) => elementid !== index));
  };

  const updateProduct = (elementid, value) => {
    let temp = allproducts;
    temp[elementid] = { ...allproducts[elementid], checked: value };
    setAllproducts([...temp]);
  };

  const deleteAllProducts =() =>{
    setAllproducts([])

  }

  return (
    <Container style={{ backgroundColor: "#F4F6F6" }}>
      <br/>
      <Typography variant="h4">
        Lista de Compras
      </Typography>
      <br/>
      <InputList allproducts={allproducts} setAllproducts={setAllproducts} />
      <Lista
        allproducts={allproducts}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
        deleteAllProducts={deleteAllProducts}
      />
    </Container>
  );
};

export default ShoppingList;
