
function Item({itemData}) {

    const {price, name, description} = itemData

    return (
        <>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        </>
    )
};

export default Item;