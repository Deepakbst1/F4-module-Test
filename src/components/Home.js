import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../redux/actions/fetchActionCreators"
import { useEffect } from "react"
const Home = () => {
    const data = useSelector(state => state.data);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch);
    }, [])

    if(error){
        return <h1>{error}</h1>
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (<div>
        <h1>Home Page</h1>
        <ul id="grid-container">
            {
                data.map((item, index) => {
                    return (
                        <Link to={"/item/:" + item.id} style={{ color: "white", textDecoration: "none" }}>
                            <li key={index}>
                                <img src={`https://picsum.photos/200?random=${item.id}`} alt="i" />

                                <p>User ID: {item.id}</p>
                                <p>Title: {item.title.slice(0, 20) + "..."}</p>
                                {item.title.length > 20 ? <a id="readMore">Read More...</a> : ""}

                                <p>Body: {item.body.slice(0, 55) + "..."}</p>
                                {item.body.length > 50 ? <a id="readMore">Read More...</a> : ""}

                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    </div>)
}

export default Home