"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import FeaturedPost from "../components/FeaturedPost";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const categories = [
  "All",
  "AI",
  "Quantum Computing",
  "ML & DL",
  "Reinforcement Learning",
  "Meta Learning",
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  // Fetch posts from API
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchQuery]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
  
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
          

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-3">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search articles..."
              />
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </section>

        {/* Error State */}
        {error && (
          <section className="px-4 md:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center">
                <div className="text-red-600 dark:text-red-400 text-4xl mb-4">
                  
                </div>
                <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">
                  Error Loading Posts
                </h3>
                <p className="text-red-600 dark:text-red-300 mb-4">{error}</p>
                <button
                  onClick={fetchPosts}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                >
                  Try Again
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Featured Post */}
        {featuredPost && !error && (
          <section className="px-4 md:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Article
              </h2>
              <FeaturedPost post={featuredPost} />
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="px-4 md:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedCategory === "All"
                  ? "All Thoughts"
                  : `${selectedCategory} Articles`}
              </h2>
              <span className="text-gray-600 dark:text-gray-400">
                {filteredPosts.length}{" "}
                {filteredPosts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded mb-2"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {searchQuery || selectedCategory !== "All"
                    ? "Try adjusting your search or filter criteria"
                    : "No blog posts available yet. Check back soon!"}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
