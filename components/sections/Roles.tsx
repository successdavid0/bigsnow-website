"use client";

import { SectionTitle, GlassCard } from "@/components/ui";

const roles = [
    {
        emoji: "🛠",
        title: "Web3 Full-Stack / DApp Developer",
        description:
            "Smart contracts, frontend integrations, wallet connections, and full-stack DApp development across EVM-compatible chains.",
        tags: ["Solidity", "React", "Ethers.js", "Hardhat"],
    },
    {
        emoji: "📣",
        title: "Web3 Marketer",
        description:
            "Growth strategy, community campaigns, social media management, and content creation tailored for crypto-native audiences.",
        tags: ["Growth", "Content", "Social", "Community"],
    },
    {
        emoji: "🤝",
        title: "Collaboration & Partnership Manager",
        description:
            "Forging ecosystem partnerships, managing integrations, co-marketing campaigns, and strategic alliances between protocols.",
        tags: ["Partnerships", "BD", "Strategy", "Integration"],
    },
    {
        emoji: "🧠",
        title: "Advisor & Ambassador",
        description:
            "Strategic guidance for Web3 projects, public representation, thought leadership, and ecosystem advocacy at scale.",
        tags: ["Advisory", "Speaking", "AMAs", "Leadership"],
    },
];

export default function Roles() {
    return (
        <section id="roles" className="section-padding relative bg-[var(--color-bg-secondary)]/30">
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    title="What I Do"
                    subtitle="Multi-disciplinary expertise across the Web3 stack."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {roles.map((role, i) => (
                        <GlassCard key={role.title} delay={i * 0.1} className="group">
                            <div className="text-4xl mb-4">{role.emoji}</div>
                            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                {role.title}
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                                {role.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {role.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-1 rounded-md bg-[rgba(0,240,255,0.08)] text-[var(--color-accent)] border border-[rgba(0,240,255,0.15)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
