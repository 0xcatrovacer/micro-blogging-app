import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry</h2>
            <p>This page does not exist</p>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default NotFound;