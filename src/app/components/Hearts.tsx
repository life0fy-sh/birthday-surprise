import { motion } from 'motion/react';

interface HeartsProps {
  isVisible: boolean;
}

export function Hearts({ isVisible }: HeartsProps) {
  if (!isVisible) return null;

  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.5,
    duration: 1 + Math.random() * 1,
    scale: 0.5 + Math.random() * 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-red-500"
          style={{
            left: heart.left,
            top: '50%',
            fontSize: `${heart.scale * 2}rem`,
          }}
          initial={{ y: 0, opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            y: -300,
            opacity: 0,
            scale: 0,
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}