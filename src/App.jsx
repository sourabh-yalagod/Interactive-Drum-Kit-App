import React, { useEffect } from "react";
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
    { id: 1, audioKey: 'a', audio: './sounds/1.wav' },
    { id: 2, audioKey: 's', audio: './sounds/2.wav' },
    { id: 3, audioKey: 'd', audio: './sounds/3.wav' },
    { id: 4, audioKey: 'f', audio: './sounds/4.wav' },
    { id: 5, audioKey: 'h', audio: './sounds/5.wav' },
    { id: 6, audioKey: 'j', audio: './sounds/6.wav' },
    { id: 7, audioKey: 'k', audio: './sounds/7.wav' },
    { id: 8, audioKey: 'l', audio: './sounds/8.wav' }
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
      <div className='w-full h-screen flex items-center sm:px-10 justify-center flex-wrap'>
        <div className=" flex items-center w-full px-10 justify-between gap-10 flex-wrap flex-auto">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              id={`btn-${btn.id}`}
              onClick={() => play(btn.audioKey)}
              className="sm:text-4xl text-2xl text-center px-5 py-2 rounded-[5px] bg-black bg-opacity-60 text-white border-4
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
