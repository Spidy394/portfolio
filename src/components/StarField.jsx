import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const lastShootingStarTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Minimal density
      starsRef.current = [];

      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5, // Very small stars (0.5-2px)
          opacity: Math.random() * 0.8 + 0.2, // Subtle opacity
          twinkleSpeed: Math.random() * 0.02 + 0.005, // Slow twinkling
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.1, // Very slow drift
          driftY: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    // Create shooting star
    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, endX, endY;

      switch (side) {
        case 0: // From top
          startX = Math.random() * canvas.width;
          startY = -50;
          endX = startX + (Math.random() - 0.5) * canvas.width * 0.8;
          endY = canvas.height + 50;
          break;
        case 1: // From right
          startX = canvas.width + 50;
          startY = Math.random() * canvas.height;
          endX = -50;
          endY = startY + (Math.random() - 0.5) * canvas.height * 0.8;
          break;
        case 2: // From bottom
          startX = Math.random() * canvas.width;
          startY = canvas.height + 50;
          endX = startX + (Math.random() - 0.5) * canvas.width * 0.8;
          endY = -50;
          break;
        case 3: // From left
          startX = -50;
          startY = Math.random() * canvas.height;
          endX = canvas.width + 50;
          endY = startY + (Math.random() - 0.5) * canvas.height * 0.8;
          break;
      }

      const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
      const speed = Math.random() * 3 + 2; // Speed between 2-5
      const duration = distance / speed;

      shootingStarsRef.current.push({
        startX,
        startY,
        endX,
        endY,
        currentX: startX,
        currentY: startY,
        progress: 0,
        duration,
        speed,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        tailLength: Math.random() * 30 + 20,
        hue: Math.random() * 60 + 180, // Blue to cyan range
      });
    };

    // Animate stars
    const animate = (currentTime) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create shooting stars occasionally (every 3-8 seconds)
      if (currentTime - lastShootingStarTime.current > Math.random() * 5000 + 3000) {
        createShootingStar();
        lastShootingStarTime.current = currentTime;
      }

      // Update and draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter((shootingStar) => {
        shootingStar.progress += 1 / (shootingStar.duration * 60); // Assuming 60 FPS

        if (shootingStar.progress >= 1) {
          return false; // Remove completed shooting star
        }

        // Calculate current position using easing
        const easeOut = 1 - Math.pow(1 - shootingStar.progress, 3);
        shootingStar.currentX = shootingStar.startX + (shootingStar.endX - shootingStar.startX) * easeOut;
        shootingStar.currentY = shootingStar.startY + (shootingStar.endY - shootingStar.startY) * easeOut;

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          shootingStar.currentX,
          shootingStar.currentY,
          shootingStar.currentX - (shootingStar.endX - shootingStar.startX) * 0.1,
          shootingStar.currentY - (shootingStar.endY - shootingStar.startY) * 0.1
        );

        const alpha = shootingStar.opacity * (1 - shootingStar.progress * 0.5);
        gradient.addColorStop(0, `hsla(${shootingStar.hue}, 70%, 80%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${shootingStar.hue}, 70%, 60%, ${alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${shootingStar.hue}, 70%, 40%, 0)`);

        ctx.save();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = shootingStar.size;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(shootingStar.currentX, shootingStar.currentY);
        ctx.lineTo(
          shootingStar.currentX - (shootingStar.endX - shootingStar.startX) * 0.05,
          shootingStar.currentY - (shootingStar.endY - shootingStar.startY) * 0.05
        );
        ctx.stroke();
        
        // Draw bright head
        ctx.fillStyle = `hsla(${shootingStar.hue}, 70%, 90%, ${alpha})`;
        ctx.shadowBlur = shootingStar.size * 3;
        ctx.shadowColor = `hsl(${shootingStar.hue}, 70%, 70%)`;
        ctx.beginPath();
        ctx.arc(shootingStar.currentX, shootingStar.currentY, shootingStar.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      // Update and draw regular stars
      starsRef.current.forEach((star) => {
        // Update twinkling
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

        // Update position (very slow drift)
        star.x += star.driftX;
        star.y += star.driftY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = '#60a5fa'; // Subtle blue glow matching your theme
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 1,
        background: 'transparent'
      }}
      aria-hidden="true"
    />
  );
};

export default StarField;
