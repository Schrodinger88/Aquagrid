"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const FRAME_COUNT = 240;

export default function HeroScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [percentLoaded, setPercentLoaded] = useState(0);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // Pre-fill array
        for (let i = 0; i < FRAME_COUNT; i++) {
            loadedImages.push(null as any);
        }

        const loadImages = async () => {
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `/hero-sequence/ezgif-frame-${paddedIndex}.png`;

                img.onload = () => {
                    loadedImages[i - 1] = img;
                    loadedCount++;
                    setPercentLoaded(Math.round((loadedCount / FRAME_COUNT) * 100));
                };
                img.onerror = () => {
                    // Handle missing frames gracefully-ish
                    console.error(`Failed to load frame ${i}`);
                };
            }
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    // Scroll Sync Logic & Parallax
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let targetProgress = 0;
        let currentProgress = 0;

        const render = () => {
            // Lerp current progress towards target
            // 0.1 factor triggers a smooth "catch up" feel
            const diff = targetProgress - currentProgress;

            // If the difference is very small, snap to target to save calculation, 
            // unless we are continuously scrolling. 
            // However, typical lerp usage just runs. 
            // We can optimize by stopping if abs(diff) < 0.0001

            if (Math.abs(diff) > 0.0001) {
                currentProgress += diff * 0.1;
            } else {
                currentProgress = targetProgress;
            }

            // Calculate Frame Index based on smoothed progress
            const frameIndex = Math.floor(currentProgress * (FRAME_COUNT - 1));
            const img = images[frameIndex];

            // --- Canvas Rendering ---
            if (img && img.complete && img.naturalHeight !== 0) {
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;

                let drawWidth = canvas.width;
                let drawHeight = canvas.height;
                let offsetX = 0;
                let offsetY = 0;

                if (canvasRatio > imgRatio) {
                    drawHeight = canvas.width / imgRatio;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }

            // --- Parallax Text Effect ---
            if (textRef.current) {
                const fadeStart = 0.05;
                const fadeEnd = 0.3;

                let opacity = 1;
                let translateY = 0;

                if (currentProgress > fadeStart) {
                    const fadeProgress = (currentProgress - fadeStart) / (fadeEnd - fadeStart);
                    opacity = 1 - Math.max(0, Math.min(1, fadeProgress));
                    translateY = -50 * fadeProgress;
                }

                textRef.current.style.opacity = opacity.toString();
                textRef.current.style.transform = `translateY(${translateY}px)`;
                textRef.current.style.pointerEvents = opacity <= 0 ? "none" : "auto";
            }

            animationFrameId = requestAnimationFrame(render);
        };

        const onScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const containerHeight = rect.height;
            const windowHeight = window.innerHeight;
            const scrollDist = -rect.top;
            const maxScroll = containerHeight - windowHeight;

            if (maxScroll <= 0) return;

            // Update Target, not Frame directly
            let progress = scrollDist / maxScroll;
            progress = Math.max(0, Math.min(1, progress));
            targetProgress = progress;
        };

        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // Force an immediate re-calc of target
                onScroll();
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", onScroll);

        // Initial setup
        handleResize();
        render(); // Start loop

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [images]);

    return (
        <div
            ref={containerRef}
            style={{ height: "400vh" }}
            className="relative bg-black"
        >
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                {/* Loading Indicator */}
                {percentLoaded < 100 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50 pointer-events-none transition-opacity duration-500">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-ocean-green border-t-transparent rounded-full animate-spin"></div>
                            <div className="text-white/80 font-sans text-sm font-medium tracking-wider uppercase">
                                Loading Experience... {percentLoaded}%
                            </div>
                        </div>
                    </div>
                )}

                {/* Parallax Overlay Content */}
                <div ref={textRef} className="absolute inset-0 flex items-center justify-center z-10 will-change-transform">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl mb-8 text-white font-bold tracking-tight text-heading drop-shadow-2xl">
                                Turning the Tide on <br />
                                <span className="text-gradient">Ocean Acidification</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-100 mb-12 leading-relaxed drop-shadow-lg max-w-2xl font-light">
                                Scalable kelp poop solutions that restore marine ecosystems while creating sustainable revenue for coastal communities.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href="#solution" className="btn-cta inline-flex items-center justify-center gap-3 group">
                                    Get Started
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#impact" className="btn-secondary !text-white !border-white/40 hover:!bg-white hover:!text-deep-ocean-blue backdrop-blur-sm">
                                    View Demo
                                </a>
                                <a href="#contact" className="btn-secondary !text-white !border-white/40 hover:!bg-white hover:!text-deep-ocean-blue backdrop-blur-sm">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator at bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
