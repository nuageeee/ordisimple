"use client";

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface BubbleProps {
    count?: number;
}

export default function FloatingBubbles({ count = 15 }: BubbleProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Créer les bulles
        const bubbles = Array.from({ length: count }, (_, i) => {
            const bubble = document.createElement('div');
            bubble.className = 'absolute rounded-full bg-blue-400/40 backdrop-blur-sm shadow-lg';
            const size = Math.random() * 80 + 40; // Taille entre 40px et 120px
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.top = `${Math.random() * 100}%`;
            containerRef.current?.appendChild(bubble);
            return bubble;
        });

        // Animer chaque bulle
        bubbles.forEach((bubble) => {
            const translateX = Math.random() * 100 - 50;
            const translateY = Math.random() * 100 - 50;
            const delay = Math.random() * 1000;
            const duration = Math.random() * 2000 + 3000;

            // Animation de translation X
            animate(bubble, {
                translateX: [0, translateX, 0, -translateX, 0],
                duration: duration * 2.5,
                delay: delay,
                loop: true,
                easing: 'cubicBezier(.5, .05, .1, .3)',
            });

            // Animation de translation Y
            animate(bubble, {
                translateY: [0, translateY, 0, -translateY, 0],
                duration: duration * 2.5, // Durée légèrement différente pour un effet plus naturel
                delay: delay,
                loop: true,
                easing: 'cubicBezier(.5, .05, .1, .3)',
            });

            // Animation d'échelle
            animate(bubble, {
                scale: [1, 1.05, 1, 0.95, 1],
                duration: duration * 1.5,
                delay: delay,
                loop: true,
                easing: 'cubicBezier(.5, .05, .1, .3)',
            });
        });

        return () => {
            bubbles.forEach(bubble => bubble.remove());
        };
    }, [count]);

    return (
        <div 
            ref={containerRef} 
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
}