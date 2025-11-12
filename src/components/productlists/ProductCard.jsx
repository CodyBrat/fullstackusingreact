import React from "react";
import { Button, Image } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa";
import { Rating } from "./Rating";

export function ProductCard({ product, index }) {
  const baseImgUrl =
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes";

  return (
    <div
      className="relative flex flex-col w-[340px] rounded-3xl overflow-hidden 
                 bg-white/5 backdrop-blur-xl border border-white/10
                 shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_45px_rgba(0,0,0,0.35)]
                 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group"
      style={{
        fontFamily: "'Stack Sans Headline', sans-serif",
      }}
    >
      {/* --- Product Image --- */}
      <div className="relative h-60 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-slate-400/5 to-transparent blur-3xl group-hover:opacity-90 opacity-60 transition-all duration-700" />
        <Image
          alt={product.title}
          src={`${baseImgUrl}/${index + 1}.png`}
          removeWrapper
          className="relative z-10 h-44 w-auto object-contain transition-transform duration-700 
                     group-hover:scale-110 group-hover:-translate-y-2"
        />

        {/* Wishlist Button */}
        <button
          className="absolute top-4 right-4 z-20 flex items-center justify-center 
                     w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 
                     backdrop-blur-md border border-white/20 transition-all duration-300"
        >
          <FaHeart
            className={`transition-transform duration-300 ${
              product.isInWishlist
                ? "text-red-400 scale-110 drop-shadow-[0_0_10px_rgba(255,120,120,0.7)]"
                : "text-white/70 group-hover:text-white"
            }`}
          />
        </button>
      </div>

      {/* --- Product Info --- */}
      <div className="flex flex-col justify-between flex-grow text-white px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold leading-tight tracking-tight text-white/90">
            {product.title}
          </h3>
          <p className="text-base font-semibold text-gray-300">
            ${product.price}
          </p>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <Rating rating={product.rating} peoplerated={product.peopleRated} />
        </div>

        {/* --- Button --- */}
        <Button
          fullWidth
          radius="lg"
          className={`text-white font-semibold tracking-wide transition-all duration-300
            ${
              product.isAddedToCart
                ? "bg-gray-600/40 hover:bg-gray-600/60 backdrop-blur-md"
                : "bg-gray-700/40 hover:bg-gray-700/60 backdrop-blur-md"
            }`}
        >
          {product.isAddedToCart ? "View Cart" : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
}
