import { PostServiceAble, SinglePost, MultiplePosts } from "../../../components/Blog/interfaces/iArticle";


class PostService implements PostServiceAble{
    service: PostServiceAble;

    constructor(PostService: PostServiceAble){
        this.service = PostService;
    }

    public fetchSinglePost(id: number): SinglePost {
        return this.service.fetchSinglePost(id);
    }

    public fetchMultiplePosts(searchTerm?: String, offset?: number): MultiplePosts {
        return this.service.fetchMultiplePosts();
    }
}

export default PostService;