import React, { useEffect, useRef } from 'react';

const ShakaPlayer: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const loadVideo = async () => {
            if (videoRef.current) {
                const shaka = await import('shaka-player');
                const player = new shaka.Player(videoRef.current);
                player.load(videoSrc).catch((error) => {
                    console.error('Error loading video:', error);
                });
            }
        };
        loadVideo();
    }, [videoSrc]);

    return <video ref={videoRef} controls style={{ width: '100%' }} />;
};

export default ShakaPlayer;
