
import { PostServiceAble, SinglePost, MultiplePosts } from '../../interfaces/iArticle';
import PostMock from './PostMock.json'


class MockPostService implements PostServiceAble{

    
    fetchSinglePost(id: number): SinglePost {
        return this.toSinglePost(PostMock);
    }

    fetchMultiplePosts(searchTerm?: String | undefined, offset?: number | undefined): MultiplePosts {
        return this.ToMultiokePosts(this.toSinglePost(PostMock));
    }

    toSinglePost(data: any): SinglePost{
        const postFromJson: SinglePost = {
            title: data.title,
            image: data.image,
            id: data.id,
            content: data.content.rendered,
        }
        return postFromJson;
    }
    ToMultiokePosts(data: any): MultiplePosts{
        const PostsFromSinglePost: MultiplePosts = {
            posts: new Array<SinglePost>()
        }

        //PostsFromSinglePost.posts.push(this.toSinglePost(data))

        return PostsFromSinglePost;
    }
    
}

export default MockPostService