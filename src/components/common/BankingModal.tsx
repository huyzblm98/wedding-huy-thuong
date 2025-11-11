// components/BankingModal.tsx
import Image from "next/image";
import { CoupleModel } from "@/types/couple";
import { useSearchParams } from "next/navigation";

interface BankingModalProps {
  coupleInfo: CoupleModel;
  onClose: () => void;
}

export function BankingModal({ coupleInfo, onClose }: BankingModalProps) {
  const searchParams = useSearchParams();
  const event = searchParams.get("e");

  // Xác định tài khoản nào sẽ hiển thị
  const isNhaGai = event === "1"; // event "1" là nhà gái
  const displayInfo = isNhaGai ? coupleInfo.female : coupleInfo.male;
  const title = isNhaGai ? "Cô Dâu" : "Chú Rể";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
          Thông Tin Mừng Cưới
        </h3>

        {/* Hiển thị thông tin dựa trên event parameter */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-lg mb-4 text-center text-gray-700">
            {title} - {displayInfo.fullName}
          </h4>
          <div className="text-center">
            <div className="mb-4">
              <Image
                src={displayInfo.bankQrCode.src}
                width={200}
                height={200}
                alt={`QR Code ${displayInfo.bankName}`}
                className="mx-auto border border-gray-200 rounded-lg"
              />
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong className="text-gray-700">Ngân hàng:</strong>{" "}
                {displayInfo.bankName}
              </p>
              <p>
                <strong className="text-gray-700">Số tài khoản:</strong>{" "}
                {displayInfo.bankAccountNumber}
              </p>
              <p>
                <strong className="text-gray-700">Chủ tài khoản:</strong>{" "}
                {displayInfo.bankOwnerName}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors font-medium"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}
