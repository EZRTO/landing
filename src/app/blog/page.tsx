import { Metadata } from "next";
import BlogClient from "./BlogClient";

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
      </section>

      <BlogClient posts={blogPosts} categories={categories} />
    </>
  );
}
