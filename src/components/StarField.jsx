import { useEffect, useRef, useCallback } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const lastShootingStarTime = useRef(0);
  const lastResize = useRef(0);

  // Memoized star initialization
  const initStars = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const numStars = Math.floor((canvas.width * canvas.height) / 8000);
    starsRef.current = [];
    for (let i = 0; i < numStars; i++) {
      starsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.1,
        driftY: (Math.random() - 0.5) * 0.1,
      });
    }
  }, []);

  // Throttle resize to avoid performance issues
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  }, [initStars]);

  // Memoized shooting star creation
  const createShootingStar = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const side = Math.floor(Math.random() * 4);
    let startX, startY, endX, endY;
    switch (side) {
      case 0:
        startX = Math.random() * canvas.width;
        startY = -50;
        endX = startX + (Math.random() - 0.5) * canvas.width * 0.8;
        endY = canvas.height + 50;
        break;
      case 1:
        startX = canvas.width + 50;
        startY = Math.random() * canvas.height;
        endX = -50;
        endY = startY + (Math.random() - 0.5) * canvas.height * 0.8;
        break;
      case 2:
        startX = Math.random() * canvas.width;
        startY = canvas.height + 50;
        endX = startX + (Math.random() - 0.5) * canvas.width * 0.8;
        endY = -50;
        break;
      case 3:
        startX = -50;
        startY = Math.random() * canvas.height;
        endX = canvas.width + 50;
        endY = startY + (Math.random() - 0.5) * canvas.height * 0.8;
        break;
      default:
        return;
    }
    const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    const speed = Math.random() * 3 + 2;
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
      hue: Math.random() * 60 + 180,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Animation loop
    const animate = (currentTime) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Shooting star timing (every 3-8s, throttled)
      if (
        currentTime - lastShootingStarTime.current > 3000 + Math.random() * 5000 &&
        shootingStarsRef.current.length < 2 // limit concurrent shooting stars
      ) {
        createShootingStar();
        lastShootingStarTime.current = currentTime;
      }
      // Shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter((shootingStar) => {
        shootingStar.progress += 1 / (shootingStar.duration * 60);
        if (shootingStar.progress >= 1) return false;
        const easeOut = 1 - Math.pow(1 - shootingStar.progress, 3);
        shootingStar.currentX = shootingStar.startX + (shootingStar.endX - shootingStar.startX) * easeOut;
        shootingStar.currentY = shootingStar.startY + (shootingStar.endY - shootingStar.startY) * easeOut;
        // Draw trail
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
        // Draw head
        ctx.fillStyle = `hsla(${shootingStar.hue}, 70%, 90%, ${alpha})`;
        ctx.shadowBlur = shootingStar.size * 3;
        ctx.shadowColor = `hsl(${shootingStar.hue}, 70%, 70%)`;
        ctx.beginPath();
        ctx.arc(shootingStar.currentX, shootingStar.currentY, shootingStar.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return true;
      });
      // Stars
      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = '#60a5fa';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    animate();
    window.addEventListener('resize', () => {
      // Throttle resize events
      const now = Date.now();
      if (now - lastResize.current > 200) {
        resizeCanvas();
        lastResize.current = now;
      }
    });
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [resizeCanvas, createShootingStar, initStars]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1, background: 'transparent' }}
      aria-hidden="true"
    />
  );
};

export default StarField;
