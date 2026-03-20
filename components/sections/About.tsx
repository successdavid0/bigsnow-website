"use client";

import { SectionTitle, GlassCard, StatCounter, SkillTag } from "@/components/ui";

const skills = [
   
    "Community Building",
    "DeFi",
    "NFTs",
    "Smart Contracts",
    "React",
    "Next.js",
    "Node.js",
    "Ethereum",
    "TypeScript",
    "Ethers.js",
    "BNB Chain",
    "base",
    "Polygon",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Discord Bots",
    "Solidity",
    
];

const stats = [
    { value: 5, label: "Years Experience", suffix: "+" },
    { value: 12, label: "Projects Completed", suffix: "+" },
    { value: 4, label: "Chains Worked On", suffix: "+" },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    title="About Me"
                    subtitle="Building at the intersection of code, community, and crypto."
                />

                {/* Bio */}
                <GlassCard className="max-w-3xl mx-auto mb-16">
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                        I&apos;m a Web3 full-stack developer and ecosystem builder with a passion for
                        decentralized technology. <br /><br />From writing Solidity smart contracts to scaling
                        communities of thousands, I bring a rare combination of deep technical skill
                        and growth-driven marketing expertise. <br /><br />My journey spans DeFi protocols, NFT
                        platforms, DAO tooling, and cross-chain integrations — always building with
                        the mission of making Web3 more accessible, secure, and impactful.
                    </p>
                </GlassCard>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, i) => (
                        <GlassCard key={stat.label} delay={i * 0.1} className="py-8">
                            <StatCounter
                                value={stat.value}
                                label={stat.label}
                                suffix={stat.suffix}
                                delay={i * 0.2}
                            />
                        </GlassCard>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, i) => (
                        <SkillTag key={skill} name={skill} delay={i * 0.03} />
                    ))}
                </div>
            </div>
        </section>
    );
}
