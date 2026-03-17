"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle, Badge } from "@/components/ui";

const collaborationTypes = [
    "Dev Work",
    "Advisory",
    "Partnership",
    "Ambassador",
    "Other",
];

const socialLinks = [
    { label: "Telegram", href: "https://t.me/BigSnow_o", icon: "✈️" },
    { label: "Twitter/X", href: "https://x.com/bigsnow_o", icon: "𝕏" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/success-david-5a27532a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: "in" },
    { label: "Email", href: "mailto:successdavidpraise99@gmail.com", icon: "📧" },
    { label: "GitHub", href: "https://github.com/successdavid0", icon: "⌨️" },
    { label: "Discord", href: "https://discord.gg/Gf374qgC", icon: "💬" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        type: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="section-padding relative bg-[var(--color-bg-secondary)]/30">
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    title="Let's Build Together"
                    subtitle="Ready to collaborate? Drop me a message."
                />

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-5 gap-8"
                >
                    {/* Form */}
                    <div className="md:col-span-3 glass-card p-8">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="text-4xl mb-4">🎉</div>
                                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl mb-2 gradient-text">
                                    Message Sent!
                                </h3>
                                <p className="text-[var(--color-text-secondary)]">
                                    I&apos;ll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <select
                                        value={formData.type}
                                        onChange={(e) =>
                                            setFormData({ ...formData, type: e.target.value })
                                        }
                                        className="form-input"
                                        required
                                    >
                                        <option value="" disabled>
                                            What type of collaboration?
                                        </option>
                                        {collaborationTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="form-input resize-none"
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Availability */}
                        <div className="glass-card p-6">
                            <h4 className="font-[family-name:var(--font-display)] font-semibold text-sm mb-3">
                                Availability
                            </h4>
                            <Badge variant="green">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
                                Open to Opportunities
                            </Badge>
                            <p className="text-[var(--color-text-muted)] text-xs mt-3">
                                🌍 Timezone: WAT (UTC+1)
                            </p>
                            <p className="text-[var(--color-text-muted)] text-xs mt-1">
                                Response time: ~24 hours
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-6">
                            <h4 className="font-[family-name:var(--font-display)] font-semibold text-sm mb-4">
                                Connect
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-medium hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] transition-all"
                                    >
                                        <span>{social.icon}</span>
                                        {social.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
