import {MultiplePosts, PostServiceAble, SinglePost} from '../../interfaces/postServiceInterface';
import axios from 'axios';


class wordPressDataService implements PostServiceAble{
    wordpressURL = 'http://localhost:8000';

    async fetchSinglePost(id: number): Promise<SinglePost> {
        const res = await axios.get(`${this.wordpressURL}/wp-json/wp/v2/posts/${id}`);

        return this.convertToSinglePost(res.data);
    }


    async fetchMultiplePosts(searchTerm?: String, offset?: number): Promise<MultiplePosts>{
        const res = await axios.get(`${this.wordpressURL}/wp-json/wp/v2/posts/`);
        
        console.log(res.data);

        const convertedMultiplePosts = {
            posts: new Array<SinglePost>(),
        };

        
        res.data.map((post: any) => {
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