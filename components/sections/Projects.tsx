"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "@/components/ui";

// Add your project logos to public/projects/ — use image: "/projects/your-logo.png" or leave image undefined for initials
const projects = [
    {
        name: "Ironchain lab",
        role: "Collaborations manager ",
        description: "Decentralized yield aggregator protocol on BNB Chain",
        color: "#00f0ff",
        initials: "IL",
        image: "/projects/IMG_5425.jpg",
        accomplishments: [
            "sinked collaborations with 5 projects in less than 1 month leading to the advancement of there platform",
            "Api integrations with major projects",
            "Integrated multi-chain collaborations",
        ],
        link: "#",
    },
    {
        name: "Woof Hype",
        role: "Current Growth & Partnerships Lead",
        description: "Cross-chain DAO governance and treasury platform",
        color: "#7b61ff",
        initials: "WH",
        image: "/projects/IMG_7735.jpg",
        accomplishments: [
            "Grew community from 500 to 15,000+ members in less than 1 month",
            "Secured 6 ecosystem partnerships",
            "Launched ambassador program across 3 continents",
            "Launched a new NFT collection",
        ],
        link: "#",
    },
    {
        name: "NexusSwap DEX",
        role: "Full-Stack Developer & Advisor",
        description: "AMM DEX with concentrated liquidity on Arbitrum",
        color: "#00ff88",
        initials: "NS",
        image: "/projects/nexusswap.svg",
        accomplishments: [
            "Developed core swap engine and liquidity pools",
            "Optimized gas costs by 40% through batch operations",
            "Advised on tokenomics and liquidity incentive design",
        ],
        link: "#",
    },
    {
        name: "CryptoCanvas NFTs",
        role: "Technical Co-Founder",
        description: "Generative art NFT platform with on-chain metadata",
        color: "#ff6b6b",
        initials: "CC",
        image: "/projects/cryptocanvas.svg",
        accomplishments: [
            "Built ERC-721 smart contracts with on-chain SVG rendering",
            "Sold out 5,000 NFT collection in 12 minutes",
            "Implemented royalty distribution system for artists",
        ],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                <SectionTitle
                    title="Projects I've Worked With"
                    subtitle="A track record of meaningful contributions across Web3."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-card overflow-hidden cursor-pointer"
        >
            {/* Logo area */}
            <div className="p-8 flex flex-col items-center text-center">
                <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                        border: `1px solid ${project.color}40`,
                    }}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-contain p-2"
                            sizes="80px"
                        />
                    ) : (
                        <span className="text-2xl font-[family-name:var(--font-display)] font-bold" style={{ color: project.color }}>
                            {project.initials}
                        </span>
                    )}
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mb-1">
                    {project.name}
                </h3>
                <p className="text-[var(--color-text-muted)] text-xs mb-2">{project.role}</p>
                <p className="text-[var(--color-text-secondary)] text-sm">{project.description}</p>
            </div>

            {/* Hover reveal */}
            <div className="absolute inset-0 bg-[var(--color-bg-primary)]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center p-6">
                <h4 className="font-[family-name:var(--font-display)] font-bold mb-3" style={{ color: project.color }}>
                    {project.name}
                </h4>
                <p className="text-[var(--color-text-muted)] text-xs mb-3">{project.role}</p>
                <ul className="space-y-2 mb-4">
                    {project.accomplishments.map((acc) => (
                        <li key={acc} className="text-[var(--color-text-secondary)] text-xs flex gap-2">
                            <span style={{ color: project.color }}>▹</span>
                            {acc}
                        </li>
                    ))}
                </ul>
                <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-xs font-medium hover:gap-2.5 transition-all"
                    style={{ color: project.color }}
                >
                    View Project
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}
