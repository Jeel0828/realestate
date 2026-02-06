"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";
import Link from "next/link";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });

        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 md:py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="w-[80%] mx-auto">
                <motion.div variants={childVariants}>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center text-rose-600 hover:text-black mb-6 mt-8 transition-colors duration-300 tracking-wider"
                    >
                        ← Back to Home
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div variants={childVariants} className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "0.5px" }}>
                                Get in Touch
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed" style={{ letterSpacing: "0.3px" }}>
                                We'd love to hear from you! Whether you have a question about our services,
                                want to schedule a viewing, or just want to say hello, we're here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                className="flex items-start gap-4"
                                variants={childVariants}
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-rose-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-1">Office Address</h3>
                                    <p className="text-gray-600">
                                        123 Business Avenue<br />
                                        New York, NY 10001<br />
                                        United States
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                variants={childVariants}
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-rose-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                variants={childVariants}
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-rose-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-600">info@homehub.com</p>
                                    <p className="text-gray-600">support@homehub.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                variants={childVariants}
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaClock className="text-rose-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div variants={childVariants}>
                            <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    href="/"
                                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaFacebookF />
                                </motion.a>
                                <motion.a
                                    href="/"
                                    className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaTwitter />
                                </motion.a>
                                <motion.a
                                    href="/"
                                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaInstagram />
                                </motion.a>
                                <motion.a
                                    href="/"
                                    className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={childVariants}>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "0.5px" }}>
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ letterSpacing: "0.3px" }}>
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-rose-600 focus:ring-2 focus:ring-rose-600 outline-none transition"
                                            placeholder="John Doe"
                                            style={{ letterSpacing: "0.3px" }}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2" style={{ letterSpacing: "0.3px" }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-rose-600 focus:ring-2 focus:ring-rose-600 outline-none transition"
                                            placeholder="john@example.com"
                                            style={{ letterSpacing: "0.3px" }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ letterSpacing: "0.3px" }}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-rose-600 focus:ring-2 focus:ring-rose-600 outline-none transition"
                                        placeholder="+1 (555) 123-4567"
                                        style={{ letterSpacing: "0.3px" }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ letterSpacing: "0.3px" }}>
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-rose-600 focus:ring-2 focus:ring-rose-600 outline-none transition"
                                        placeholder="How can we help you?"
                                        style={{ letterSpacing: "0.3px" }}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ letterSpacing: "0.3px" }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-rose-600 focus:ring-2 focus:ring-rose-600 outline-none transition resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                        style={{ letterSpacing: "0.3px" }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl bg-rose-600 py-3 text-white font-medium hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    style={{ letterSpacing: "0.5px" }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;