"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingAnimation, Badge } from "@/components/ui";

function ParticleNetwork({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement | null> }) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const particleCount = 80;
        const connectionDistance = 150;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 0.5,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(0, 240, 255, 0.4)";
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / connectionDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animationId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, [canvasRef]);

    return null;
}

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Particle Background */}
            <canvas ref={canvasRef} className="particle-canvas" />
            <ParticleNetwork canvasRef={canvasRef} />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)] z-[1]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6 max-w-6xl mx-auto">
                {/* Text Content */}
                <div className="text-center lg:text-left flex-1">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <Badge variant="green">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
                        Open to Opportunities
                    </Badge>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-display)] font-bold mb-6 leading-tight"
                >
                    Bigsnow
                </motion.h1>

                {/* Typing Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold mb-6 h-10"
                >
                    <TypingAnimation
                        texts={[
                            "Web3 Dev.",
                            "DApp Builder.",
                            "Growth Marketer.",
                            "Advisor.",
                            "Community Builder.",
                        ]}
                    />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto lg:mx-0"
                >
                    I build, grow, and connect Web3 ecosystems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                >
                    <a href="#contact" className="btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        Hire Me
                    </a>
                    <a href="#projects" className="btn-secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        View Work
                    </a>
                    <a href="/resume.pdf" className="btn-secondary" download>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download CV
                    </a>
                </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[var(--color-border-accent)] shadow-[0_0_40px_rgba(0,240,255,0.15)]">
                        <Image
                            src="/Bigsnow.PNG"
                            alt="Bigsnow"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <span className="text-sm text-[var(--color-text-muted)] tracking-widest uppercase">
                    Scroll
                </span>
            </motion.div>
        </section>
    );
}
