import { motion } from 'motion/react';

interface ConfettiProps {
  isVisible: boolean;
}

export function Confetti({ isVisible }: ConfettiProps) {
  if (!isVisible) return null;

  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#ff9ff3', '#54a0ff'][
      Math.floor(Math.random() * 6)
    ],
    size: 8 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-25 overflow-hidden">
      {confetti.map((conf) => (
        <motion.div
          key={conf.id}
          className="absolute"
          style={{
            left: conf.left,
            top: '-10%',
            width: `${conf.size}px`,
            height: `${conf.size}px`,
            backgroundColor: conf.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: '120vh',
            rotate: 720,
            opacity: 0,
          }}
          transition={{
            duration: conf.duration,
            delay: conf.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}