import React from "react";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
 
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  import { cn } from "@/lib/utils"
  import { Slider } from "@/components/ui/slider"
import { SliderProps } from "@radix-ui/react-slider";
  
 export default function Faces({ className, ...props }: SliderProps){
  
    const [value, setValue] = useState(50);
   return  <><Avatar className="size-[600px]">
      <AvatarImage src="faces/1.JPG" alt="qwdwqdqwdqwd" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Button className="ml-20">next</Button>
    
    
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor="slider" className="text-sm font-medium text-gray-700">
          Value: {value}
        </label>
      </div>
      
      <div className="relative">
        <input
          type="range"
          id="slider"
          min={1}
          max={100}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
      </div>
      
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">1</span>
        <span className="text-xs text-gray-500">100</span>
      </div>
    </div>
    </>
  
 }