import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoreCart } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from local storage 
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        // const storedCart = getStoreCart();
        // console.log(storedCart);
        if (bottles.length) {
            const storedCart = getStoreCart();
            console.log(storedCart, bottles);

            const savedCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }
            console.log('saved cart', savedCart);
            setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCard = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCard={handleAddToCard}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;