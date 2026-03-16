import { motion } from 'motion/react';

interface FlowersProps {
  isVisible: boolean;
}

export function Flowers({ isVisible }: FlowersProps) {
  if (!isVisible) return null;

  const flowers = [
    { emoji: '🌹', position: { top: '10%', left: '5%' }, rotate: -15, delay: 0 },
    { emoji: '🌺', position: { top: '20%', right: '8%' }, rotate: 20, delay: 0.1 },
    { emoji: '🌷', position: { bottom: '15%', left: '10%' }, rotate: 10, delay: 0.2 },
    { emoji: '🌸', position: { bottom: '25%', right: '12%' }, rotate: -12, delay: 0.3 },
    { emoji: '🌹', position: { top: '45%', left: '3%' }, rotate: 25, delay: 0.15 },
    { emoji: '🌺', position: { top: '55%', right: '5%' }, rotate: -20, delay: 0.25 },
    { emoji: '💐', position: { top: '75%', left: '8%' }, rotate: 15, delay: 0.35 },
    { emoji: '🌻', position: { top: '85%', right: '10%' }, rotate: -10, delay: 0.4 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-25">
      {flowers.map((flower, index) => (
        <motion.div
          key={index}
          className="absolute text-5xl"
          style={flower.position}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{
            scale: 1,
            rotate: flower.rotate,
            opacity: 0.9,
          }}
          transition={{
            duration: 0.8,
            delay: flower.delay,
            type: "spring",
            damping: 10,
          }}
        >
          {flower.emoji}
        </motion.div>
      ))}
    </div>
  );
}