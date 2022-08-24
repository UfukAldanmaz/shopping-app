import ShoppingItem from "./ShoppingItem";
import "./style.css"

const ShoppingList = ({ data }) => {

    return <div className="shopping-list">{data.map(item =>
        <ShoppingItem key={item.id} item={item} />
    )}
    </div>
}

export default ShoppingList;