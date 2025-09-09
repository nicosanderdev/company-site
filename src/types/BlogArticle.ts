export interface BlogArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featuredImage?: string;
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
