import Image from "next/image";
import { CoupleModel } from "@/types/couple";
import { WeddingModel } from "@/types/wedding";
import { fullDateVN } from "@/utils/date";
import { WeddingInfo, WeddingEventInfos } from "@/data/websiteDataInfo";
import { SectionTitle } from "@/components/shareds/SectionTitle";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface CoupleInviteProps {
  coupleInfo: CoupleModel;
  weddingInfo: WeddingModel;
  scrollDownRef: any;
}

export function CoupleInvite({ coupleInfo, scrollDownRef }: CoupleInviteProps) {
  const [showSecond, setShowSecond] = useState(false);
  const searchParams = useSearchParams();
  const event = searchParams.get("e");

  // Lấy thông tin sự kiện dựa trên event parameter
  const getEventInfo = () => {
    if (event === "1") {
      // event "1" là nhà gái
      return WeddingEventInfos.find((info) => info.title.includes("NHÀ GÁI"));
    }
    // Mặc định lấy nhà trai
    return WeddingEventInfos.find((info) => info.title.includes("NHÀ TRAI"));
  };

  const getEventLeThanhHon = () => {
    return WeddingEventInfos.find((info) =>
      info.title.includes("LỄ THÀNH HÔN")
    );
  };

  const eventInfo = getEventInfo();
  const leThanhHon = getEventLeThanhHon();

  // Format thời gian từ "16:00" thành "16 giờ 00'"
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    return `${hours} giờ ${minutes}'`;
  };

  // Format date từ "2025/11/28" thành các phần riêng biệt
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();

    const days = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    const dayName = days[dayOfWeek];

    return {
      day,
      month,
      year,
      dayName,
    };
  };

  const formattedDate = eventInfo ? formatDate(eventInfo.date) : null;
  const formattedTime = eventInfo ? formatTime(eventInfo.time) : null;
  const leThanhHonDate = leThanhHon ? formatDate(leThanhHon.date) : null;
  const leThanhHonTime = leThanhHon ? formatTime(leThanhHon.time) : null;

  return (
    <>
      <section
        id="couple"
        className="container mx-auto overflow-x-hidden"
        ref={scrollDownRef}
      >
        <div className="my-10 lg:my-32 px-4 lg:px-10 w-full xl:w-4/5 min-h-[85vh] md:min-h-0 mx-auto">
          <div className="w-full flex flex-col justify-center">
            {/* Nhà trai, nhà gái */}
            <div className="text-center font-serif text-red-600">
              <table className="mx-auto text-center border-collapse w-full max-w-md">
                <tbody>
                  <tr>
                    <td className="border-r border-black pr-3 md:pr-4 py-1 md:py-2 font-semibold text-lg md:text-xl">
                      NHÀ TRAI
                    </td>
                    <td className="border-l border-black pl-3 md:pl-4 py-1 md:py-2 font-semibold text-lg md:text-xl">
                      NHÀ GÁI
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-black pr-3 md:pr-4 py-1 text-base md:text-lg">
                      Ông: Bùi Văn Cường
                    </td>
                    <td className="border-l border-black pl-3 md:pl-4 py-1 text-base md:text-lg">
                      Ông: Hoàng Thanh Nhân
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-black pr-3 md:pr-4 py-1 text-base md:text-lg">
                      Bà: Nguyễn Thị Hậu
                    </td>
                    <td className="border-l border-black pl-3 md:pl-4 py-1 text-base md:text-lg">
                      Bà: Phạm Thị Vinh
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="text-base md:text-lg mt-4 md:mt-6 mb-3 md:mb-4">
                Trân trọng thông báo LỄ THÀNH HÔN của
              </p>

              {/* Tên cô dâu chú rể - Điểm nhấn */}
              <div className="mb-3 md:mb-4">
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-rose-600 mb-2 font-[Dancing_Script]">
                  Quang Huy
                </p>
                <p className="text-xl md:text-2xl text-rose-500 mb-2 font-[Dancing_Script]">
                  &
                </p>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-rose-600 font-[Dancing_Script]">
                  Hoài Thương
                </p>
              </div>

              <div className="flex justify-center mt-3 md:mt-4">
                <div className="w-full max-w-2xl aspect-video relative">
                  <Image
                    src="/images/stories/2.jpg"
                    alt="Cô dâu chú rể"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                </div>
              </div>
            </div>

            {/* Lời mời */}
            <div className="flex flex-col items-center mb-8 md:mb-28 mt-8 md:mt-12">
              <div className={"lg:mb-10"}>
                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-rose-500 text-center mb-4 font-serif">
                  TRÂN TRỌNG KÍNH MỜI
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-offset="100">
                {/*ĐOẠN đọc tên người mời */}
                {(() => {
                  const name = searchParams.get("name");
                  if (name)
                    return (
                      <p className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-rose-500 text-center font-[Dancing_Script] mb-4">
                        {name} 💕
                      </p>
                    );
                  return null;
                })()}

                {
                  <TypeAnimation
                    sequence={[
                      "TỚI DỰ BỮA CƠM THÂN MẬT CÙNG GIA ĐÌNH VÀO LÚC",
                      800,
                    ]}
                    wrapper="p"
                    speed={50}
                    className="text-base sm:text-lg md:text-2xl lg:text-4xl text-rose-400 text-center font-serif"
                    repeat={0}
                    cursor={false}
                  />
                }
              </div>
            </div>

            {/* Thông tin ngày giờ */}
            <div className="text-center font-serif text-black-600 mb-12 md:mb-20">
              <table className="mx-auto text-center border-collapse">
                <tbody>
                  <tr>
                    <td className="border-r border-black pr-1 md:pr-2"></td>
                    <td className="text-xl md:text-2xl lg:text-3xl font-semibold px-2 md:px-4">
                      {formattedTime}
                    </td>
                    <td className="border-l border-black pl-1 md:pl-2"></td>
                  </tr>
                  <tr>
                    <td className="border-r border-black pr-1 md:pr-2 text-lg md:text-xl">
                      {formattedDate?.dayName || "Thứ Sáu"}
                    </td>
                    <td className="text-3xl md:text-5xl lg:text-6xl font-bold px-2 md:px-4">
                      {formattedDate?.day || "28"}
                    </td>
                    <td className="border-l border-black pl-1 md:pl-2 text-lg md:text-xl">
                      Năm {formattedDate?.year || "2025"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-black pr-1 md:pr-2"></td>
                    <td className="text-lg md:text-xl lg:text-2xl px-2 md:px-4">
                      Tháng {formattedDate?.month || "11"}
                    </td>
                    <td className="border-l border-black pl-1 md:pl-2"></td>
                  </tr>
                </tbody>
              </table>

              <p className="text-base md:text-lg mt-2 italic">
                {eventInfo?.timeAmLich || "(Tức ngày 09 tháng 10 năm Ất Tỵ)"}
              </p>

              {/* Địa điểm */}
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-rose-50 rounded-lg border border-rose-200">
                <p className="text-lg md:text-xl font-semibold text-rose-700 mb-2">
                  {eventInfo?.home.toLocaleUpperCase()}
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {eventInfo?.address}
                </p>
                <a
                  href={eventInfo?.mapAddress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  XEM CHỈ ĐƯỜNG
                </a>
              </div>
            </div>

            {/* Lễ thành hôn */}
            <div className="text-center font-serif text-black-600 mb-12 md:mb-20">
              <p className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-rose-700">
                LỄ THÀNH HÔN
              </p>
              <table className="mx-auto text-center border-collapse">
                <tbody>
                  <tr>
                    <td className="border-r border-black pr-1 md:pr-2"></td>
                    <td className="text-xl md:text-2xl lg:text-3xl font-semibold px-2 md:px-4">
                      {leThanhHonTime}
                    </td>
                    <td className="border-l border-black pl-1 md:pl-2"></td>
                  </tr>
                  <tr>
                    <td className="border-r border-black pr-1 md:pr-2 text-lg md:text-xl">
                      {leThanhHonDate?.dayName || "Thứ Sáu"}
                    </td>
                    <td className="text-3xl md:text-5xl lg:text-6xl font-bold px-2 md:px-4">
                      {leThanhHonDate?.day || "28"}
                    </td>
                    <td className="border-l border-black pl-1 md:pl-2 text-lg md:text-xl">
                      Năm {leThanhHonDate?.year || "2025"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-r border-black pr-1 md:pr-2"></td>
                    <td className="text-lg md:text-xl lg:text-2xl px-2 md:px-4">
                      Tháng {leThanhHonDate?.month || "11"}
                    </td>
                    <td className="border-l border-black pl-1 md:pl-2"></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm md:text-base mt-4 italic text-gray-600 font-light tracking-wide">
                {leThanhHon?.timeAmLich || "(Tức ngày 09 tháng 10 năm Ất Tỵ)"}
              </p>

              {/* Lịch tháng 11 theo thiết kế ảnh */}
              <div className="mt-6 md:mt-8 max-w-xs mx-auto border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                {/* Header lịch */}
                <div className="text-center mb-4">
                  <p className="text-lg font-bold text-gray-800">
                    THÁNG 11 2025
                  </p>
                </div>

                {/* Các ngày trong tuần */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day) => (
                    <div
                      key={day}
                      className="text-xs font-medium text-gray-500 text-center py-1"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Các ngày trong tháng */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Ngày trống đầu tháng (Tháng 11/2025 bắt đầu từ Thứ 7) */}
                  {[...Array(6)].map((_, index) => (
                    <div key={`empty-${index}`} className="h-8"></div>
                  ))}

                  {/* Các ngày từ 1 đến 30 */}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                    const isHighlighted = day === 27 || day === 28;
                    return (
                      <div
                        key={day}
                        className={`h-8 flex items-center justify-center text-sm font-medium rounded-full
              ${isHighlighted ? "bg-rose-500 text-white" : "text-gray-700"}
              ${day === 27 ? "border-2 border-rose-400" : ""}
              ${day === 28 ? "border-2 border-rose-600" : ""}
            `}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
