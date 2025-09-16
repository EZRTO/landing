"use client";

import { useState, KeyboardEvent } from "react";
import Image from "next/image";
import { IconArrowRight, IconCalendar, IconClock, IconUser } from "@tabler/icons-react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
};

interface BlogClientProps {
  posts: Post[];
  categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const postsInCategory = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
  const featuredPost = postsInCategory.find(post => post.featured) || null;
  const regularPosts = postsInCategory.filter(post => !post.featured);

  const onCategoryKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = categories.indexOf(activeCategory);
    if (e.key === "ArrowRight") {
      const next = (currentIndex + 1) % categories.length;
      setActiveCategory(categories[next]);
    } else if (e.key === "ArrowLeft") {
      const prev = (currentIndex - 1 + categories.length) % categories.length;
      setActiveCategory(categories[prev]);
    }
  };

  return (
    <>
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-white/80 text-sm">Featured</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-white/90 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-white/80 mb-6">
                    <div className="flex items-center gap-2">
                      <IconUser className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCalendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconClock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Read Full Article
                  </button>
                </div>
                <div className="relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            role="tablist"
            aria-label="Blog categories"
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
            onKeyDown={onCategoryKeyDown}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${category}`}
                  className={`px-5 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-secondary-700 hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${activeCategory}`}
            role="tabpanel"
            aria-labelledby={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <IconUser className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IconCalendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <IconClock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition-colors duration-200">
                    Read More
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 