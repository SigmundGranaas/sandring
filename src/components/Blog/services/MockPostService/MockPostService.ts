
import { PostServiceAble, SinglePost, MultiplePosts } from '../../interfaces/iArticle';
import PostMock from './PostMock.json'


class MockPostService implements PostServiceAble{

    
    async fetchSinglePost(id: number): Promise<SinglePost> {
        try{
        return this.findSinglePost(PostMock, id);
        }catch(error){
            throw error;
        }
    }

    async fetchMultiplePosts(searchTerm?: String): Promise<MultiplePosts> {
        return this.ToMultiplePosts(PostMock);
    }

    toSinglePost(data: any): SinglePost{
        const postFromJson: SinglePost = {
            title: data.title.rendered,
            image: data.image,
            id: data.id,
            content: data.content.rendered,
        }
        return postFromJson;
    }
    
    findSinglePost(data: any, id: number): SinglePost{
        let returnArticle: any = null;

        data.forEach((article:any) => {
            if(article.id.toString() === id.toString()){
                returnArticle = this.toSinglePost(article);
            }
        });
       
        if(returnArticle != null){
            return returnArticle;
        }else{
            throw new Error('Could not find article');
        }
    }


    ToMultiplePosts(data: any): MultiplePosts{
       
        const PostsFromSinglePost: MultiplePosts = {
            posts: new Array<SinglePost>(),
        }
        data.forEach((article:any) => {
            PostsFromSinglePost.posts.push(this.toSinglePost(article))
        });
        
        return PostsFromSinglePost;
    }
    
}

export default MockPostService