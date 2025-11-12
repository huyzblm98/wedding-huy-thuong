import Image from "next/image";
import { CoupleModel } from "@/types/couple";
import { WeddingModel } from "@/types/wedding";
import { WeddingEventInfos } from "@/data/websiteDataInfo";
import { TypeAnimation } from "react-type-animation";
import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

interface CoupleInviteProps {
  coupleInfo: CoupleModel;
  weddingInfo: WeddingModel;
  scrollDownRef: any;
}

export function CoupleInvite({ coupleInfo, scrollDownRef }: CoupleInviteProps) {
  const [showSecond, setShowSecond] = useState(false);
  const searchParams = useSearchParams();
  const event = searchParams.get("e");

  // Lấy thông tin sự kiện
  const getEventInfo = () => {
    if (event === "1")
      return WeddingEventInfos.find((info) => info.title.includes("NHÀ GÁI"));
    return WeddingEventInfos.find((info) => info.title.includes("NHÀ TRAI"));
  };
  const getEventLeThanhHon = () =>
    WeddingEventInfos.find((info) => info.title.includes("LỄ THÀNH HÔN"));

  const eventInfo = getEventInfo();
  const leThanhHon = getEventLeThanhHon();

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    return `${hours} giờ ${minutes}'`;
  };

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
    return { day, month, year, dayName: days[dayOfWeek] };
  };

  const formattedDate = eventInfo ? formatDate(eventInfo.date) : null;
  const formattedTime = eventInfo ? formatTime(eventInfo.time) : null;
  const leThanhHonDate = leThanhHon ? formatDate(leThanhHon.date) : null;
  const leThanhHonTime = leThanhHon ? formatTime(leThanhHon.time) : null;

  // 👇 Thêm hiệu ứng scroll cho ảnh
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      id="couple"
      className="container mx-auto overflow-x-hidden"
      ref={scrollDownRef}
    >
      <div className="my-10 lg:my-32 px-4 lg:px-10 w-full xl:w-4/5 md:min-h-0 mx-auto">
        <div className="w-full flex flex-col justify-center">
          {/* --- phần trên giữ nguyên --- */}

          {/* Tên cô dâu chú rể */}
          <div className="text-center font-serif text-red-500">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-2 font-[Dancing_Script]">
              Quang Huy
            </p>
            <p className="text-xl md:text-2xl text-red-500 mb-2 font-[Dancing_Script]">
              &
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-500 font-[Dancing_Script]">
              Hoài Thương
            </p>

            {/* 👇 Ảnh có hiệu ứng scroll */}
            <div className="flex justify-center mt-3 md:mt-4">
              <div
                className="w-full max-w-2xl aspect-video relative overflow-hidden"
                ref={ref}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  style={{ y, scale }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/stories/2.jpg"
                    alt="Cô dâu chú rể"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* --- phần dưới (lời mời, lịch, địa điểm...) giữ nguyên --- */}
        </div>
      </div>
    </section>
  );
}
