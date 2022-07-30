import React from "react";
import CartIcon from '../cart/CartIcon';

const Navbar = (props) => {  
  return (
    <div className="navbar bg-base-100 border-b border-gray-700">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
            Furniture
          <span className="text-primary pl-1">
            Cart
          </span>
        </a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle" onClick={props.onShowCart}>
          <div className="indicator">
            <CartIcon />
            <span className="badge badge-sm bg-secondary indicator-item">8</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
