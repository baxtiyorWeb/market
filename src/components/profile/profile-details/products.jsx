import { Input } from "antd";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="p-3">
      <div className="mb-3 flex h-[80px] w-full items-center justify-between">
        <Input
          placeholder="mahsulotni qidiring"
          className="mr-5 h-[50px] w-[400px]"
        />
        <Link
          className="flex h-[50px]  items-center justify-center rounded-md bg-[#1D828E] p-5 text-white"
          to={"/product-form/add-product"}
        >
          Mahsulot qo&apos;shish
        </Link>
      </div>
      <table className="h-full w-full">
        <thead className="h-14 bg-[#E2E2E2] text-[13px]  font-semibold shadow-md">
          <tr>
            <th>Surati</th>
            <th>mahsulot nomi</th>
            <th>narxi</th>
            <th>sana</th>
            <th>ko&apos;rilgan</th>
            <th>harakat</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="relative top-5 ">
          <tr className="mb-10 border-b hover:bg-gray-200/50">
            <td>
              <img
                className="h-[100px] w-[100px]"
                src="https://assets.asaxiy.uz/product/items/desktop/fc2c7c47b918d0c2d792a719dfb602ef2023101816401026153pvOl2XiSmL.png.webp"
                alt=""
              />
            </td>
            <td>iPhone 12 Pro Max (Original)</td>
            <td>9 041 000 UZS </td>
            <td>02.02.22 | 15:33</td>
            <td>412 marta</td>
            <td className="">
              <span className="flex items-center justify-center">
                <FaHeart className="mr-3" /> <b className="">2</b>
              </span>
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr className="mb-10 border-b hover:bg-gray-200/50">
            <td>
              <img
                className="h-[100px] w-[100px]"
                src="https://assets.asaxiy.uz/product/items/desktop/fc2c7c47b918d0c2d792a719dfb602ef2023101816401026153pvOl2XiSmL.png.webp"
                alt=""
              />
            </td>
            <td>iPhone 12 Pro Max (Original)</td>
            <td>9 041 000 UZS </td>
            <td>02.02.22 | 15:33</td>
            <td>412 marta</td>
            <td className="">
              <span className="flex items-center justify-center">
                <FaHeart className="mr-3" /> <b className="">2</b>
              </span>
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr className="mb-10 border-b hover:bg-gray-200/50">
            <td>
              <img
                className="h-[100px] w-[100px]"
                src="https://assets.asaxiy.uz/product/items/desktop/fc2c7c47b918d0c2d792a719dfb602ef2023101816401026153pvOl2XiSmL.png.webp"
                alt=""
              />
            </td>
            <td>iPhone 12 Pro Max (Original)</td>
            <td>9 041 000 UZS </td>
            <td>02.02.22 | 15:33</td>
            <td>412 marta</td>
            <td className="">
              <span className="flex items-center justify-center">
                <FaHeart className="mr-3" /> <b className="">2</b>
              </span>
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr className="mb-10 border-b hover:bg-gray-200/50">
            <td>
              <img
                className="h-[100px] w-[100px]"
                src="https://assets.asaxiy.uz/product/items/desktop/fc2c7c47b918d0c2d792a719dfb602ef2023101816401026153pvOl2XiSmL.png.webp"
                alt=""
              />
            </td>
            <td>iPhone 12 Pro Max (Original)</td>
            <td>9 041 000 UZS </td>
            <td>02.02.22 | 15:33</td>
            <td>412 marta</td>
            <td className="">
              <span className="flex items-center justify-center">
                <FaHeart className="mr-3" /> <b className="">2</b>
              </span>
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr className="mb-10 border-b hover:bg-gray-200/50">
            <td>
              <img
                className="h-[100px] w-[100px]"
                src="https://assets.asaxiy.uz/product/items/desktop/fc2c7c47b918d0c2d792a719dfb602ef2023101816401026153pvOl2XiSmL.png.webp"
                alt=""
              />
            </td>
            <td>iPhone 12 Pro Max (Original)</td>
            <td>9 041 000 UZS </td>
            <td>02.02.22 | 15:33</td>
            <td>412 marta</td>
            <td className="">
              <span className="flex items-center justify-center">
                <FaHeart className="mr-3" /> <b className="">2</b>
              </span>
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
