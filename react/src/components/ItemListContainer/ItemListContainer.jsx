import './ItemListContainer.css';

const ItemListContainer = ({saludo}) => {

    return (
        <div className="catalogo-contenedor">
            <h2>Item List Container</h2>
            <hr />

            <p>hello world</p>
            <p>{saludo}</p>
        </div>
    )
}
export default ItemListContainer