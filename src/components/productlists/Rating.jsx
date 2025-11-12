"use client";
import React from "react";
import { RadioGroup, useRadio, VisuallyHidden } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";

const radioOptions = ["1", "2", "3", "4", "5"];

const CustomRadio = (props) => {
  const { Component, getBaseProps, getInputProps, getControlProps } = useRadio(props);
  const isActive = parseInt(props.value) <= props.rating;

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <FaStar
        {...getControlProps()}
        size={18}
        className={`transition-all duration-300 drop-shadow-sm 
          ${isActive ? "text-yellow-400" : "text-white/30"} 
          group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,120,0.7)]`}
      />
    </Component>
  );
};

export const Rating = ({ rating = 0, peoplerated = 0 }) => {
  return (
    <div className="flex items-center gap-2">
      <RadioGroup
        orientation="horizontal"
        isReadOnly
        classNames={{
          wrapper: "flex flex-row items-center gap-1",
        }}
      >
        {radioOptions.map((option) => (
          <CustomRadio
            key={option}
            value={option}
            rating={rating}
            className="cursor-default"
          />
        ))}
      </RadioGroup>
      <p className="text-sm text-white/60 font-medium">{`(${peoplerated})`}</p>
    </div>
  );
};
