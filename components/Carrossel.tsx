import Image from "next/image";
import { lazy, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CarrosselImages = [
  "/assets/images/carrossel1.png",
  "/assets/images/carrossel2.png",
  "/assets/images/carrossel3.png",
  "/assets/images/carrossel4.png",
];

export function Carrossel() {
  const [step, setStep] = useState(0);
  console.log(step);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-center gap-4">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() =>
              step > 0 && step <= 3
                ? setStep((current) => current - 1)
                : setStep(3)
            }
            className="flex h-[48px] -mr-5 z-10 rounded-full py-4 px-4 bg-light"
          >
            <FiArrowLeft size={16} color="#8F50B6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                width={291}
                height={329}
                src={CarrosselImages[step] ?? "/assets/images/carrossel1.png"}
                alt={"Imagem do carrossel"}
                style={{ maxHeight: 329, borderRadius: 12 }}
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() =>
              step >= 0 && step < 3
                ? setStep((current) => current + 1)
                : setStep(0)
            }
            className="flex bg-light h-[48px] -ml-5 z-10 rounded-full py-4 px-4"
          >
            <FiArrowRight size={16} color="#8F50B6" />
          </button>
        </div>
      </div>
    </div>
  );
}
