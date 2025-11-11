"use client";
import { useState, useRef } from "react";

export function ConfirmJoin() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "",
    message: "",
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    // Kiểm tra và focus vào trường thiếu thông tin
    if (!formData.name) {
      nameInputRef.current?.focus();
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="relative w-full bg-[url('/images/bg/img_bg_4.jpg')] min-h-[600px] md:min-h-[700px] bg-no-repeat bg-cover bg-center bg-local">
        <div className="w-full absolute bg-black opacity-40 h-full z-10"></div>
        <div className="w-full h-full relative z-20 flex items-center justify-center px-10 py-20">
          <div className="text-center space-y-8 animate-fadeIn">
            {/* Avatar Icons with Animation */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center border-4 border-pink-300 shadow-lg animate-bounce-slow">
                <span className="text-white text-5xl md:text-6xl">👰</span>
              </div>
              <div className="text-pink-300 text-4xl md:text-5xl animate-pulse">
                ♥
              </div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-300 shadow-lg animate-bounce-slow-delay">
                <span className="text-white text-5xl md:text-6xl">🤵</span>
              </div>
            </div>

            <h1 className="text-white text-4xl sm:text-6xl font-bold font-[Dancing_Script] animate-slideDown">
              Cảm ơn bạn đã phản hồi
            </h1>
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-[Dancing_Script] animate-slideDown-delay">
              cho 2 vợ chồng nha {"<3"}
            </h1>
            <div className="flex justify-center space-x-4 mt-8">
              <span className="text-pink-300 text-3xl sm:text-4xl animate-heartbeat">
                ♥
              </span>
              <span className="text-pink-300 text-3xl sm:text-4xl animate-heartbeat-delay">
                ♥
              </span>
              <span className="text-pink-300 text-3xl sm:text-4xl animate-heartbeat-delay-2">
                ♥
              </span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heartbeat {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
          }

          @keyframes bounceSlow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }

          .animate-slideDown {
            animation: slideDown 0.8s ease-out;
          }

          .animate-slideDown-delay {
            animation: slideDown 0.8s ease-out 0.3s backwards;
          }

          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }

          .animate-heartbeat-delay {
            animation: heartbeat 1.5s ease-in-out 0.3s infinite;
          }

          .animate-heartbeat-delay-2 {
            animation: heartbeat 1.5s ease-in-out 0.6s infinite;
          }

          .animate-bounce-slow {
            animation: bounceSlow 2s ease-in-out infinite;
          }

          .animate-bounce-slow-delay {
            animation: bounceSlow 2s ease-in-out 0.5s infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full bg-[url('/images/bg/img_bg_4.jpg')] min-h-[700px] md:min-h-[800px] bg-no-repeat bg-cover bg-center bg-local">
        <div className="w-full absolute bg-black opacity-40 h-full z-10"></div>
        <div className="w-full h-full flex-col relative z-20 flex items-center justify-center space-y-12 px-10 py-20">
          <div className="flex justify-center flex-col items-center space-y-8">
            <div>
              <h1 className="text-white text-4xl sm:text-6xl font-semibold ">
                Xác nhận tham dự.
              </h1>
            </div>
            <h2 className="text-gray-100 text-[20px] sm:text-lg text-center font-[Dancing_Script]">
              Xác nhận tham dự đám cưới của Huy & Thương.
              <br />
              Điều này giúp chúng tôi đón tiếp các bạn chu đáo và đầy đủ hơn.
              Xin cảm ơn !!!
            </h2>
          </div>
          <div className="flex flex-col w-full lg:w-2/3 xl:w-1/2 items-center justify-center space-y-5 text-white">
            <div className="w-full">
              <input
                ref={nameInputRef}
                type="text"
                placeholder="Họ và Tên *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#ffffff45] px-5 py-3 text-base sm:text-xl bg-opacity-30 placeholder-white outline-0 rounded-lg focus:ring-2 focus:ring-pink-400 transition-all"
              />
            </div>
            <div className="w-full">
              <input
                ref={phoneInputRef}
                type="text"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-[#ffffff45] px-5 py-3 text-base sm:text-xl bg-opacity-30 placeholder-white outline-0 rounded-lg focus:ring-2 focus:ring-pink-400 transition-all"
              />
            </div>
            <div className="w-full space-y-2">
              <p className="text-sm mb-2">Xác nhận tham dự</p>
              <label className="flex items-center space-x-2 cursor-pointer hover:bg-white/10 p-2 rounded transition-all">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === "yes"}
                  onChange={(e) =>
                    setFormData({ ...formData, attendance: e.target.value })
                  }
                  className="w-4 h-4 accent-pink-500"
                />
                <span>Có, tôi sẽ đến</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:bg-white/10 p-2 rounded transition-all">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === "no"}
                  onChange={(e) =>
                    setFormData({ ...formData, attendance: e.target.value })
                  }
                  className="w-4 h-4 accent-pink-500"
                />
                <span>Rất tiếc, tôi không thể đến</span>
              </label>
            </div>
            <div className="w-full">
              <textarea
                placeholder="Gửi lời nhắn cho cô dâu chú rể"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full bg-[#ffffff45] px-5 py-3 text-base sm:text-xl bg-opacity-30 placeholder-white outline-0 rounded-lg resize-none focus:ring-2 focus:ring-pink-400 transition-all"
              />
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-4">
              <button
                onClick={handleSubmit}
                className="uppercase flex-1 hover:bg-pink-600 py-3 bg-pink-500 rounded-full transition-all duration-300 hover:scale-105"
              >
                Gửi xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
