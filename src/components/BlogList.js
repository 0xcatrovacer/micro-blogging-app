import { Link } from "react-router-dom";

const BlogList = (props) => {

    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="blogList">
        <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blogPreview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p> <strong>Written By:</strong> {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;