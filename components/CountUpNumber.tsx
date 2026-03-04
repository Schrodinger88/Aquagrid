"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}

export default function CountUpNumber({
    end,
    duration = 2000,
    prefix = "",
    suffix = "",
    decimals = 0,
    className = "",
}: CountUpNumberProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const currentRef = countRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // If it becomes intersecting, or if it's already visible but missed the event
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin: "50px" } // trigger slightly before it enters screen
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        // Failsafe: if intersection observer fails to fire on some mobile browsers, 
        // trigger animation after 1 second anyway to ensure it's not stuck at 0.
        const fallbackTimer = setTimeout(() => {
            if (!hasAnimated.current) {
                setIsVisible(true);
                hasAnimated.current = true;
            }
        }, 1500);

        return () => {
            if (currentRef) observer.disconnect();
            clearTimeout(fallbackTimer);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: ReturnType<typeof requestAnimationFrame>;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percentage = Math.min(progress / duration, 1);

            // Ease out expo for a very premium snap and slow finish
            const easeOutExpo = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            const currentCount = easeOutExpo * end;
            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, end, duration]);

    const formattedCount = Number(count.toFixed(decimals)).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });

    return (
        <span ref={countRef} className={className}>
            {prefix}{formattedCount}{suffix}
        </span>
    );
}
