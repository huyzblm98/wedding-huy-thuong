import Image from "next/image";

export function Thanks() {
  return (
    <>
      <div className="thanks-wrapper flex flex-col items-center justify-center w-full bg-[url('/images/bg/footer-shape.png')] bg-[length:100%] bg-local bg-no-repeat relative">
        <div className="w-full h-full lg:w-1/2 lg:h-1/2">
          <Image
            className="w-full h-full"
            src="/images/footer_shape.png"
            width={1200}
            height={1200}
            alt="Love"
          ></Image>
        </div>
        <div
          className={
            "absolute top-[70%] -translate-y-1/2 text-center font-[Dancing_Script]"
          }
        >
          <p className="text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold italic text-[#E91E63]">
            Thank You!
          </p>
          <p className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-semibold italic mt-2 text-[#E91E63]">
            -Quang Huy & Hoài Thương-
          </p>
        </div>
      </div>
    </>
  );
}
