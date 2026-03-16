import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoBurstProps {
  photos: string[];
  isVisible: boolean;
  isFaded: boolean;
}

export function PhotoBurst({ photos, isVisible, isFaded }: PhotoBurstProps) {
  // This calculates a clear grid position for every photo
  const scatteredPositions = useMemo(() => {
    const totalPhotos = photos.length;
    // Calculate how many rows and columns we need (e.g., 5x5 for 25 photos)
    const columns = Math.ceil(Math.sqrt(totalPhotos));
    const rows = Math.ceil(totalPhotos / columns);

    return photos.map((_, i) => {
      const row = Math.floor(i / columns);
      const col = i % columns;

      // Position photos in a grid from -40% to 40% of the screen
      // This ensures they stay away from each other
      const x = ((col / (columns - 1)) - 0.5) * 85; 
      const y = ((row / (rows - 1)) - 0.5) * 85;

      return {
        x: `${x}vw`,
        y: `${y}vh`,
        rotate: (Math.random() - 0.5) * 15, // Small tilt for the "photo" look
        scale: 0.85, // Slightly smaller so they don't touch
      };
    });
  }, [photos.length]);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {isVisible && photos.map((photo, index) => {
          const pos = scatteredPositions[index];
          
          return (
            <motion.div
              key={photo + index}
              className="absolute w-40 h-52 md:w-48 md:h-64 rounded-sm shadow-xl border-[6px] border-white bg-white"
              initial={{ scale: 0, opacity: 0, y: 100 }} // Starts from bottom
              animate={{
                x: pos.x,
                y: pos.y,
                rotate: pos.rotate,
                scale: isFaded ? pos.scale * 0.8 : pos.scale,
                opacity: isFaded ? 0.2 : 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 50, // Slower, smoother movement
                delay: index * 0.15, // Longer delay so you can see each one arrive
              }}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}