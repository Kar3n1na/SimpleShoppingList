import React, { useState } from "react";

import { Input, InputAdornment, IconButton } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";

export const InputList = ({ allproducts, setAllproducts }) => {
  const [element, setElement] = useState({
    value: "",
    checked: false,
  });

  return (
    <Input
      fullWidth
      value={element.value}
      onChange={(e) => {
        setElement({ ...element, value: e.target.value });
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={() => {
              setAllproducts([...allproducts, element]);
              setElement({ ...element, value: "" });
            }}
            edge="end"
          >
            <AddCircleRounded />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
