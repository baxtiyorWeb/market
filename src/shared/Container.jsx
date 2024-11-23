/* eslint-disable react/prop-types */
export default function Container({ children }) {
  return (
    <div className="xs:w-[1200px]3xs:w-full relative m-auto h-full   w-auto   border  px-3   md:w-full lg:w-full lg_min_c:w-[1410px]">
      {children}
    </div>
  );
}
