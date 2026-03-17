"use client";

import { SectionTitle, GlassCard } from "@/components/ui";

const testimonials = [
    {
        quote:
            "Bigsnow is one of the most versatile Web3 builders I've worked with. From smart contract development to community strategy — they deliver at every level.",
        name: "Alex Chen",
        title: "Co-Founder",
        project: "NexusSwap",
        avatar: "AC",
        color: "#00f0ff",
    },
    {
        quote:
            "Their ability to bridge the gap between tech and business is rare. Bigsnow helped us secure critical partnerships that accelerated our growth by 10x.",
        name: "Sarah Kim",
        title: "Head of Growth",
        project: "MetaDAO Collective",
        avatar: "SK",
        color: "#7b61ff",
    },
    {
        quote:
            "The smart contracts Bigsnow built for us were clean, gas-optimized, and passed audit with zero critical findings. A true professional.",
        name: "Marcus Rivera",
        title: "CTO",
        project: "ChainVault Protocol",
        avatar: "MR",
        color: "#00ff88",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding relative bg-[var(--color-bg-secondary)]/30">
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    title="What They Say"
                    subtitle="Testimonials from founders and collaborators I've worked with."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <GlassCard key={t.name} delay={i * 0.15} className="flex flex-col">
                            {/* Quote */}
                            <div className="mb-6 flex-1">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="mb-4 opacity-30"
                                >
                                    <path
                                        d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                                    style={{
                                        background: `${t.color}20`,
                                        color: t.color,
                                        border: `1px solid ${t.color}40`,
                                    }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="font-[family-name:var(--font-display)] font-semibold text-sm">
                                        {t.name}
                                    </p>
                                    <p className="text-[var(--color-text-muted)] text-xs">
                                        {t.title} · {t.project}
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
