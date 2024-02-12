import React from "react";

export default function Action() {
  return (
    <>
      <button
        class="border-input hover:bg-accent hover:text-accent-foreground mr-10 inline-flex h-11 items-center justify-center rounded-md border bg-white px-8 text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none"
        type="button"
      >
        Bekor qilish
      </button>
      <button
        class="ring-offset-background inline-flex h-11 items-center justify-center rounded-md bg-[#1d828e] px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-in-out hover:bg-emerald-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        type="submit"
      >
        E’lonni yuklash
      </button>
    </>
  );
}
