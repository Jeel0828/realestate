// "use client";

// type LoginModalProps = {
//     open: boolean;
//     onClose: () => void;
// };

// const LoginModal = ({ open, onClose }: LoginModalProps) => {
//     if (!open) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             {/* Backdrop */}
//             <div
//                 className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//                 onClick={onClose}
//             />

//             {/* Modal */}
//             <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn">

//                 {/* Close */}
//                 <button
//                     onClick={onClose}
//                     className="absolute right-4 top-4 text-gray-400 hover:text-black transition"
//                 >
//                     ✕
//                 </button>

//                 {/* Header */}
//                 <h2 className="text-2xl font-bold text-gray-900 text-center">
//                     Welcome Back 👋
//                 </h2>
//                 <p className="mt-1 text-center text-sm text-gray-500">
//                     Login to your account
//                 </p>

//                 {/* Form */}
//                 <form className="mt-6 space-y-4">
//                     <input
//                         type="email"
//                         placeholder="Email address"
//                         className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-black focus:outline-none"
//                     />

//                     <input
//                         type="password"
//                         placeholder="Password"
//                         className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-black focus:outline-none"
//                     />

//                     <button
//                         type="submit"
//                         className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white hover:bg-gray-900 transition"
//                     >
//                         Login
//                     </button>
//                 </form>

//                 {/* Footer */}
//                 <p className="mt-4 text-center text-sm text-gray-500">
//                     Don’t have an account?{" "}
//                     <span className="font-semibold text-black cursor-pointer">
//                         Register
//                     </span>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default LoginModal;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock } from "lucide-react";

type LoginModalProps = {
    open: boolean;
    onClose: () => void;
};

const LoginModal = ({ open, onClose }: LoginModalProps) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative z-10 w-[92%] max-w-md rounded-3xl bg-white p-8 shadow-2xl"
                    >
                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute right-5 top-5 text-gray-400 hover:text-black transition"
                        >
                            ✕
                        </button>

                        {/* Header */}
                        <div className="text-center">
                            <h2 className="text-2xl font-medium text-gray-900" style={{ letterSpacing: '0.5px' }}>
                                Welcome Back 👋
                            </h2>
                            <p className="mt-2 text-sm text-gray-500" style={{ letterSpacing: '0.5px' }}>
                                Login to continue your journey
                            </p>
                        </div>

                        <form className="mt-8 space-y-5">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    style={{ letterSpacing: '0.5px' }}
                                    className="w-full rounded-xl border border-gray-300 pl-12 pr-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                                />
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    style={{ letterSpacing: '0.5px' }}
                                    className="w-full rounded-xl border border-gray-300 pl-12 pr-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                                />
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                whileHover={{ scale: 1.02 }}
                                type="submit"
                                className="w-full rounded-xl bg-black py-3 text-sm font-medium text-white shadow-lg hover:bg-gray-900 transition"
                                style={{ letterSpacing: '1px' }}
                            >
                                Login
                            </motion.button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-500" style={{ letterSpacing: '0.5px' }}>
                            Don’t have an account?{" "}
                            <span className="font-medium text-black cursor-pointer hover:underline">
                                Register
                            </span>
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
