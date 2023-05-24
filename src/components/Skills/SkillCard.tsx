"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

import { PropsWithChildren } from "react";

export const SkillCard: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 1500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 1500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  let maskImage = useMotionTemplate`radial-gradient(120px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 border rounded-xl group md:gap-8 hover:border-gray-400 border-zinc-600 "
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0" />
        <motion.div
          className="absolute inset-0 z-10  bg-gradient-to-br opacity-0 bg-[#0065fa] group-hover:opacity-50 "
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
