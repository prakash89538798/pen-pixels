"use client";

import { motion, Variants } from "framer-motion";

interface TeamMember {
    name: string;
    role: string;
    description: string;
    imageSrc: string;
}

export default function TeamSection() {
    const teamMembers: TeamMember[] = [
        {
            name: "Matteo",
            role: "Founder & Creative Director",
            description: "A tireless purveyor of quality, Matteo manages every branding and communication project down to the details, leading creative teams to always express their best.",
            imageSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Andrea",
            role: "Copywriter & Strategist",
            description: "A creative and analytical thinker, with strong roots in advertising, Andrea crafts concepts, branding and communication strategies that make a difference.",
            imageSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Andrea",
            role: "Producer & Set Designer",
            description: "An expert in designing props and sets at every degree of complexity, from tiny to gargantuan, Andrea gives ideas a shape and volume.",
            imageSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Marco",
            role: "Creative Coder",
            description: "Grown up with programming languages, Marco bends them to the needs of creativity, in order to create impeccable digital experiences.",
            imageSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Parvis",
            role: "Content Coordinator",
            description: "Deeply aware of editorial and social dynamics, Parvis knows how to reach any audience with just the right content.",
            imageSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Tiziano",
            role: "Filmaker & Photographer",
            description: "A perfectionist of light, who developed his expertise in luxury and fashion, Tiziano Mario is equally comfortable with portrait and still life, photography and video.",
            imageSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        }
    ];

    // Elegant reveal on scroll variant
    const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 22,
        },
    },
};

    return (
        <section id="team-section" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
            {/* Background Ambience Subtle Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_80%)] pointer-events-none" />

            {/* Section Header Block */}
            <div className="max-w-4xl mx-auto text-center mb-28 space-y-3 px-6">
                <h2 className="text-2xl sm:text-3xl font-normal tracking-wide text-zinc-100 font-serif">
                    Key People & Contributors
                </h2>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                    From Our Network of Creative Professionals
                </p>
            </div>

            {/* Symmetrical 3-Column Chiaroscuro Portrait Grid */}
            <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
                {teamMembers.map((member, idx) => (
                    <motion.div
                        key={`${member.name}-${idx}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={itemVariants}
                        className="group flex flex-col space-y-6"
                    >
                        {/* Spotlight Portrait Container */}
                        <motion.div
                            className="relative aspect-[4/5] w-full overflow-hidden bg-black rounded-sm border border-white/[0.02] shadow-2xl cursor-pointer"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Back lighting contrast mask */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

                            {/* Profile Portrait with hardware-accelerated studio filter interpolation */}
                            <motion.img
                                src={member.imageSrc}
                                alt={member.name}
                                className="w-full h-full object-cover mix-blend-lighten pointer-events-none"
                                initial={{ filter: "brightness(0.72) contrast(1.15)", scale: 1 }}
                                whileHover={{ filter: "brightness(1.02) contrast(1.05)", scale: 1.02 }}
                                transition={{ duration: 0.45, ease: "easeInOut" }}
                                onError={(e) => {
                                    // Pre-render simulation logic if specific image route asset is offline
                                    (e.target as HTMLElement).style.display = 'none';
                                }}
                            />

                            {/* Edge vignetting mask matching the target blueprint */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 pointer-events-none" />
                        </motion.div>

                        {/* Profile Typography Context Layer */}
                        <div className="space-y-3 text-center md:text-left px-2">
                            <h3 className="text-lg text-white font-serif tracking-wide">
                                {member.name} — <span className="text-zinc-500 font-sans text-xs font-normal tracking-normal block mt-0.5">{member.role}</span>
                            </h3>

                            {/* Fine-print description with color accent update on hover trigger */}
                            <p className="text-[11px] text-zinc-500 font-sans leading-relaxed tracking-wide font-light max-w-sm mx-auto md:mx-0 transition-colors duration-300 group-hover:text-zinc-300">
                                {member.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}