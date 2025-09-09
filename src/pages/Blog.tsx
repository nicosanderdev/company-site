import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import type { BlogArticle } from '../types/BlogArticle';

export default function Blog() {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!articleId) {
        setError('No article ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // TODO: Replace with actual API call or data fetching logic
        // For now, we'll simulate loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Placeholder article data - replace with actual data fetching
        const mockArticle: BlogArticle = {
          id: articleId,
          title: `Blog Article ${articleId}`,
          content: `This is the content for blog article ${articleId}. This is where the full article content will be displayed.`,
          excerpt: `This is an excerpt for blog article ${articleId}`,
          author: 'John Doe',
          publishedAt: new Date().toISOString(),
          tags: ['technology', 'web development'],
          featuredImage: undefined
        };
        
        setArticle(mockArticle);
      } catch (err) {
        setError('Failed to load article');
        console.error('Error loading article:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [articleId]);

  const handleBackToBlog = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-4">
            {error || 'The requested article could not be found.'}
          </p>
          <button
            onClick={handleBackToBlog}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={handleBackToBlog}
          className="mb-6 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>

        {/* Article header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>By {article.author}</span>
            <span>•</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Featured image */}
        {article.featuredImage && (
          <div className="mb-8">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Article content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
            {article.content}
          </div>
        </article>
      </div>
    </div>
  );
}