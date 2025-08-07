import { Metadata } from "next";
import { IconArrowRight, IconCalendar, IconClock, IconUser, IconTag } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Blog - RTOEase",
  description: "Stay updated with the latest news, tips, and insights about vehicle documentation, RTO processes, and automotive regulations in India.",
};

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Hypothecation Removal in 2024",
    excerpt: "Learn everything you need to know about removing hypothecation from your vehicle RC, including required documents, process timeline, and common challenges.",
    author: "RTOEase Team",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Guides",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
  },
  {
    id: 2,
    title: "How to Get Duplicate RC When Original is Lost",
    excerpt: "Lost your vehicle RC? Don't worry! Here's a step-by-step guide to get a duplicate RC issued quickly and hassle-free.",
    author: "RTOEase Team",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "How-to",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
  },
  {
    id: 3,
    title: "New RTO Rules for Vehicle Transfer in 2024",
    excerpt: "Stay updated with the latest RTO regulations for vehicle ownership transfer. Learn about new requirements and simplified processes.",
    author: "RTOEase Team",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "News",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding NOC: No Objection Certificate Explained",
    excerpt: "Everything you need to know about NOC - what it is, when you need it, and how to obtain it for vehicle sale or transfer.",
    author: "RTOEase Team",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Education",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
  },
  {
    id: 5,
    title: "Digital RC vs Physical RC: Which is Better?",
    excerpt: "Compare digital RC and physical RC formats. Learn about the benefits, limitations, and future of digital vehicle documentation.",
    author: "RTOEase Team",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Technology",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
  },
  {
    id: 6,
    title: "Common Mistakes to Avoid During RC Address Change",
    excerpt: "Avoid these common pitfalls when updating your address on vehicle RC. Tips for a smooth and error-free process.",
    author: "RTOEase Team",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Tips",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
  },
];

const categories = ["All", "Guides", "How-to", "News", "Education", "Technology", "Tips"];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                <span className="text-primary">RTOEase Blog</span>
              </h1>
              <p className="mb-6 font-semibold text-secondary-700">Stay informed about vehicle documentation and RTO processes</p>
              <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
                Get the latest insights, tips, and guides to help you navigate vehicle documentation with ease.
              </p>
            </div>
          </div>
        </div>

      {/* Featured Post Section */}
      {featuredPost && (
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
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
      )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-white text-secondary-700 hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
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

          {/* Load More Button */}
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
