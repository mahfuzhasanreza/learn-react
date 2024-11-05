import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [moeny, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Reza'}></Cousin>
                <Cousin name={'Maha'}></Cousin>
            </section>
            <p>Money: {moeny}</p>
            <button onClick={() => setMoney(moeny + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;