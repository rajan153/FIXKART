"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // include "initial" so we can animate back
  const [direction, setDirection] = useState<
    "initial" | "top" | "bottom" | "left" | "right"
  >("initial");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const d = getDirection(event, ref.current);
    switch (d) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const handleMouseLeave = () => {
    // animate back to initial state (you can also set "exit" here)
    setDirection("initial");
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    // normalized direction calc — keeps behavior for non-square cards
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - w / 2;
    const y = ev.clientY - top - h / 2;
    // angle -> 0..3
    const d = Math.round((Math.atan2(y, x) / (Math.PI / 2)) + 4) % 4;
    return d;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
      // animate toward the current direction variant
      animate={direction}
      initial="initial"
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative h-full w-full">
        {/* overlay */}
        <div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
        <motion.div
          variants={variants}
          className="h-full w-full relative bg-gray-50 dark:bg-black"
        >
          <img
            alt="image"
            className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
            width={1000}
            height={1000}
            src={imageUrl}
          />
        </motion.div>

        <motion.div
          variants={textVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn("text-white absolute bottom-4 left-4 z-40", childrenClassName)}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

const variants = {
  initial: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

const textVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: 2, opacity: 1 },
  left: { x: -2, opacity: 1 },
  right: { x: 20, opacity: 1 },
};
