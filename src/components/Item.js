import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux";

const Item = () => {
    let {id} = useParams();
    id = +id.slice(1); 
    const data = useSelector(state => state.data);
    const product = data.filter((product) => product.id === +id)[0];
    console.log(product);
    return <div id="itemDetails">
        <Link to="/">Home</Link>
        <h1>Details page for post with ID {product.id}</h1>
        <img id = "details" src={`https://picsum.photos/200?random=${product.id}`} alt="i"/>
        <h2>User ID: {product.id}</h2>
    <h2>Title: {product.title}</h2>
    <h2>Body: {product.body}</h2>

    </div>
}

export default Item