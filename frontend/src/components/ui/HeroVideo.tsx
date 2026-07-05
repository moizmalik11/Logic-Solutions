'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroVideo({ videoUrl, posterUrl }: { videoUrl?: string, posterUrl?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Lazy-load the video source after component mounts (prioritize DB URL)
        video.src = videoUrl || '/hero_video.mp4';
        video.load();

        const handleCanPlay = () => {
            video.play().catch(() => {
                // Autoplay blocked — still show video, muted autoplay should work
            });
        };

        const handlePlaying = () => {
            setVideoLoaded(true);
        };

        const handleError = () => {
            setVideoError(true);
        };

        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('playing', handlePlaying);
        video.addEventListener('error', handleError);

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('playing', handlePlaying);
            video.removeEventListener('error', handleError);
        };
    }, [videoUrl]);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Poster / Thumbnail — shown while video loads */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                {posterUrl ? (
                    <Image
                        src={posterUrl}
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-black" />
                )}
            </div>

            {/* Video — fades in once playing */}
            {!videoError && (
                <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="none" // Don't preload — we control loading manually
                />
            )}

            {/* Dark overlay — tones down video so text stays readable */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
        </div>
    );
}
