import React, { useState } from "react";
//import $ from "jquery";
//map, props e objetos

const items =  [{id:1, name:"produto-1", desc: "Item 1", url: "https://picsum.photos/500/250"}, {id:1, name:"produto-2", desc: "Item 2", url: "https://picsum.photos/500/250"}, {id:1, name:"produto-3", desc: "Item 3", url: "https://picsum.photos/500/250"}];
const cart = [];

const Store = () => {
    const [cart, setCart] = useState(0);
    const handleClick = () => {
        setCart(cart => cart + 1);
    };
    const Card = ({ name, url, desc }) => {
        return <div id={name} class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src={url} alt="Card image" />
        <div class="card-body">
          <h5 class="card-title">{desc}</h5>
          <button onClick={handleClick} class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    };
    return <div>
        {items.map(item => {
            return <Card key={item.id} name={item.name} url={item.url} desc={item.desc} />
        })}
        <p>Cart: {cart} items</p>
    </div>
};

export default Store;