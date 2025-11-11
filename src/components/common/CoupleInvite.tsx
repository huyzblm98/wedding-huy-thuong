// components/CoupleInvite.tsx
import { useState } from "react";
import { CoupleModel } from "@/types/couple";
import { WeddingModel } from "@/types/wedding";

interface CoupleInviteProps {
  coupleInfo: CoupleModel;
  weddingInfo: WeddingModel;
  scrollDownRef: any;
}

export function CoupleInvite({ coupleInfo, scrollDownRef }: CoupleInviteProps) {
  const [selectedPerson, setSelectedPerson] = useState<
    "male" | "female" | null
  >(null);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const handleAvatarClick = (personType: "male" | "female") => {
    setSelectedPerson(personType);
    setIsAvatarModalOpen(true);
  };

  const getSelectedPerson = () => {
    if (selectedPerson === "male") return coupleInfo.male;
    if (selectedPerson === "female") return coupleInfo.female;
    return null;
  };

  const getRole = () => {
    return selectedPerson === "male" ? "Chú rể" : "Cô dâu";
  };

  return (
    <>
      {/* ... existing CoupleInvite code ... */}

      {/* Thêm phần avatar có thể click vào đây */}
      <div className="flex justify-center gap-12 mt-12 mb-8">
        {/* Chú rể */}
        <div
          className="text-center cursor-pointer transform hover:scale-105 transition-transform duration-300 group"
          onClick={() => handleAvatarClick("male")}
        >
          <div className="w-28 h-28 mx-auto mb-3 relative">
            <img
              src={coupleInfo.male.avatar.src}
              alt={coupleInfo.male.fullName}
              className="w-full h-full object-cover rounded-full border-4 border-blue-300 group-hover:border-blue-400 transition-colors shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
          <p className="font-semibold text-blue-600 text-lg">
            {coupleInfo.male.fullName}
          </p>
          <p className="text-sm text-gray-500">Chú rể</p>
        </div>

        {/* Cô dâu */}
        <div
          className="text-center cursor-pointer transform hover:scale-105 transition-transform duration-300 group"
          onClick={() => handleAvatarClick("female")}
        >
          <div className="w-28 h-28 mx-auto mb-3 relative">
            <img
              src={coupleInfo.female.avatar.src}
              alt={coupleInfo.female.fullName}
              className="w-full h-full object-cover rounded-full border-4 border-pink-300 group-hover:border-pink-400 transition-colors shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-pink-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
          <p className="font-semibold text-pink-600 text-lg">
            {coupleInfo.female.fullName}
          </p>
          <p className="text-sm text-gray-500">Cô dâu</p>
        </div>
      </div>
    </>
  );
}
