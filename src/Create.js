import { useState } from "react";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select>
                    <option value="swarnab">Swarnab</option>
                    <option value="erudite">Erudite</option>
                    <option value="ira">Ira</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;