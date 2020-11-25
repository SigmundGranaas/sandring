import axios from 'axios';
import { PostServiceAble, SinglePost, MultiplePosts } from '../../../../components/Blog/interfaces/iArticle';






class wordPressDataService implements PostServiceAble{
    fetchSinglePost(id: number): Promise<SinglePost> {
        throw new Error('Method not implemented.');
    }
    wordpressURL = 'http://localhost:8000';
    async fetchSingle(id: number): Promise<SinglePost>{
        return await axios.get(`${this.wordpressURL}/wp-json/wp/v2/posts/${id}`);
    }

    async fetchMultiple(): Promise<MultiplePosts>{
        const res = await axios.get(`${this.wordpressURL}/wp-json/wp/v2/posts/`);
        return res.data();
    }

    async fetchMultiplePosts(searchTerm?: String, offset?: number): Promise<MultiplePosts>{
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