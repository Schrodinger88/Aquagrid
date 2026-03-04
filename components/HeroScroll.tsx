"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Sprout } from "lucide-react";

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
            const diff = targetProgress - currentProgress;

            if (Math.abs(diff) > 0.0001) {
                currentProgress += diff * 0.1;
            } else {
                currentProgress = targetProgress;
            }

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
                // Apply a soft light filter to blending the footage with the new palette
                // Note: We can't do complex CSS filters inside drawImage easily, so we handle it on the canvas element CSS or global compositing
                ctx.globalAlpha = 1;
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
                    translateY = -30 * fadeProgress; // Gentle float up
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

            let progress = scrollDist / maxScroll;
            progress = Math.max(0, Math.min(1, progress));
            targetProgress = progress;
        };

        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                onScroll();
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", onScroll);

        handleResize();
        render();

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
            className="relative bg-sandstone"
        >
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover opacity-90 sepia-[.2] contrast-[0.9] brightness-[1.1]"
                />

                {/* Soft Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-sandstone/30 via-transparent to-sandstone/80 pointer-events-none"></div>

                {/* Loading Indicator */}
                {percentLoaded < 100 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-sandstone z-50 transition-opacity duration-1000">
                        <div className="flex flex-col items-center gap-6">
                            <div className="relative w-16 h-16">
                                <Sprout className="w-16 h-16 text-seafoam-teal animate-bounce" />
                            </div>
                            <div className="text-deep-kelp font-serif text-xl italic tracking-wider">
                                Growing... {percentLoaded}%
                            </div>
                        </div>
                    </div>
                )}

                {/* Parallax Overlay Content */}
                <div ref={textRef} className="absolute inset-0 flex items-center justify-center z-10 will-change-transform">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-mist-blue/30 shadow-sm animate-float-slow">
                            <Sprout className="w-5 h-5 text-seafoam-teal" />
                            <span className="text-deep-kelp font-serif tracking-wide text-sm">Cultivating Balance</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl mb-8 font-serif font-bold text-deep-kelp leading-tight">
                            Heal the Ocean, <br />
                            <span className="italic text-seafoam-teal">Naturally.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-driftwood mb-12 leading-relaxed max-w-2xl mx-auto font-sans font-light bg-white/40 p-6 rounded-2xl backdrop-blur-sm">
                            We farm <span className="text-deep-kelp font-semibold">Resilient Kelp</span> to restore marine ecosystems and support coastal communities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="#mission" className="btn-nature-primary text-lg">
                                Our Mission
                            </a>
                            <a href="#impact" className="btn-nature-secondary text-lg group">
                                View Impact
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator at bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex flex-col items-center gap-3 opacity-60">
                        <span className="text-xs uppercase tracking-[0.2em] text-deep-kelp font-sans">Scroll to Explore</span>
                        <div className="w-[1px] h-16 bg-deep-kelp/30"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
