"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

/* ==========================================
   SECTION TITLE
   ========================================== */
export function SectionTitle({
    title,
    subtitle,
    align = "center",
}: {
    title: string;
    subtitle?: string;
    align?: "center" | "left";
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
        >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-bold mb-4">
                {title}
            </h2>
            <div
                className={`h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] mb-6 ${align === "center" ? "mx-auto" : ""
                    }`}
            />
            {subtitle && (
                <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

/* ==========================================
   GLASS CARD
   ========================================== */
export function GlassCard({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02, y: -4 }}
            className={`glass-card p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
}

/* ==========================================
   STAT COUNTER
   ========================================== */
export function StatCounter({
    value,
    label,
    suffix = "+",
    delay = 0,
}: {
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2,
                delay,
                ease: "easeOut",
            });
            const unsubscribe = rounded.on("change", (v) => setDisplay(v));
            return () => {
                controls.stop();
                unsubscribe();
            };
        }
    }, [isInView, value, count, rounded, delay]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold gradient-text mb-2">
                {display}
                {suffix}
            </div>
            <div className="text-[var(--color-text-secondary)] text-sm uppercase tracking-widest">
                {label}
            </div>
        </div>
    );
}

/* ==========================================
   SKILL TAG
   ========================================== */
export function SkillTag({ name, delay = 0 }: { name: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay }}
            whileHover={{ scale: 1.08 }}
            className="px-4 py-2 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-medium hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] transition-all cursor-default"
        >
            {name}
        </motion.div>
    );
}

/* ==========================================
   BADGE
   ========================================== */
export function Badge({
    children,
    variant = "default",
}: {
    children: ReactNode;
    variant?: "default" | "accent" | "green";
}) {
    const colors = {
        default: "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border)]",
        accent: "bg-[rgba(0,240,255,0.1)] text-[var(--color-accent)] border-[var(--color-border-accent)]",
        green: "bg-[rgba(0,255,136,0.1)] text-[var(--color-accent-green)] border-[rgba(0,255,136,0.3)]",
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${colors[variant]}`}
        >
            {children}
        </span>
    );
}

/* ==========================================
   TYPING ANIMATION
   ========================================== */
export function TypingAnimation({ texts }: { texts: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const text = texts[currentIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setCurrentText(text.slice(0, currentText.length + 1));
                    if (currentText === text) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setCurrentText(text.slice(0, currentText.length - 1));
                    if (currentText === "") {
                        setIsDeleting(false);
                        setCurrentIndex((prev) => (prev + 1) % texts.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentIndex, texts]);

    return (
        <span className="gradient-text">
            {currentText}
            <span className="animate-pulse text-[var(--color-accent)]">|</span>
        </span>
    );
}
