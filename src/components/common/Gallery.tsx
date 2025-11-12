"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SectionTitle } from "@/components/shareds/SectionTitle";
import { motion } from "framer-motion";

export function Gallery() {
  const [galleries] = useState(Array(9).fill(0));

  return (
    <section className="container mx-auto" id="album">
      <div className="w-full mx-auto py-20 px-3">
        {/* Header */}
        <div className="flex flex-col w-full mb-10 lg:mb-20 items-center">
          <SectionTitle title="Album Ảnh Cưới" />
          <div className="text-center mt-4">
            <q className="italic md:text-lg lg:text-xl font-[Dancing_Script]">
              Tình yêu từ người khác mang đến cho ta sức mạnh, còn tình yêu ta
              dành cho người khác mang đến cho ta sự dũng cảm.
            </q>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 gap-4">
          {galleries.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden relative cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <Image
                src={`/images/galleries/${index + 1}.jpg`}
                alt={`Love ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
