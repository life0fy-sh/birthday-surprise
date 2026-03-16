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
    const columns = Math.ceil(Math.sqrt(totalPhotos));
    const rows = Math.ceil(totalPhotos / columns);

    return photos.map((_, i) => {
      const row = Math.floor(i / columns);
      const col = i % columns;

      // REDUCED SPREAD: Changed 85 to 65
      // This keeps the center of the photos within the inner 65% of the screen
      const x = columns > 1 ? ((col / (columns - 1)) - 0.5) * 65 : 0; 
      const y = rows > 1 ? ((row / (rows - 1)) - 0.5) * 65 : 0;

      return {
        x: `${x}vw`,
        y: `${y}vh`,
        rotate: (Math.random() - 0.5) * 15,
        scale: 0.8, // Slightly smaller to prevent edge-clipping
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
              className="absolute w-24 h-32 md:w-40 md:h-52 rounded-sm shadow-xl border-[4px] border-white bg-white"
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