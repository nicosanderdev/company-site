import { Link } from 'react-router';
import type { BlogArticleMetadata } from '../types/BlogArticle';
import { useState, useEffect } from 'react';
import { Badge, Card } from 'flowbite-react';
import blogService from '../services/BlogService';
import { motion } from "motion/react";
import EmeraldBackground from '../components/EmeraldBackground';

export default function BlogArticles() {
  const [articles, setArticles] = useState<BlogArticleMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const result = await blogService.fetchAllArticles();
        setArticles(result);
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
      <EmeraldBackground className="min-h-screen bg-transparent flex items-center justify-center">
        <div>
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500 mx-auto"></div>
            <p className="mt-4 ">Loading articles...</p>
          </div>
        </div>
      </EmeraldBackground>
    );
  }

  return (
    <EmeraldBackground className="min-h-screen bg-transparent">
      <div>
        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Blog Articles
            </h1>
            <p className="text-xl">
              Discover insights, tutorials, and best practices
            </p>
          </header>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (

                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  {/* Featured Image */}
                  <img
                    src={article.featuredImage ? article.featuredImage : "https://placehold.co/400x300"}
                    alt={article.featuredImage ? article.title : "Featured Image"}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} color="success">
                          {tag}
                        </Badge>
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
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    {/* Read More Link */}
                    <Link
                      to={`/blog/${article.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium transition-colors"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>

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
    </EmeraldBackground>
  );
}