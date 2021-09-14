import React from "react";

import {
  List,
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./Styles";
import DeleteModal from "./DeleteModal";

export const Lista = ({
  allproducts,
  deleteProduct,
  updateProduct,
  deleteAllProducts,
}) => {
  const classes = useStyles();


  return (
    <>
      <List>
        <br/>
        <Typography>No olvides comprar...</Typography>
        <br/>
        {allproducts.map((product, index) => {
          let classesOverlined = product.checked ? classes.primary : null;
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  disableRipple
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateProduct(index, true);
                    } else {
                      updateProduct(index, false);
                    }
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={product.value}
                classes={{ primary: classesOverlined }}
              />
              <IconButton
                edge="end"
                onClick={() => {
                  deleteProduct(index);
                }}
              >
                <DeleteIcon color="secondary" />
              </IconButton>
            </ListItem>
          );
        })}
        <DeleteModal
        deleteAllProducts = {deleteAllProducts}
        allproducts={allproducts}
        />

      </List>
    </>
  );
};
