import { useEffect, useState, useRef } from "react";
import backgroundDamngo from "@/assets/background_damngo.png";

const WeddingHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate falling hearts
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4
      }));
      setHearts(newHearts);
    };
    
    generateHearts();
    const heartsInterval = setInterval(generateHearts, 12000);
    
    // Play music on user interaction
    const playMusic = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.currentTime = 10; // Skip first 10 seconds
        audioRef.current.play().catch(err => console.log("Auto-play prevented:", err));
      }
    };
    
    // Try to play after a small delay
    const timer = setTimeout(playMusic, 500);
    
    // Also play on any user interaction
    document.addEventListener('click', playMusic, { once: true });
    
    return () => {
      clearTimeout(timer);
      clearInterval(heartsInterval);
      document.removeEventListener('click', playMusic);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wedding-blue via-background to-wedding-rose-light">
      
      {/* Falling Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none animate-fall font-black"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${25 + Math.random() * 20}px`,
            color: '#cc0000',
            opacity: 1,
            textShadow: '0 0 15px rgba(204, 0, 0, 1), 0 0 5px rgba(204, 0, 0, 1)'
          }}
        >
          ♥
        </div>
      ))}
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 animate-float opacity-90"
        style={{
          backgroundImage: `url(${backgroundDamngo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Overlay to soften the background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-blue/40 via-background/50 to-wedding-rose-light/40"></div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.2em] sm:tracking-[0.3em] text-wedding-text mb-8 sm:mb-12 animate-fade-in px-4 mt-[50px]">
          LỄ DẠM NGÕ
        </h2>

        <div className="mb-6 animate-fade-in max-w-4xl mx-auto px-4" style={{ marginTop: '15%', animationDelay: '0.3s' }}>
          <h1 className="font-script text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] mb-2 -translate-x-[15%] sm:-translate-x-[25%] md:-translate-x-[40%] lg:-translate-x-[50%]" style={{ color: '#ff1493'}}>
            Hoài Thương
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-12 sm:w-20 bg-wedding-accent"></div>
            <span className="font-playfair text-2xl sm:text-3xl md:text-4xl text-wedding-text">&</span>
            <div className="h-px w-12 sm:w-20 bg-wedding-accent"></div>
          </div>
          <h1 className="font-script text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] translate-x-[15%] sm:translate-x-[25%] md:translate-x-[40%] lg:translate-x-[50%]" style={{ color: '#ff1493'}}>
            Quang Huy
          </h1>
        </div>

        
<div className="animate-fade-in px-4" style={{ marginTop: '15%', animationDelay: '0.6s' }}>
  <div className="inline-block">
    {/* THÁNG 11 centered */}
    <p className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] sm:tracking-[0.3em] text-wedding-text text-center">
      THÁNG <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">11</span>
    </p>
    
    {/* Container for lines and content */}
    <div className="relative mb-4">
      {/* Top line */}
      <div className="h-px bg-wedding-accent mb-8"></div>
      
      {/* THỨ BẢY, 01, 12.09(ẤT TỴ) centered between lines */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-12 -mt-4 mb-4">
        <div className="text-center">
         <p className="font-playfair text-lg sm:text-2xl md:text-3xl lg:text-4xl text-wedding-text tracking-wider">
            THỨ BẢY
          </p>
        </div>
        <p className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-wedding-rose leading-none">
          01
        </p>
        <div className="text-center">
          <p className="font-playfair text-lg sm:text-2xl md:text-3xl lg:text-4xl text-wedding-text tracking-wider">
            12/09 ẤT TỴ
          </p>
        </div>
      </div>
      
      {/* Bottom line */}
      <div className="h-px bg-wedding-accent"></div>
    </div>
    
    {/* 2025 below */}
    <p className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] sm:tracking-[0.3em] text-wedding-text text-center">
      2025
    </p>
  </div>
</div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="w-2 h-2 rounded-full bg-wedding-rose"></div>
          <div className="w-2 h-2 rounded-full bg-wedding-rose"></div>
          <div className="w-2 h-2 rounded-full bg-wedding-rose"></div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--wedding-rose)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, hsl(var(--wedding-rose)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Background Music */}
      <audio 
        ref={audioRef}
        loop
        autoPlay
        preload="auto"
      >
        <source src="/em-dong-y.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WeddingHero;
