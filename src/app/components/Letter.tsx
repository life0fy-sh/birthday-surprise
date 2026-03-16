import { motion } from 'framer-motion';

interface LetterProps {
  isVisible: boolean;
  isOpen: boolean;
  onClick: () => void;
  message: string;
}

export function Letter({ isVisible, isOpen, onClick, message }: LetterProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-20 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-amber-50 to-yellow-100 shadow-2xl"
        initial={{ width: 80, height: 100, scale: 0.5 }}
        animate={
          isOpen
            ? { width: 600, height: 700, scale: 1 }
            : { width: 80, height: 100, scale: 0.8 }
        }
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          borderRadius: '8px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Folded Letter Effect */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-amber-800 opacity-20" />
          </div>
        )}

        {/* Letter Content */}
        {isOpen && (
          <motion.div
            className="p-12 overflow-auto h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-5xl mb-4">🎉Happy Birthday!🎉</h1>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-800 whitespace-pre-line">
                {message}
              </p>
            </div>
            <div className="text-center mt-8">
              <p className="text-2xl">With love and best wishes 💗</p>
            </div>
          </motion.div>
        )}

        {/* Paper Texture */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\' /%3E%3C/svg%3E")',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
