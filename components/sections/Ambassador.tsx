"use client";

import { SectionTitle, GlassCard, StatCounter } from "@/components/ui";

const ambassadorRoles = [
    {
        project: "Deriverse",
        role: "Community Ambassador",
        color: "#7b61ff",
        initials: "D",
        description: "Representing Deriverse across developer communities and hackathons.",
    },
    {
        project: "Woof Hype",
        role: "Advocate",
        color: "#375BD2",
        initials: "WH",
        description: "Educating developers on oracle integration and Woofhype VRF usage.",
    },
    {
        project: "Lurky",
        role: "Ecosystem Contributor",
        color: "#B6509E",
        initials: "L",
        description: "Contributing to governance proposals and community education.",
    },
];

const metrics = [
    { value: 13000, label: "Discord Members Managed", suffix: "+" },
    { value: 20000, label: "Twitter/X Following", suffix: "+" },
    { value: 40, label: "Events Hosted", suffix: "+" },
    { value: 20, label: "AMAs Conducted", suffix: "+" },
];

const contentLinks = [
    {
        title: "Why Community-First DAOs Win — A Thread",
        type: "Thread",
        platform: "Twitter/X",
        link: "#",
    },
    {
        title: "Building Gas-Optimized Smart Contracts",
        type: "Tutorial",
        platform: "Dev.to",
        link: "#",
    },
];

export default function Ambassador() {
    return (
        <section id="ambassador" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    title="Ambassador & Community Reach"
                    subtitle="Building bridges between projects and communities at scale."
                />

                {/* Ambassador Roles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {ambassadorRoles.map((role, i) => (
                        <GlassCard key={role.project} delay={i * 0.1} className="text-center">
                            <div
                                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-[family-name:var(--font-display)] font-bold"
                                style={{
                                    background: `${role.color}20`,
                                    color: role.color,
                                    border: `1px solid ${role.color}40`,
                                }}
                            >
                                {role.initials}
                            </div>
                            <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mb-1">
                                {role.project}
                            </h3>
                            <p
                                className="text-sm font-medium mb-2"
                                style={{ color: role.color }}
                            >
                                {role.role}
                            </p>
                            <p className="text-[var(--color-text-secondary)] text-sm">
                                {role.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {metrics.map((metric, i) => (
                        <GlassCard key={metric.label} delay={i * 0.1} className="py-6">
                            <StatCounter
                                value={metric.value}
                                label={metric.label}
                                suffix={metric.suffix}
                                delay={i * 0.15}
                            />
                        </GlassCard>
                    ))}
                </div>

                {/* Notable Content */}
                <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-xl mb-6 text-center">
                        Notable Content
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {contentLinks.map((content, i) => (
                            <GlassCard key={content.title} delay={i * 0.1} className="group">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-xs px-2 py-0.5 rounded bg-[rgba(0,240,255,0.08)] text-[var(--color-accent)] border border-[rgba(0,240,255,0.15)]">
                                        {content.type}
                                    </span>
                                    <span className="text-xs text-[var(--color-text-muted)]">
                                        {content.platform}
                                    </span>
                                </div>
                                <a
                                    href={content.link}
                                    className="font-[family-name:var(--font-display)] font-semibold text-sm group-hover:text-[var(--color-accent)] transition-colors leading-snug block"
                                >
                                    {content.title}
                                </a>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
