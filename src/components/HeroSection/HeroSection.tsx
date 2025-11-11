import Image from "next/image";
import { CoupleModel } from "@/types/couple";
import { WeddingModel } from "@/types/wedding";
import { getDay, getMonth, getYear } from "@/utils/date";
import { CSSProperties, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  coupleInfo: CoupleModel;
  weddingInfo: WeddingModel;
  scrollUpRef: any;
  onScrollDownClick: Function | any;
  onConfirmJoinClick: Function | any;
  onBankingClick: Function | any;
}

export function HeroSection({
  coupleInfo,
  weddingInfo,
  scrollUpRef,
  onScrollDownClick,
  onConfirmJoinClick,
  onBankingClick,
}: HeroProps) {
  return (
    <>
      <div
        ref={scrollUpRef}
        id="home"
        className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
      >
        <Slider></Slider>

        <div className="container mx-auto relative z-10 flex flex-col justify-between items-center h-full text-center p-2 py-10">
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className={"mb-10 flex items-center space-x-2 text-5xl"}>
              <div
                className="font-bold leading-tight mb-4 w-28 sm:w-auto"
                data-aos="fade-right"
                data-aos-delay="3000"
                data-aos-duration="3000"
              >
                {coupleInfo.male.fullName}
              </div>
              <div
                className="font-bold leading-tight mb-4"
                data-aos="zoom-in-down"
                data-aos-delay="3000"
                data-aos-duration="3000"
              >
                &
              </div>
              <div
                className="font-bold leading-tight mb-4 w-28 sm:w-auto font-[Dancing_Script]"
                data-aos="fade-left"
                data-aos-delay="3000"
                data-aos-duration="3000"
              >
                {coupleInfo.female.fullName}
              </div>
            </div>
            <div className="text-base w-[340px] lg:w-[450px] min-h-[60px] sm:text-lg md:text-2xl text-gray-300 mb-12 sm:mb-20 tracking-[5px] border-t-2 border-b-2 py-3 px-5 ">
              <TypeAnimation
                sequence={[4000, "WE'RE GETTING MARRIED"]}
                wrapper="p"
                speed={60}
              />
            </div>
            <div className="relative flex space-x-5 sm:space-x-10 lg:space-x-20 font-serif ">
              <div className="flex">
                <div className="relative animate__animated animate__pulse animate__infinite">
                  <div className="heart bg-opacity-40 transform scale-100 sm:scale-[1.3] lg:scale-[1.4]"></div>
                  <div className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                    <p className="text-sm sm:text-base text-white font-semibold font-[Dancing_Script]">
                      Ngày
                    </p>
                    <p className="text-xl sm:text-3xl text-white font-bold font-[Dancing_Script]">
                      {getDay(weddingInfo.weddingDate)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex animate__animated animate__jackInTheBox animate__delay-4s">
                <div className="relative animate__animated animate__pulse animate__infinite">
                  <div className="heart bg-opacity-40 transform scale-100 sm:scale-[1.3] lg:scale-[1.4]"></div>
                  <div className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                    <p className="text-sm sm:text-base text-white font-semibold font-[Dancing_Script]">
                      Tháng
                    </p>
                    <p className="text-xl sm:text-3xl text-white font-bold font-[Dancing_Script]">
                      {getMonth(weddingInfo.weddingDate)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex animate__animated animate__jackInTheBox animate__delay-5s">
                <div className="relative animate__animated animate__pulse animate__infinite">
                  <div className="heart bg-opacity-40 transform scale-100 sm:scale-[1.3] lg:scale-[1.4]"></div>
                  <div className="absolute w-full h-full -top-2.5 left-0 flex flex-col justify-center items-center">
                    <p className="text-sm sm:text-base text-white font-semibold font-[Dancing_Script]">
                      Năm
                    </p>
                    <p className="text-xl sm:text-3xl text-white font-bold font-[Dancing_Script]">
                      {getYear(weddingInfo.weddingDate)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons ở cuối màn hình */}
          <div className="w-full max-w-md px-4 mb-8">
            <div className="flex flex-row gap-4">
              <button
                onClick={onConfirmJoinClick}
                className="uppercase flex-1 hover:bg-gray-100 py-3 bg-white text-black rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base font-medium border border-gray-300 shadow-sm"
              >
                Xác nhận tham dự
              </button>
              <button
                onClick={onBankingClick}
                className="uppercase flex-1 hover:bg-gray-100 py-3 bg-white text-black rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base font-medium border border-gray-300 shadow-sm"
              >
                Mừng cưới
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliders] = useState<number[]>(
    Array.from({ length: 3 }).map((_, i) => i + 1)
  );
  const prev = () => {
    setCurIndex(currentIndex - 1);
  };

  const next = () => {
    setCurIndex(currentIndex + 1);
  };

  const setCurIndex = (index: number) => {
    if (index < 0) {
      index = sliders.length - 1;
    }
    if (index > sliders.length - 1) {
      index = 0;
    }

    setCurrentIndex(index);
  };

  const changeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="absolute inset-0 w-full slider-wrapper">
        <div
          className={
            "flex transition-transform duration-700 ease-in-out transform"
          }
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliders.map((_, i) => (
            <div
              className="w-full transition-transform duration-700 ease-in-out transform flex-shrink-0 p-0 h-screen slider__image"
              key={i}
            >
              <Image
                src={`/images/sliders/${i + 1}.jpg`}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover object-center" // Luôn căn giữa
                width={2200}
                height={2200}
                priority={i === 0} // Tối ưu tải ảnh đầu tiên
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Navigation buttons */}
        <div className="move max-sm:w-28 max-sm:absolute max-sm:bottom-20 max-sm:-right-5 max-sm:rotate-90">
          <button
            onClick={prev}
            className="z-30 absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-all"
          >
            <ArrowLeftIcon className="w-7 h-7 cursor-pointer text-white"></ArrowLeftIcon>
          </button>
          <button
            onClick={next}
            className="z-30 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-all"
          >
            <ArrowRightIcon className="w-7 h-7 cursor-pointer text-white"></ArrowRightIcon>
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {sliders.map((_, i) => (
          <button
            key={i}
            onClick={() => changeIndex(i)}
            className={
              "cursor-pointer w-3 h-3 rounded-full transition-all duration-300 " +
              (i === currentIndex
                ? "bg-pink-500 scale-125"
                : "bg-white bg-opacity-70 hover:bg-opacity-100")
            }
          ></button>
        ))}
      </div>
    </>
  );
}
