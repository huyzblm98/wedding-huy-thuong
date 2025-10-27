import { useEffect, useState, useRef } from "react";
import backgroundDamngo from "@/assets/background_damngo.png";

const WeddingHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hearts, setHearts] = useState<
    Array<{ id: number; left: number; size: number; duration: number }>
  >([]);

  useEffect(() => {
    setIsVisible(true);

    // Liên tục tạo tim bay lên
    // const addHeart = () => {
    //   setHearts((prev) => [
    //     ...prev,
    //     {
    //       id: Date.now(),
    //       left: Math.random() * 100,
    //       size: 20 + Math.random() * 25,
    //       duration: 5 + Math.random() * 4,
    //     },
    //   ]);
    // };

    // const heartInterval = setInterval(addHeart, 400); // tạo tim mới mỗi 0.4s

    // Play nhạc
    const playMusic = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.currentTime = 10;
        audioRef.current.play().catch((err) =>
          console.log("Auto-play prevented:", err)
        );
      }
    };

    const timer = setTimeout(playMusic, 500);
    document.addEventListener("click", playMusic, { once: true });

    return () => {
      clearInterval(heartInterval);
      clearTimeout(timer);
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wedding-blue via-background to-wedding-rose-light">
      
      {/* Hearts rising */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none animate-rise font-black z-10"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
            color: "#cc0000",
            textShadow:
              "0 0 15px rgba(204, 0, 0, 1), 0 0 5px rgba(204, 0, 0, 1)",
            opacity: 0.9,
          }}
        >
          ♥
        </div>
      ))}

      {/* Background Image */}
      <div
        className="absolute inset-0 animate-float opacity-100 z-0"
        style={{
          backgroundImage: `url(${backgroundDamngo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Main Content */}
      <div
        className={`relative z-20 text-center px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.2em] sm:tracking-[0.3em] text-wedding-text mb-8 sm:mb-12 animate-fade-in px-4 mt-[50px]">
          LỄ DẠM NGÕ
        </h2>

        <div
          className="mb-6 animate-fade-in max-w-4xl mx-auto px-4"
          style={{ marginTop: "15%", animationDelay: "0.3s" }}
        >
          <h1
            className="font-script text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] mb-2 -translate-x-[15%] sm:-translate-x-[25%] md:-translate-x-[40%] lg:-translate-x-[50%]"
            style={{ color: "#CC0033" }}
          >
            Hoài Thương
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-12 sm:w-20 bg-wedding-accent"></div>
            <span className="font-playfair text-2xl sm:text-3xl md:text-4xl text-wedding-text">
              &
            </span>
            <div className="h-px w-12 sm:w-20 bg-wedding-accent"></div>
          </div>
          <h1
            className="font-script text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] translate-x-[15%] sm:translate-x-[25%] md:translate-x-[40%] lg:translate-x-[50%]"
            style={{ color: "#CC0033" }}
          >
            Quang Huy
          </h1>
        </div>

        <div
          className="animate-fade-in px-4"
          style={{ marginTop: "15%", animationDelay: "0.6s" }}
        >
          <div className="inline-block">
            {/* THÁNG 11 centered */}
            <p className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] sm:tracking-[0.3em] text-wedding-text text-center">
              THÁNG{" "}
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                11
              </span>
            </p>

            {/* Container for lines and content */}
            <div className="relative mb-4">
              {/* Top line */}
              <div className="h-px bg-wedding-accent mb-8"></div>

              {/* THỨ BẢY, 01, 12.09(ẤT TỴ) */}
              <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-12 -mt-4 mb-4">
                <div className="text-center">
                  <p className="font-playfair text-lg sm:text-2xl md:text-3xl lg:text-4xl text-wedding-text tracking-wider">
                    THỨ BẢY
                  </p>
                </div>
                <p
                  className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-wedding-rose leading-none"
                  style={{ color: "#CC0033" }}
                >
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
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--wedding-rose)) 1px, transparent 1px),
                             radial-gradient(circle at 80% 80%, hsl(var(--wedding-rose)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Background Music */}
      <audio ref={audioRef} loop autoPlay preload="auto">
        <source src="/i_do.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WeddingHero;
