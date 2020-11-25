import { PostServiceAble, SinglePost, MultiplePosts } from "../../../components/Blog/interfaces/iArticle";


class PostService implements PostServiceAble{
    service: PostServiceAble;

    constructor(PostService: PostServiceAble){
        this.service = PostService;
    }

    public async fetchSinglePost(id: number): Promise<SinglePost> {
        return this.service.fetchSinglePost(id);
    }

    public async fetchMultiplePosts(searchTerm?: String, offset?: number): Promise<MultiplePosts> {
        return this.service.fetchMultiplePosts();
    }
}

export default PostService;