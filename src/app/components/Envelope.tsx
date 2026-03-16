import { motion } from 'motion/react';
import { Bell } from 'lucide-react';

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

export function Envelope({ isOpen, onClick }: EnvelopeProps) {
  return (
    <motion.div
      className="relative cursor-pointer"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Notification Badge */}
      {!isOpen && (
        <motion.div
          className="absolute -top-2 -right-2 z-10 bg-red-500 rounded-full p-2 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <Bell className="w-5 h-5 text-white" />
        </motion.div>
      )}

      {/* Envelope Body */}
      <motion.div
        className="relative w-80 h-56"
        animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg shadow-2xl" />
        
        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-200 to-pink-300 origin-top"
          style={{
            clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
            transformOrigin: 'top center',
          }}
          animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Envelope Front Triangle */}
        <div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-300 to-pink-400"
          style={{
            clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
          }}
        />

        {/* Sealed Heart */}
        {!isOpen && (
          <motion.div
            className="absolute top-12 left-1/2 -translate-x-1/2 text-red-500 text-4xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            ❤️
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
