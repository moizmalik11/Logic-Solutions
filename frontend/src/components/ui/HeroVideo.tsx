'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroVideo({ videoUrl, posterUrl }: { videoUrl?: string, posterUrl?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        // Ensure muted is set natively for strict browsers like iOS Safari
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
        }
    }, []);

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
                    src={videoUrl || '/hero_video.mp4'}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="auto"
                    onPlaying={() => setVideoLoaded(true)}
                    onError={() => setVideoError(true)}
                />
            )}

            {/* Dark overlay — tones down video so text stays readable */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
        </div>
    );
}
