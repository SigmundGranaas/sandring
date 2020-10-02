import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Blog() {
    const [data, setData] = useState([]);

    useEffect(() =>{
    
        fetchData();
    },[]);

    const fetchData = async () => { 
        const result = await axios('http://localhost:8000/wp-json/wp/v2/posts');
        console.log(result);
        setData(result.data);
        console.log(data);
    }
  
    return(
        <div>
            {data != [] ? data.map(data => (
                <h1 key={data.id}><Link to={`/blog/${data.id}`}>{data.title.rendered}</Link></h1>
            )): <p>loading...</p>}
        </div>
    );
}

export default Blog;