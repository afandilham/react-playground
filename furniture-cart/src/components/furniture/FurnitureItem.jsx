import React, { useContext } from "react";
import Card from "../ui/Card";
import FurnitureForm from "./FurnitureForm";
import classes from "./FurnitureItem.module.css";
import { formatCurrency } from "../../utils/formatCurrency";
import CartContext from '../../context/cart-context';

const FurnitureItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCart = amount => {
    cartCtx.addToCart({
      id: props.id,
      title: props.title,
      price: props.price,
      tags: props.tags,
      amount: amount,
    });
  };

  return (
    <li>
      <Card>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <p>Rp. {formatCurrency(props.price)}</p>
          <div className={classes.tag}>
            {props.tags.map((tag) => (
              <div key={tag} className="badge badge-success font-medium text-xs p-2.5 mr-1.5">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <FurnitureForm id={props.id} addCart={addToCart} />
      </Card>
    </li>
  );
};

export default FurnitureItem;
