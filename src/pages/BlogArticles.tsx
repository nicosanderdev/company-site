import { Link } from 'react-router';
import type { BlogArticleMetadata } from '../types/BlogArticle';
import { useState, useEffect } from 'react';

export default function BlogArticles() {
  const [articles, setArticles] = useState<BlogArticleMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        
        // TODO: Replace with actual API call or data fetching logic
        // For now, we'll simulate loading with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock articles data - replace with actual data fetching
        const mockArticles: BlogArticleMetadata[] = [
          {
            id: 'getting-started-with-react',
            title: 'Getting Started with React',
            excerpt: 'Learn the basics of React development and build your first component.',
            author: 'John Doe',
            publishedAt: new Date().toISOString(),
            tags: ['react', 'javascript', 'frontend'],
            featuredImage: undefined
          },
          {
            id: 'typescript-best-practices',
            title: 'TypeScript Best Practices',
            excerpt: 'Discover the best practices for writing maintainable TypeScript code.',
            author: 'Jane Smith',
            publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            tags: ['typescript', 'javascript', 'development'],
            featuredImage: undefined
          },
          {
            id: 'css-grid-layout-guide',
            title: 'CSS Grid Layout Guide',
            excerpt: 'Master CSS Grid and create responsive layouts with ease.',
            author: 'Mike Johnson',
            publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            tags: ['css', 'layout', 'responsive'],
            featuredImage: undefined
          }
        ];
        
        setArticles(mockArticles);
      } catch (err) {
        console.error('Error loading articles:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Articles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover insights, tutorials, and best practices
          </p>
        </header>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Featured Image Placeholder */}
                {article.featuredImage ? (
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {article.title.charAt(0)}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>By {article.author}</span>
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  {/* Read More Link */}
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No Articles Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Check back later for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}