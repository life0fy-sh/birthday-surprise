import { motion } from 'motion/react';

interface FinalPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export function FinalPopup({ isVisible, onClose }: FinalPopupProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-12 max-w-md mx-4 text-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8, damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="text-7xl mb-6"
          animate={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
        <h2 className="text-4xl mb-4">I hope you liked it!</h2>
        <p className="text-xl text-gray-600 mb-6">
          Wishing you all the happiness in the world 🎂
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg hover:shadow-lg transition-shadow"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}