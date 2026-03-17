"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "@/components/ui";

const timelineData = [
    {
        date: "2024 — Present",
        title: "Senior Web3 Developer & Advisor",
        company: "Freelance / Multiple Protocols",
        achievements: [
            "Advising 3 early-stage DeFi protocols on smart contract architecture",
            "Leading development of a cross-chain bridge MVP",
            "Speaking at Web3 conferences and hosting weekly AMAs",
        ],
    },
    {
        date: "2023 — 2024",
        title: "Full-Stack DApp Developer",
        company: "NexusSwap",
        achievements: [
            "Built AMM DEX frontend and smart contract infrastructure from scratch",
            "Optimized gas costs by 40% through batch trade execution",
            "Integrated multi-chain liquidity aggregation system",
        ],
    },
    {
        date: "2022 — 2023",
        title: "Growth & Partnership Manager",
        company: "MetaDAO Collective",
        achievements: [
            "Scaled Discord community from 500 to 15,000+ members",
            "Secured 6 cross-ecosystem partnership deals",
            "Designed and launched global ambassador program",
        ],
    },
    {
        date: "2021 — 2022",
        title: "Smart Contract Developer",
        company: "ChainVault Protocol",
        achievements: [
            "Developed yield aggregation smart contracts handling $2M+ TVL",
            "Implemented ERC-4626 vault standard for composability",
            "Coordinated audit process with two security firms",
        ],
    },
    {
        date: "2020 — 2021",
        title: "Web Developer & Crypto Enthusiast",
        company: "Self-taught → First Web3 Projects",
        achievements: [
            "Transitioned from Web2 to Web3 development",
            "Built first Solidity projects and contributed to open-source DeFi",
            "Started writing Web3 educational content and tutorials",
        ],
    },
];

export default function Timeline() {
    return (
        <section id="experience" className="section-padding relative">
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    title="Experience & Timeline"
                    subtitle="My journey through the Web3 ecosystem."
                />

                <div className="relative">
                    {/* Timeline line */}
                    <div className="timeline-line hidden md:block" />
                    <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-secondary)] to-transparent" />

                    <div className="space-y-12">
                        {timelineData.map((item, i) => (
                            <TimelineItem key={item.date} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({
    item,
    index,
}: {
    item: (typeof timelineData)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"} pl-12 md:pl-0`}
        >
            {/* Node dot */}
            <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(0,240,255,0.5)] z-10 top-6" />

            {/* Card */}
            <div className={`glass-card p-6 md:w-[45%] ${isLeft ? "" : ""}`}>
                <span className="text-xs font-medium text-[var(--color-accent)] mb-2 block">
                    {item.date}
                </span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mb-1">
                    {item.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-3">{item.company}</p>
                <ul className="space-y-1.5">
                    {item.achievements.map((ach) => (
                        <li key={ach} className="text-[var(--color-text-secondary)] text-sm flex gap-2">
                            <span className="text-[var(--color-accent)] mt-1">▹</span>
                            {ach}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
