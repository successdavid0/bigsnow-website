"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Roles", href: "#roles" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-[var(--color-bg-glass)] backdrop-blur-xl border-b border-[var(--color-border)]"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-secondary)] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow">
                            <Image
                                src="/Bigsnow.PNG"
                                alt="Bigsnow logo"
                                fill
                                className="object-contain p-1"
                                sizes="40px"
                            />
                        </div>
                        <span className="font-[family-name:var(--font-display)] font-bold text-lg hidden sm:block">
                            Bigsnow
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium tracking-wide"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" className="btn-primary text-sm !py-2 !px-5">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-[var(--color-text-primary)]"
                        />
                        <motion.span
                            animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-0.5 bg-[var(--color-text-primary)]"
                        />
                        <motion.span
                            animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-[var(--color-text-primary)]"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => setIsMobileOpen(false)}
                                className="text-2xl font-[family-name:var(--font-display)] font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileOpen(false)}
                            className="btn-primary text-lg mt-4"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
