const BlogList = (props) => {


    const blogs = props.blogs;
    const title = props.title;
    return (
        <div className="blogList">
        <h2 className="title">{title}</h2>
            {blogs.map((blog) => (
                <div className="blogPreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> <strong>Written By:</strong> {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;