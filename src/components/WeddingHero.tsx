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
    const addHeart = () => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          size: 20 + Math.random() * 25,
          duration: 5 + Math.random() * 4,
        },
      ]);
    };

    const heartInterval = setInterval(addHeart, 400); // tạo tim mới mỗi 0.4s

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
          className="absolute pointer-events-none animate-rise font-black"
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

      {/* Background */}
      <div
        className="absolute inset-0 animate-float opacity-100"
        style={{
          backgroundImage: `url(${backgroundDamngo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Nội dung gốc của bạn giữ nguyên */}
      {/* ... phần text Hoài Thương & Quang Huy ... */}

      <audio ref={audioRef} loop autoPlay preload="auto">
        <source src="/i_do.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WeddingHero;
