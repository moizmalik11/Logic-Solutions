import React from 'react';
import { getTeamMembers } from '../../services/team';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import Image from 'next/image';

export default async function Team() {
    try {
        const teamData = await getTeamMembers();

        if (!teamData || teamData.length === 0) {
            return null;
        }

        return (
            <section id="team" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
                <AnimatedSection className="max-w-7xl mx-auto">
                    <SectionHeader title="Meet Our Team" subtitle="The passionate people behind our success" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamData.map((member) => (
                            <Card key={member.id} className="text-center flex flex-col items-center p-6">
                                {member.photo ? (
                                    <Image 
                                        src={member.photo} 
                                        alt={`${member.name} - ${member.role}`} 
                                        width={128}
                                        height={128}
                                        className="w-32 h-32 rounded-full object-cover mb-4" 
                                    />
                                ) : (
                                    <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-gray-500 mb-4">
                                        {member.name.charAt(0)}
                                    </div>
                                )}
                                
                                <h3 className="text-xl font-bold mb-1 dark:text-white">{member.name}</h3>
                                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                                
                                {member.bio && <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>}
                                
                                <div className="flex space-x-4 mt-auto">
                                    {member.linkedin_url && (
                                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-400">
                                            LinkedIn
                                        </a>
                                    )}
                                    {member.twitter_url && (
                                        <a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                                            Twitter
                                        </a>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
        );
    } catch (error) {
        return <div className="p-8 text-center text-red-500">Failed to load Team section</div>;
    }
}
