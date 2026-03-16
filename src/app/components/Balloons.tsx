import { motion } from 'framer-motion';


interface BalloonsProps {
  isVisible: boolean;
}

export function Balloons({ isVisible }: BalloonsProps) {
  if (!isVisible) return null;

  const balloons = [
    { color: '🎈', delay: 0, left: '10%' },
    { color: '🎈', delay: 0.2, left: '25%' },
    { color: '🎈', delay: 0.4, left: '40%' },
    { color: '🎈', delay: 0.1, left: '55%' },
    { color: '🎈', delay: 0.3, left: '70%' },
    { color: '🎈', delay: 0.5, left: '85%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-25 overflow-hidden">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl"
          style={{ left: balloon.left }}
          initial={{ y: '120vh', rotate: 0, x: 0 }}
          animate={{
            y: '-20vh',
          }}
          transition={{
            duration: 4,
            delay: balloon.delay,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              x: [0, 20, -20, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {balloon.color}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}