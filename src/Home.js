import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My Website', body: 'Lorem', author: 'swarnab', id: 1 },
        { title: 'Welcome Pawri', body: 'Lorem', author: 'erudite', id: 2 },
        { title: 'Web Dev Tips', body: 'Lorem', author: 'entrebay', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blogPreview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p> <strong>Written By:</strong> {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;