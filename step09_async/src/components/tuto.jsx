/*
import { useState , useEffect } from "react";
import axios from "axios";

function User() {
    
    const[users , setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            setUsers(response.data);
        })
        .catch((error)=>{
            console.error("Error fetching data : " , error)
        })
    },[]);

    return (
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );


}
export default User;
*/



/*
import axios from "axios";
import { useState } from "react";

function User() {
    const [name , setName] = useState("");

    const handleSubmit = (event) => {
        console.log(name);
        axios.post('https://jsonplaceholder.typicode.com/users' , {name})
        .then((response)=>{
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
                  <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Create User</button>
        </form>
    );

}
export default User;
*/

/*
import { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
    
    const [posts, setPosts] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch(error) {
                console.error("Error fetching posts:", error);    
            } finally {
                setLoading(false);
            }

        }
        fetchPosts();
    } , []);

    if(loading) {
        return <p>Loading....</p>
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
       
     
    );

}
export default PostList;
*/