import {PostServiceAble, SinglePost, MultiplePosts} from '../interfaces/postServiceInterface'

class PostService implements PostServiceAble{
    service: PostServiceAble;

    constructor(PostService: PostServiceAble){
        this.service = PostService;
    }

    public fetchSinglePost(id: number): Promise<SinglePost> {
        return this.service.fetchSinglePost(id);
    }

    public fetchMultiplePosts(searchTerm?: String, offset?: number): Promise<MultiplePosts> {
        return this.service.fetchMultiplePosts();
    }
}

export default PostService;