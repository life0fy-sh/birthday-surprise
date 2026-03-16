import { useState } from 'react';
import {useSound} from 'use-sound';
import { motion } from 'framer-motion';
import { Envelope } from './components/Envelope';
import { PhotoBurst } from './components/PhotoBurst';
import { Letter } from './components/Letter';
import { Hearts } from './components/Hearts';
import { Balloons } from './components/Balloons';
import { Confetti } from './components/Confetti';
import { Flowers } from './components/Flowers';
import { FinalPopup } from './components/FinalPopup';

export default function App() {
  const [stage, setStage] = useState(0);
  // Stage 0: Closed envelope
  // Stage 1: Photos burst out and scattered
  // Stage 2: Photos fading, folded letter appears
  // Stage 3: Letter unfolding with hearts
  // Stage 4: Letter open and readable
  // Stage 5: Letter folded back, photos visible again
  // Stage 6: Birthday celebration with balloons, confetti, flowers
  // Stage 7: Final popup

  // Setup the sound - ensure the file name matches exactly what's in your public folder
  const [play, { stop }] = useSound('/birthday music.mp3', { 
    volume: 0.5, 
    interrupt: true,
    loop: true 
  });

 
  const photos = [
    '/phto1.jpg','/phto2.jpg','/phto3.jpg','/phto4.jpg','/phto5.jpg','/phto6.jpg','/phto7.jpg','/phto8.jpg','/phto9.jpg','/phto10.jpg','/phto11.jpg','/phto12.jpg','/phto13.jpg','/phto14.jpg','/phto15.jpg','/phto16.jpg','phto17.jpg','/phto18.jpg','/phto19.jpg','/phto20.jpg','/phto21.jpg','/phto22.jpg','/phto23.jpg','/phto24.jpg','/phto25.jpg'
  ];

  // Edit this message in your code!
  const letterMessage = `Dear Ms. Shedge,

Happy Birthday to the to the prettiest girl in our class and the one who caught my eye at the very first day  . It's kinda creepy but all of this in a good way only , you're really so pretty i can't take my eyes off you .
I'm writting this is english because , hech sagle marathit bolneko maut aati hai 😔🙏🏻
To be honest , I'm kinda guilty for ruining what we had , we were so cool , still are ,but that lustre is lacking , but you still outshine everything in this world and make me forget about it ,when you're around 🌼.
I never believed in love at first sight, but then you walked in , caught my attention , it really seems surreal,Everything. I'm really sad that I will go onto your "guys who thought they had a chance with me " list but hey, who am I to complain .
Shedge , you're really something...
Something soo mesmerizingly beautiful even  words can't describe you , not just your appearance, everything you do , so graceful, so elegant ...🧿

The messy hair coming onto your face , the little black eyeliner ka dot on your forehead makes you look so charismatic, the bracelet on your soft hands , softer than ever (vim bar does the job I guess ) , the way you talk and throw all these jokes sooo effortlessly, YOU'RE ACTUALLY So Funny , i really love that about you  , your smile ahh killer , I'm not even kidding (or am I ) haha ...

I would never understand why you term yourself as a very boring and silent person, coz you're really not , No one can ever be bored when sitting next to you.
I feel like you really have a very different image about yourself from what others see when they look at you and trust me , you're soo much more fun person to be with .
You're the coolest person I have seen, I get the chills when you're near , you're THAT cool 🌷.

it's a pity to not go on a single date with just you ( there was one tho ) , ahh boring stuff aside 
I really appreciate your kind gestures , i remember you were throwing something in the dustbin , it fell over , you picked up and threw it in , I  was like SHE'S JUST LIKE MEEEE aahhhh .
I really love the warmth in your voice , it's so comforting to listen to ..
The way everything you do becomes so graceful, ethereal, it's crazyyy....
I'm not doing this to get something in return , just wanna make you feel happy and make you realise ,you're very different from how you see yourself and how others see you .
You're the most chatpati mahila I've ever met...
No one can ever come close to what you are , even if there may be PPL if nothing but better than you , they'll never be as special as you are ..
Everything about you is perfectly beautiful and I hope you stay blessed always and live a happy and healthy life.
HAPPIEST BIRTHDAY MS. SHEDGE 💕
Yours truly,
Hb of 21 years of Marriage.



`;

  const handleClick = () => {
    if (stage === 0) {
      play();//play music  Open envelope and show photos
      setStage(1);
    } else if (stage === 1) {
      // Fade photos and show folded letter
      setStage(2);
    } else if (stage === 2) {
      // Open letter with hearts
      setStage(3);
      setTimeout(() => setStage(4), 800); // Auto-progress to show open letter
    } else if (stage === 4) {
      // Fold letter back and show photos again
      setStage(5);
    } else if (stage === 5) {
      // Show birthday celebration
      setStage(6);
      // Show final popup after 5 seconds
      setTimeout(() => setStage(7), 5000);
    }else if (stage === 6 || stage === 7) {
    // If they click during the final celebration or popup, go back to start
    stop();
    setStage(0);
  }
  };

  const handlePopupClose = () => {
    setStage(0); // Keep celebration visible
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Instruction text */}
      {stage < 6 && (
        <motion.div
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg pointer-events-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-700">
            {stage === 0 && "Click to open the envelope ✨"}
            {stage === 1 && "Click to continue 💌"}
            {stage === 2 && "Click to open the letter 💝"}
            {stage === 4 && "Click to continue 🎉"}
            {stage === 5 && "Click for the celebration 🎊"}
          </p>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {stage === 0 && (
          <Envelope isOpen={false} onClick={() => {}} />
        )}
        {stage >= 1 && stage < 2 && (
          <Envelope isOpen={true} onClick={() => {}} />
        )}
      </div>

      {/* Photos - show from stage 1 until stage 2, then show again at stage 5-6 */}
      {(stage >= 1 && stage < 2) && (
        <PhotoBurst 
          photos={photos} 
          isVisible={true} 
          isFaded={false} 
        />
      )}

      {/* Faded photos background with letter */}
      {(stage >= 2 && stage < 5) && (
        <PhotoBurst 
          photos={photos} 
          isVisible={true} 
          isFaded={true} 
        />
      )}

      {/* Photos visible again after letter closes */}
      {stage === 5 && (
        <PhotoBurst 
          photos={photos} 
          isVisible={true} 
          isFaded={false} 
        />
      )}

      {/* Letter */}
      {stage >= 2 && stage < 6 && (
        <Letter
          isVisible={true}
          isOpen={stage >= 3 && stage < 5}
          onClick={() => {}}
          message={letterMessage}
        />
      )}

      {/* Hearts when letter opens */}
      {stage === 3 && <Hearts isVisible={true} />}

      {/* Birthday Celebration */}
      {stage >= 6 && (
        <>
          {/* Faded photos background */}
          <PhotoBurst 
            photos={photos} 
            isVisible={true} 
            isFaded={true} 
          />
          
          {/* Birthday Message */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="text-center bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
              <h1 className="text-6xl md:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                Happy Birthday
              </h1>
              <h2 className="text-5xl md:text-6xl">Ms. Shedge</h2>
              <p className="text-2xl mt-4 text-gray-600">🎂 ✨ 🎉</p>
            </div>
          </motion.div>

          <Balloons isVisible={true} />
          <Confetti isVisible={true} />
          <Flowers isVisible={true} />
        </>
      )}

      {/* Final Popup */}
      {stage === 7 && (
        <FinalPopup isVisible={true} onClose={handlePopupClose} />
      )}
    </div>
  );
  
};
