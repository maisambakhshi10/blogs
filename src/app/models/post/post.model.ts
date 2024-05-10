
export interface Post {
    id: string;
    img: string;
    title: string;
    body: string;
    date: string;
    user: string;
}
export interface PostsList {
    posts: Post[]
}