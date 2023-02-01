import {useEffect,useState } from "react";
import axios from "axios"


const Posts = () => {
    const [posts, setPosts] = useState([])
    const [id,setId]=useState()
 
    const getPosts=async()=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // const insetData=await axios.post('http://localhost:4000/posts', data);
        setPosts(data)
    }

    const getUserPosts = async(id) => {
        const {data} = await axios.get(`http://localhost:4000/posts/${id}`);
        setPosts(data);
      };    
      
    useEffect(()=>{
        getUserPosts();
    },[id]);

   return ( 
            <div>    
                <div>
                    <button 
                        onClick={()=>getPosts()} >insert data into database
                    </button>
                    <input 
                        style={{width:'300px'}}
                        placeholder="what is your user id?" 
                        onChange={(e)=>setId(e.target.value)} 
                        type="number" 
                        min="0"
                        max="10"
                        name="id" 
                        id="id"/>
                    <button 
                        htmlFor="id" 
                        onClick={()=>getUserPosts(id)}>show my posts
                    </button>
                </div> 

                    <table>
                        <thead>
                            <tr>
                                <th>user id</th>
                                <th>post id</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>  
                            {posts.map(val => 
                            <tr key={val.id}>
                                <td>{val.userId}</td>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{val.body}</td>
                            </tr>
                            )}                       
                        </tbody>
                    </table>                
           </div>
    );
}

export default Posts;