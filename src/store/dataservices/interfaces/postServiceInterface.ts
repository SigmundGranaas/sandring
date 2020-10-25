interface PostServiceAble{
    fetchSinglePost(id: number): Promise<SinglePost>;
    fetchMultiplePosts(searchTerm?: String, offset?: number): Promise<MultiplePosts>;

}

interface SinglePost{
    title: String;
    image: String;
    id: number;
}

interface MultiplePosts{
    posts: SinglePost[];
}

export type { PostServiceAble, SinglePost, MultiplePosts };


