import { CoupleModel } from "@/types/couple";
import { WeddingModel } from "@/types/wedding";
import { OurStoryModel } from "@/types/ourStory";

export const CoupleInfo: CoupleModel = {
  male: {
    fullName: "Quang Huy",
    avatar: {
      src: "/images/avatars/male_1_1.jpg",
      with: 500,
      height: 500,
    },
    description:
      "Là một chàng trai hiền lành, chu đáo và đam mê nấu ăn. Sự quan tâm chân thành của anh dành cho mọi người khiến anh luôn được yêu quý và trân trọng.",
    address: "Thôn Cuối, Xã Vĩnh Hưng, Tỉnh Phú Thọ",
    mapAddress:
      "https://www.google.com/maps?q=21.287305614321852,105.50013885140255&z=14&t=m&mapclient=embed",
    bankQrCode: {
      src: "/images/qrCodes/HuyMBBank.jpg",
      with: 500,
      height: 500,
    },
    bankName: "MB Bank",
    bankAccountNumber: "0976831354",
    bankOwnerName: "Bùi Quang Huy",
  },
  female: {
    fullName: "Hoài Thương",
    avatar: {
      src: "/images/avatars/female_1_1.jpg",
      with: 500,
      height: 500,
    },
    description:
      "Là một cô gái đáng yêu, nội tâm sâu sắc và luôn yêu thương gia đình. Sự dịu dàng, biết lắng nghe và chân thành của cô khiến mọi người cảm thấy gần gũi, ấm áp.",
    address: "Tổ dân phố 3, Xã Đức Thọ, Tỉnh Hà Tĩnh",
    mapAddress:
      "https://www.google.com/maps?q=18.54131507873535,105.58305358886719&z=14&t=m&mapclient=embed",
    bankQrCode: {
      src: "/images/qrCodes/ThuongBIDVBank.jpg",
      with: 500,
      height: 500,
    },
    bankName: "BIDV",
    bankAccountNumber: "1590320731",
    bankOwnerName: "Hoàng Thị Hoài Thương",
  },
};

export const WeddingInfo: WeddingModel = {
  weddingDate: "2025/11/28",
};

export const OurStoryInfos: OurStoryModel[] = [
  {
    date: "2025/11/28",
    caption: "Ngày đẹp nhất cuộc đời",
    image: {
      src: "/images/stories/4.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "“Yêu rồi xa rồi lại yêu” — hành trình dài 7 năm của anh và em. Từ những ngày đại học, rồi những lần em đi xa, anh vẫn ở lại, chờ đợi. Dù có chia ly, tình yêu vẫn tìm được đường quay về. Và rồi, ngày đẹp nhất cũng đến — lần đầu hai đứa dắt nhau ra mắt hai bên gia đình, sau bao lần gặp gỡ, cuối cùng cũng được đồng ý để cùng nắm tay đi hết quãng đời còn lại.",
  },
  {
    date: "2022/12/01",
    caption: "Yêu rồi xa rồi lại yêu",
    image: {
      src: "/images/stories/7.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "Ba năm thanh xuân bên nhau. Rồi em ra trường, chọn đi du học, mình chia tay trong lặng lẽ. Một năm sau, em về, anh vẫn ở đó, và ta lại yêu. Nhưng rồi em lại đi, không chỉ một mà hai lần nữa. Dù khoảng cách dài thêm, anh vẫn chờ — vì tim anh chưa từng ngừng hướng về em.",
  },
  {
    date: "2017/10/02",
    caption: "Ngỏ lười yêu",
    image: {
      src: "/images/stories/2.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "Ngày anh lấy hết can đảm nói với em: “Tao không muốn làm bạn mày nữa.” Câu nói tưởng chừng đơn giản mà chứa hết bao cảm xúc sau hơn 3 tháng theo đuổi. Rồi đến 05/10/2017, em mỉm cười gật đầu — khoảnh khắc anh biết rằng mình đã thực sự có em.",
  },
  {
    date: "2017/07/17",
    caption: "Lời tán tỉnh đầu tiên",
    image: {
      src: "/images/stories/5.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "Ngày mà anh bắt đầu những tin nhắn đầu tiên làm quen em. Anh đã gõ gõ, rồi lại xóa xóa nhưng vẫn không nghĩ ra được gì hay hơn là những dòng tin nhắn thật nhạt nhẽo “Chào em, anh là bạn của Thuyên”. Vậy mà em cũng đã phản hồi lại anh bằng những tin nhắn đáng yêu. Chúng ta tạo dựng lên tình yêu ngọt ngào bắt đầu từ những điều đơn giản như vậy. Đến bây giờ, anh luôn biết ơn vì mình có những người bạn uy tín và tuyệt vời đến vậy, đã giúp chúng ta có duyên gặp và yêu nhau.",
  },
];

export const Metadata = {
  title: `Thư mời cưới ${CoupleInfo.male.fullName} & ${CoupleInfo.female.fullName}`,
  icon: {
    type: "image/png",
    src: "/icons/logo_32.png",
  },
  keywords: "Happy, Wedding, My Wedding, Lễ cưới, Love, Huy Thương",
  description:
    "Chúng tôi trân trọng mời bạn đến chung vui trong ngày cưới của chúng tôi.",
  image: {
    src: "/images/stories/2.jpg", // ✅ ảnh thật, không bị qua _next/image
    type: "image/jpeg",
    width: 1200,
    height: 630,
  },
  url: "https://wedding-huy-thuong.vercel.app", // ✅ tuyệt đối
};

export const WeddingEventInfos = [
  {
    title: "TIỆC CƯỚI NHÀ GÁI",
    date: "2025/11/27",
    time: "16:00",
    timeAmLich: "(Tức ngày 08 tháng 10 năm Ất Tỵ)",
    home: `Tại gia đình nhà gái`,
    address: `${CoupleInfo.female.address}`,
    image: {
      src: "/images/events/1.jpg",
      type: "image/jpeg",
      width: 300,
      height: 300,
    },
    mapAddress: CoupleInfo.female.mapAddress,
    active: true,
  },
  {
    title: "TIỆC CƯỚI NHÀ TRAI",
    date: "2025/11/28",
    time: "15:00",
    timeAmLich: "(Tức ngày 09 tháng 10 năm Ất Tỵ)",
    home: `Tại gia đình nhà trai`,
    address: `${CoupleInfo.male.address}`,
    image: {
      src: "/images/events/3.jpg",
      type: "image/jpeg",
      width: 300,
      height: 300,
    },
    mapAddress: CoupleInfo.male.mapAddress,
    active: true,
  },
  {
    title: "LỄ THÀNH HÔN",
    date: "2025/11/28",
    time: "06:00",
    timeAmLich: "(Tức ngày 09 tháng 10 năm Ất Tỵ)",
    home: `Tại gia đình nhà trai`,
    address: `${CoupleInfo.male.address}`,
    image: {
      src: "/images/events/3.jpg",
      type: "image/jpeg",
      width: 300,
      height: 300,
    },
    mapAddress: CoupleInfo.male.mapAddress,
    active: true,
  },
];
