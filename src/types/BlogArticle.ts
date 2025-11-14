export interface BlogArticle {
    id: number;
    created_at: Date;
    title: string;
    content: string;
    slug: string;
    authorId: string;
    is_published: boolean;
}

export interface BlogArticleMetadata {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featuredImage?: string;
}

export interface Comment {
    id: number;
    created_at: Date;
    content: string;
    username: string;
    email: string;
    postId: number;
    userId: string;
}