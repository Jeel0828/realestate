"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/data/data";
import { BiCalendar, BiMessage, BiUser } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
    const blogId = parseInt(params.id);
    const blog = blogs.find((b) => b.id === blogId);

    if (!blog) {
        notFound();
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" as const }
        },
    };

    const fullContent = `
    ${blog.shortDescription} This comprehensive guide explores the latest trends and strategies in the real estate market. 
    Whether you're a first-time buyer, seasoned investor, or looking to sell your property, this article provides 
    valuable insights to help you make informed decisions. We'll cover market analysis, investment opportunities, 
    and practical tips for navigating the complex world of real estate transactions.
    
    The current market conditions present unique opportunities for savvy investors. With interest rates fluctuating 
    and inventory levels varying by region, understanding the local market dynamics is crucial for success. 
    Our expert analysis breaks down the key factors that influence property values and rental yields.
    
    For those looking to maximize their returns, we've compiled proven strategies that have helped countless 
    investors achieve their financial goals. From property selection to financing options, we leave no stone 
    unturned in our quest to provide you with actionable advice.
  `;

    return (
        <>
            <motion.div
                className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 md:py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="w-[80%] mx-auto">
                    <motion.div variants={childVariants}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-rose-600 hover:text-black mb-6 mt-8 transition-colors duration-300 tracking-wider"
                        >
                            ← Back to Blog
                        </Link>
                    </motion.div>

                    <motion.article
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        variants={childVariants}
                    >
                        <motion.div className="relative h-80 md:h-96" variants={imageVariants}>
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>

                        <motion.div className="p-6 md:p-8 lg:p-10" variants={childVariants}>
                            <motion.div
                                className="flex flex-wrap items-center gap-6 mb-6 text-gray-600"
                                variants={childVariants}
                            >
                                <div className="flex items-center gap-2">
                                    <BiCalendar className="text-rose-600 text-xl" />
                                    <span className="text-sm md:text-base">{blog.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BiMessage className="text-rose-600 text-xl" />
                                    <span className="text-sm md:text-base">{blog.comment}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BiUser className="text-rose-600 text-xl" />
                                    <span className="text-sm md:text-base">Admin</span>
                                </div>
                            </motion.div>

                            <motion.h1
                                className="text-3xl font-medium text-gray-900 mb-6 leading-tight"
                                variants={childVariants}
                                style={{ letterSpacing: "0.5px" }}
                            >
                                {blog.title}
                            </motion.h1>

                            <motion.div
                                className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4"
                                variants={childVariants}
                            >
                                {fullContent.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-base md:text-lg leading-relaxed" style={{ letterSpacing: "0.5px" }}>
                                        {paragraph.trim()}
                                    </p>
                                ))}
                            </motion.div>

                            <motion.div
                                className="mt-8 pt-6 border-t border-gray-200"
                                variants={childVariants}
                            >
                                <h3 className="text-lg font-medium text-gray-900 mb-4" style={{ letterSpacing: "0.5px" }}>Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Real Estate", "Investment", "Market Trends", "Property Tips", "Buying Guide"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium hover:bg-rose-200 transition-colors cursor-pointer"
                                            style={{ letterSpacing: "0.5px" }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="mt-8 pt-6 border-t border-gray-200"
                                variants={childVariants}
                            >
                                <h3 className="text-lg font-medium text-gray-900 mb-4" style={{ letterSpacing: "0.5px" }}>Share this article</h3>
                                <div className="flex gap-4">
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaFacebook />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaTwitter />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaLinkedin />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-all"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaInstagram />
                                    </motion.a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="mt-12 pt-8 border-t border-gray-200"
                                variants={childVariants}
                            >
                                <h3 className="text-2xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "0.5px" }}>Related Posts</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {blogs
                                        .filter((b) => b.id !== blog.id)
                                        .slice(0, 2)
                                        .map((relatedBlog) => (
                                            <motion.div
                                                key={relatedBlog.id}
                                                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                                whileHover={{ y: -4 }}
                                            >
                                                <Link href={`/blog/${relatedBlog.id}`}>
                                                    <div className="relative h-40">
                                                        <Image
                                                            src={relatedBlog.image}
                                                            alt={relatedBlog.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-4">
                                                        <h4 className="font-medium text-gray-900 mb-2 line-clamp-2" style={{ letterSpacing: "0.5px" }}>
                                                            {relatedBlog.title}
                                                        </h4>
                                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                                            <div className="flex items-center gap-1">
                                                                <BiCalendar className="text-rose-500" />
                                                                <span>{relatedBlog.date}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <BiMessage className="text-rose-500" />
                                                                <span>{relatedBlog.comment}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.article>
                </div>
            </motion.div>
        </>
    );
};

export default BlogDetailsPage;