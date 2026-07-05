import React from 'react';
import { getTeamMembers } from '../../services/team';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import Image from 'next/image';

export default async function Team() {
    try {
        const teamData = await getTeamMembers();

        if (!teamData || teamData.length === 0) {
            return null;
        }

        // Sort data by order
        const sortedTeam = [...teamData].sort((a, b) => a.sort_order - b.sort_order);

        return (
            <section id="team" className="py-12 lg:py-16 bg-transparent border-t border-light-border/20 dark:border-dark-border/20">
                <AnimatedSection className="max-w-7xl mx-auto px-5 lg:px-8">
                    <SectionHeader title="Meet Our Team" subtitle="The passionate people behind our success" />
                    
                    {/* Modern Rectangular Photo Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mt-10">
                        {sortedTeam.map((member) => {
                            const photoSrc = member.photo || '/images/team_default.png';
                            return (
                                <div key={member.id} className="group flex flex-col bg-transparent">
                                    {/* 4:5 Aspect Ratio Rectangular Portrait */}
                                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-soft mb-6 border border-light-border/30 dark:border-dark-border/30 bg-light-surfaceMuted dark:bg-dark-surfaceMuted">
                                        <div className="absolute inset-0 bg-brand-wood/5 group-hover:bg-brand-wood/0 transition-colors duration-500 z-10 mix-blend-overlay" />
                                        <Image 
                                            src={photoSrc} 
                                            alt={`${member.name} - ${member.role}`} 
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                                        />
                                    </div>
                                    
                                    {/* Text Info */}
                                    <div className="space-y-3">
                                        <h3 className="heading-md">
                                            {member.name}
                                        </h3>
                                        <p className="eyebrow">
                                            {member.role}
                                        </p>
                                        <p className="caption line-clamp-3">
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Social Links Indicator */}
                                    <div className="flex gap-4 mt-4 pt-3 border-t border-light-border/20 dark:border-dark-border/20">
                                        {member.linkedin_url && (
                                            <a 
                                                href={member.linkedin_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-xs font-bold text-light-textMuted dark:text-dark-textMuted hover:text-brand-wood transition-colors"
                                            >
                                                LINKEDIN
                                            </a>
                                        )}
                                        {member.twitter_url && (
                                            <a 
                                                href={member.twitter_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-xs font-bold text-light-textMuted dark:text-dark-textMuted hover:text-brand-wood transition-colors"
                                            >
                                                TWITTER
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </section>
        );
    } catch {
        return <div className="p-8 text-center text-red-500">Failed to load Team section</div>;
    }
}
