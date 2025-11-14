import type { BlogArticle, BlogArticleMetadata, Comment } from "../types/BlogArticle";
import { supabase } from "./SupabaseClient";


/**
 * Fetches all published blog posts directly from the 'articles' table.
 */
const fetchAllArticles = async (): Promise<BlogArticleMetadata[]> => {
  // 1. The query to Supabase needs to join tables
  const { data, error } = await supabase
    .from('articles')
    .select(`
      id,
      title,
      excerpt,
      publishedAt:created_at,
      featuredImage:featured_image_url,
      author:profiles(full_name),
      tags(name)
    `)
    .eq('is_published', true) // Only fetch published articles
    .order('created_at', { ascending: false }); // Show newest first

  if (error) {
    console.error('Error fetching articles:', error);
    throw new Error(error.message);
  }

  // 2. The data from Supabase needs to be transformed to match your interface
  if (!data) {
    return [];
  }

  const articles: BlogArticleMetadata[] = data.map((article: any) => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    publishedAt: article.publishedAt,
    featuredImage: article.featuredImage,
    // The author will be an object { full_name: '...' }, so we extract the name
    author: article.author?.full_name || 'Anonymous',
    // Tags will be an array of objects [{ name: '...' }], so we extract the names
    tags: article.tags.map((tag: any) => tag.name),
  }));

  return articles;
};

/**
 * Fetches a single blog post by its unique slug from the 'articles' table.
 */
const fetchArticleBySlug = async (slug: string): Promise<BlogArticle | null> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select(`
                *,
                comments(*)
            `)
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching articles with slug "${slug}":`, error.message);
      return null;
    }

    return data;
  } catch (error) {
    console.error("An unexpected error occurred while fetching a articles:", error);
    return null;
  }
}

/**
 * Inserts a new comment into the 'comments' table.
 */
const addComment = async ({ postId, username, email, content }: { postId: string, username: string, email: string, content: string }) => {
  try {
    const { data, error } = await supabase
      .from('comments')
      .insert({
        post_id: postId,
        username,
        email,
        content
      })
      .select()
      .single();

    if (error) {
      console.error("Error adding comment:", error);
      return { success: false, error };
    }

    return { success: true, data: data as Comment };
  } catch (error) {
    console.error("An unexpected error occurred while adding a comment:", error);
    return { success: false, error };
  }
}

/**
 * Creates a new post in the 'posts' table.
 * This is an authenticated operation.
 */
export const createArticle = async (postData: { title: string; content: string; slug: string; is_published: boolean }) => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .insert(postData)
      .select()
      .single();

    if (error) {
      console.error("Error creating post:", error);
      return { success: false, error };
    }

    return { success: true, data: data as BlogArticle };
  } catch (error) {
    console.error("An unexpected error occurred while creating an article:", error);
    return { success: false, error };
  }
}

const blogService = {
  fetchAllArticles,
  fetchArticleBySlug,
  addComment,
  createArticle
}

export default blogService;