import axios from 'axios';
import { PostServiceAble, SinglePost, MultiplePosts } from '../../../../components/Blog/interfaces/iArticle';


class wordPressDataService implements PostServiceAble{
    wordpressURL = 'http://localhost:8000';

    fetchSinglePost(id: number): SinglePost {
        const res = this.fetchSingle(id);

        return this.convertToSinglePost(res);
    }

    async fetchSingle(id: number): Promise<object>{
        return await axios.get(`${this.wordpressURL}/wp-json/wp/v2/posts/${id}`);
    }
    async fetchMultiple(): Promise<object>{
        return await axios.get(`${this.wordpressURL}/wp-json/wp/v2/posts/`);
    }

     fetchMultiplePosts(searchTerm?: String, offset?: number): MultiplePosts{
        const res = this.fetchMultiple();
        
        console.log(res);

        const convertedMultiplePosts = {
            posts: new Array<SinglePost>(),
        };

        
        [res].map((post: any) => {
            return convertedMultiplePosts.posts.push(this.convertToSinglePost(post));
        });
        
        return convertedMultiplePosts;
    }

    private convertToSinglePost(data: any): SinglePost{
        const singlePost: SinglePost = {
            title: data.title.rendered,
            id: data.id,
            image: "",
            content: "",
        };
        return singlePost; 
    }
}

export default wordPressDataService;