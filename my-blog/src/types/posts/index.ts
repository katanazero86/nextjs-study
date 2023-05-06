export interface Post {
    title: string;
    description: string;
    date: string;
    category: string;
    imgUrl: string;
    path: string;
    featured: boolean;
}

export interface DetailPost extends Post {
    content: string;
    prev: string;
    next: string;
}