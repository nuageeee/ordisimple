"use client";

import { useEffect, useRef, useMemo } from 'react';
import { animate } from 'animejs';

interface BubbleProps {
    count?: number;
}

interface BubbleConfig {
    size: number;
    left: number;
    top: number;
    translateX: number;
    translateY: number;
    delay: number;
    duration: number;
}

export default function FloatingBubbles({ count = 15 }: BubbleProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationsRef = useRef<ReturnType<typeof animate>[]>([]);

    // Mémoiser les configurations pour éviter de les recalculer
    const bubbleConfigs = useMemo<BubbleConfig[]>(
        () =>
            Array.from({ length: count }, () => ({
                size: Math.random() * 80 + 40,
                left: Math.random() * 100,
                top: Math.random() * 100,
                translateX: Math.random() * 100 - 50,
                translateY: Math.random() * 100 - 50,
                delay: Math.random() * 1000,
                duration: Math.random() * 2000 + 3000,
            })),
        [count]
    );

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const fragment = document.createDocumentFragment();

        // Créer toutes les bulles dans un fragment pour une seule insertion DOM
        const bubbles = bubbleConfigs.map((config) => {
            const bubble = document.createElement('div');
            bubble.className = 'absolute rounded-full bg-blue-400/40 backdrop-blur-sm shadow-lg';
            bubble.style.cssText = `
                width: ${config.size}px;
                height: ${config.size}px;
                left: ${config.left}%;
                top: ${config.top}%;
                will-change: transform;
            `;
            fragment.appendChild(bubble);
            return bubble;
        });

        container.appendChild(fragment);

        // Créer les animations (une par bulle au lieu de trois)
        animationsRef.current = bubbles.map((bubble, index) => {
            const config = bubbleConfigs[index];
            
            return animate(bubble, {
                translateX: [0, config.translateX, 0, -config.translateX, 0],
                translateY: [0, config.translateY, 0, -config.translateY, 0],
                scale: [1, 1.05, 1, 0.95, 1],
                duration: config.duration * 2.5,
                delay: config.delay,
                loop: true,
                easing: 'cubicBezier(.5, .05, .1, .3)',
            });
        });

        return () => {
            // Nettoyer proprement les animations
            animationsRef.current.forEach(anim => {
                if (anim && typeof anim.pause === 'function') {
                    anim.pause();
                }
            });
            animationsRef.current = [];
            
            // Supprimer toutes les bulles en une fois
            bubbles.forEach(bubble => bubble.remove());
        };
    }, [bubbleConfigs]);

    return (
        <div 
            ref={containerRef} 
            className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
            aria-hidden="true"
        />
    );
}