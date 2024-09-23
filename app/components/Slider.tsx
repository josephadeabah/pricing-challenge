"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { twMerge } from "tailwind-merge";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={twMerge(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-300/20">
      <SliderPrimitive.Range className="absolute h-full bg-teal-200" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="relative block h-8 w-8 cursor-pointer rounded-full bg-teal-200 shadow-lg transition-colors focus-visible:outline-none focus:bg-teal-500 focus-visible:ring-1 focus-visible:ring-teal-500 disabled:pointer-events-none disabled:opacity-50">
      <div className="flex justify-center items-center h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="13"
          className=""
        >
          <g fill="#DAFFFB" fillRule="evenodd">
            <path d="M6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="13"
          className="transform rotate-180"
        >
          <g fill="#DAFFFB" fillRule="evenodd">
            <path d="M6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
          </g>
        </svg>
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
