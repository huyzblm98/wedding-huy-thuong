import { useEffect, useState, useRef } from "react";
import floralTopLeft from "@/assets/floral-top-left.png";

const WeddingHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Play music on user interaction
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log("Auto-play prevented:", err));
      }
    };
    
    // Try to play after a small delay
    const timer = setTimeout(playMusic, 500);
    
    // Also play on any user interaction
    document.addEventListener('click', playMusic, { once: true });
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', playMusic);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wedding-blue via-background to-wedding-rose-light">
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 animate-float opacity-90"
        style={{
          backgroundImage: `url(${floralTopLeft})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Overlay to soften the background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-blue/40 via-background/50 to-wedding-rose-light/40"></div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl tracking-[0.3em] text-wedding-text mb-12 animate-fade-in">
          LỄ DẠM NGÕ
        </h2>

        <div className="mb-6 animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-wedding-rose mb-2" style={{ marginLeft: '-120%' }}>
            Hoài Thương
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-20 bg-wedding-accent"></div>
            <span className="font-playfair text-3xl md:text-4xl text-wedding-text">&</span>
            <div className="h-px w-20 bg-wedding-accent"></div>
          </div>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-wedding-rose whitespace-nowrap" style={{ marginLeft: '60%' }}>
            Quang Huy
          </h1>
        </div>

        
<div className="animate-fade-in" style={{ marginTop: '100px', animationDelay: '0.6s' }}>
  <div className="inline-block">
    {/* THÁNG 9 centered */}
    <p className="font-playfair text-2xl md:text-3xl tracking-[0.3em] text-wedding-text text-center mb-4">
      THÁNG 10
    </p>
    
    {/* Container for lines and content */}
    <div className="relative mb-4">
      {/* Top line */}
      <div className="h-px bg-wedding-accent mb-8"></div>
      
      {/* THỨ BẢY, 27, 00.08(ẤT TỴ) centered between lines */}
      <div className="flex items-center justify-center gap-6 md:gap-12 -mt-4 mb-4">
        <div className="text-center">
          <p className="font-playfair text-base md:text-lg text-wedding-text tracking-wider">
            THỨ BẢY
          </p>
        </div>
        <p className="font-playfair text-7xl md:text-8xl font-bold text-wedding-rose leading-none">
          01
        </p>
        <div className="text-center">
          <p className="font-playfair text-base md:text-lg text-wedding-text tracking-wide">
            12.09(ẤT TỴ)
          </p>
        </div>
      </div>
      
      {/* Bottom line */}
      <div className="h-px bg-wedding-accent"></div>
    </div>
    
    {/* 2025 below */}
    <p className="font-playfair text-4xl md:text-5xl tracking-[0.3em] text-wedding-text text-center">
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
        <source src="/cuoi-nhau-di.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WeddingHero;
