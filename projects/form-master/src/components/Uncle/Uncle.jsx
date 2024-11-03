import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Mahfuz'}></Cousin>
                <Cousin name={'Hasan'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;