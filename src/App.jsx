import React, { useEffect } from "react";
import { useState } from "react";

function App() {
  const buttons = [
    { id: 1, text: 'A', audioKey: 'a' },
    { id: 2, text: 'S', audioKey: 's' },
    { id: 3, text: 'D', audioKey: 'd' },
    { id: 4, text: 'F', audioKey: 'f' },
    { id: 5, text: 'H', audioKey: 'h' },
    { id: 6, text: 'J', audioKey: 'j' },
    { id: 7, text: 'K', audioKey: 'k' },
    { id: 8, text: 'L', audioKey: 'l' }
  ];

  const audios = [
    { id: 1, audioKey: 'a', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_boom.wav' },
    { id: 2, audioKey: 's', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_clap.wav' },
    { id: 3, audioKey: 'd', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_hihat.wav' },
    { id: 4, audioKey: 'f', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_kick.wav' },
    { id: 5, audioKey: 'h', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_openhat.wav' },
    { id: 6, audioKey: 'j', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_ride.wav' },
    { id: 7, audioKey: 'k', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_snare.wav' },
    { id: 8, audioKey: 'l', audio: 'public/sounds/01 - JavaScript Drum Kit_sounds_tink.wav' }
  ];

  const play = (audioKey) => {
    const audio = new Audio(audios.find((e) => e.audioKey === audioKey)?.audio);
    if (audio) {
      audio.play();
      audio.currentTime = 0;
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      play(e.key);


      const button = buttons.find((btn) => btn.audioKey === e.key);
      if (button) {

        const element = document.getElementById(`btn-${button.id}`);
        if (element) {
          element.style.transform = 'scale(1.2)';
          element.style.cursor = 'pointer';
          element.style.border = '1px solid rgb(212, 212, 90)';
          element.style.boxShadow = '2px 2px 50px 12px rgb(212, 212, 90)';

          setTimeout(() => {
            element.style.transform = '';
            element.style.cursor = '';
            element.style.border = '';
            element.style.boxShadow = '';
          }, 100);
        }
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [buttons]);

  return (
    <>
      <div className='w-full h-screen flex items-center justify-around flex-wrap'>
        <div className=" flex items-center justify-around flex-wrap">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              id={`btn-${btn.id}`}
              onClick={() => play(btn.audioKey)}
              className="m-4 text-3xl text-center p-2 px-4 leading-6 rounded-[5px] bg-black bg-opacity-60 text-white border-4
             border-black active:scale-[120%] cursor-pointer active:border-[rgb(212,212,90)] active:shadow-[2px_2px_50px_6px_rgb(212,212,90)]
              transition-all duration-[0.05s]"
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
