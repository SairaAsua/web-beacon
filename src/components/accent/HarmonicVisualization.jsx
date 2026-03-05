
import React, { useRef, useEffect } from 'react';

const HarmonicVisualization = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let time = 0;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener('resize', resize);

        // More intense — higher alpha, thicker strokes
        const harmonics = [
            { ratio: 1, color: 'rgba(107, 80, 160, 0.40)', amplitude: 65, speed: 0.28, phase: 0 },
            { ratio: 2, color: 'rgba(107, 80, 160, 0.30)', amplitude: 48, speed: 0.28, phase: 0.5 },
            { ratio: 1.5, color: 'rgba(107, 80, 160, 0.22)', amplitude: 38, speed: 0.28, phase: 1.0 },
            { ratio: 1.25, color: 'rgba(155, 132, 196, 0.18)', amplitude: 30, speed: 0.28, phase: 1.5 },
            { ratio: 1.333, color: 'rgba(184, 168, 218, 0.14)', amplitude: 22, speed: 0.28, phase: 2.0 },
        ];

        const draw = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            ctx.clearRect(0, 0, w, h);

            const breathe = 0.75 + 0.25 * Math.sin(time * 0.12);

            harmonics.forEach((harmonic, idx) => {
                ctx.beginPath();
                ctx.strokeStyle = harmonic.color;
                ctx.lineWidth = idx === 0 ? 2 : idx === 1 ? 1.5 : 1.2;

                const centerY = h * 0.5;
                const wavelength = w / (1.5 * harmonic.ratio);

                for (let x = 0; x <= w; x += 3) {
                    const wave = Math.sin((x / wavelength) * Math.PI * 2 + time * harmonic.speed + harmonic.phase);
                    const mod = Math.sin((x / (w * 0.8)) * Math.PI * 2 + time * 0.07) * 0.25;
                    const y = centerY + (wave + mod) * harmonic.amplitude * breathe;
                    if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                }
                ctx.stroke();
            });

            // Interference glow nodes — brighter
            for (let x = 0; x < w; x += 60) {
                let sumY = 0;
                harmonics.forEach((harm) => {
                    const wavelength = w / (1.5 * harm.ratio);
                    sumY += Math.sin((x / wavelength) * Math.PI * 2 + time * harm.speed + harm.phase) * harm.amplitude * breathe;
                });
                const intensity = Math.abs(sumY) / (65 * harmonics.length);
                if (intensity > 0.15) {
                    const radius = 24 + intensity * 36;
                    const nodeY = h * 0.5 + sumY / harmonics.length;
                    const g = ctx.createRadialGradient(x, nodeY, 0, x, nodeY, radius);
                    g.addColorStop(0, `rgba(107, 80, 160, ${intensity * 0.18})`);
                    g.addColorStop(1, 'rgba(107, 80, 160, 0)');
                    ctx.beginPath();
                    ctx.fillStyle = g;
                    ctx.arc(x, nodeY, radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            time += 0.016;
            animationRef.current = requestAnimationFrame(draw);
        };

        animationRef.current = requestAnimationFrame(draw);
        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default HarmonicVisualization;
