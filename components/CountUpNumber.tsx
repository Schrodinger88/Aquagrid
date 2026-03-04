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
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = countRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Calculate progress percentage (0 to 1)
            const percentage = Math.min(progress / duration, 1);

            // Ease out cubic easing
            const easeOutCubic = 1 - Math.pow(1 - percentage, 3);

            const currentCount = easeOutCubic * end;
            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure exact final value
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [isVisible, end, duration]);

    // Format the number with commas (e.g., 6500 -> 6,500)
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
