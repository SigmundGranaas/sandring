import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BlogEntry({match}) {
    const [data, setData] = useState({});

    useEffect(() =>{
    
        fetchData();
    },[]);

    const fetchData = async () => { 
        const result = await axios(`http://localhost:8000/wp-json/wp/v2/posts/${match.params.id}`);
        console.log(result);
        setData(result.data);
        console.log(data);
    }
  
    return(
        <div>
           {data.title !== undefined ? 
           <div>
            <h1>{data.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: data.content.rendered}}/>
           </div>
            : <p>loading</p>   
        }
        </div>
    );
}

export default BlogEntry;