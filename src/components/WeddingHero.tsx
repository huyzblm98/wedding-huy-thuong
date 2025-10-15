import { useEffect, useState } from "react";
import floralTopLeft from "@/assets/floral-top-left.png";

const WeddingHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wedding-blue via-background to-wedding-rose-light">
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 animate-float opacity-70"
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
        <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-wedding-text mb-8 animate-fade-in">
          LỄ DẠM NGÕ
        </h2>

        <div className="mb-6 animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-wedding-rose mb-2 text-left">
            Hoài Thương
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-20 bg-wedding-accent"></div>
            <span className="font-playfair text-3xl md:text-4xl text-wedding-text">&</span>
            <div className="h-px w-20 bg-wedding-accent"></div>
          </div>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-wedding-rose text-right">
            Quang Huy
          </h1>
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block">
            <p className="font-playfair text-2xl md:text-3xl tracking-[0.2em] text-wedding-text mb-2">
              THÁNG MƯỜI
            </p>
            <div className="h-px bg-wedding-accent mb-3"></div>
            <p className="font-playfair text-xl md:text-2xl text-wedding-text mb-1">
              THỨ BẢY
            </p>
            <p className="font-playfair text-6xl md:text-7xl font-bold text-wedding-rose mb-2">
              1
            </p>
            <p className="font-playfair text-lg md:text-xl text-wedding-text tracking-wider mb-2">
              01/11 ẤT TỴ
            </p>
            <p className="font-playfair text-4xl md:text-5xl tracking-[0.3em] text-wedding-text">
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
    </div>
  );
};

export default WeddingHero;
