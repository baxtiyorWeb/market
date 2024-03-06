import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "./../../config/api/api";
const CategoryTab = () => {
  const [tab, setTab] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategory = async () => {
    try {
      setLoading(true);
      const res = await api.get("/category/all");
      setItems(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  const tabKeys = (index) => {
    setTab(index);
  };

  // const items = [
  //   {
  //     tabKey: 1,
  //     label: "Electronika ",
  //   },
  //   {
  //     tabKey: 2,
  //     label: "Mexanika",
  //   },
  //   {
  //     tabKey: 3,
  //     label: "Kiyimlar",
  //   },
  //   {
  //     tabKey: 4,
  //     label: "Akksesuarlar",
  //   },
  //   {
  //     tabKey: 5,
  //     label: "Qurilish",
  //   },
  //   {
  //     tabKey: 6,
  //     label: "Avtotovarlar",
  //   },
  //   {
  //     tabKey: 7,
  //     label: "o'yinchoqlar",
  //   },
  //   {
  //     tabKey: 8,
  //     label: "Xobbi ",
  //   },
  //   {
  //     tabKey: 9,
  //     label: "sport",
  //   },
  //   {
  //     tabKey: 10,
  //     label: "Poyabzallar",
  //   },
  //   {
  //     tabKey: 11,
  //     label: "Texnika",
  //   },
  // ];

  return (
    <div className="ml-3 h-[100%] w-full p-5">
      <div className="tab-wrapper h-full w-full ">
        {/* <div className="flex justify-center items-center ">
          <input type="text" className="p-2  mb-5 w-[400px] border outline-none rounded-md "  placeholder="kategoriya ichidan qidiring"/>
        </div>  */}
        <div className="tab-panel flex h-[50px] w-full items-center">
          {items.data?.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  tab === index + 1
                    ? `tab-key flex  h-full w-auto cursor-pointer select-none items-center justify-center  border-b-2 border-[#1D828E] transition-all duration-500`
                    : "tab-key flex h-full w-auto cursor-pointer select-none items-center justify-center border-b-2 border-transparent "
                }
                onClick={() => tabKeys(index + 1)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div>
          <div className={tab === 1 ? "active" : "tabs"}>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Aksesuarlar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                kompyuter jihozlar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Akkumlayotlar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Qurilish mollari
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Electromobillar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={tab === 2 ? "active" : "tabs"}>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                kompyuter jihozlari
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                akkumulyator
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                akkumulyator
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                akkumulyator
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                akkumulyator
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Akkumlayotlar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Electromobillar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Qurilish mollari
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Qurilish mollari
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Qurilish mollari
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={tab === 3 ? "active" : "tabs"}>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                kiyimlar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={tab === 4 ? "active" : "tabs"}>
            <div className="tab-elements">
              <h1 className="text-2xl font-medium not-italic text-teal-700">
                Aksesuarlar
              </h1>
              <ul>
                <li className="mt-5 text-[16px] font-normal not-italic text-gray-900 hover:text-teal-700">
                  <Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Oʻt oldirish simlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link> Avtomobil akkumulyatori aksessuarlari </Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Akkumulyator klemmalari</Link>{" "}
                </li>
                <li className="mt-3 inline-block text-[16px] font-normal not-italic text-gray-900 hover:text-teal-500">
                  <Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={tab === 5 ? "active" : "tabs"}>
            <h1>Qurilish</h1>
          </div>

          <div className={tab === 6 ? "active" : "tabs"}>
            <h1>Avtotovarlar</h1>
          </div>
          <div className={tab === 7 ? "active" : "tabs"}>
            <h1>Bolalar Tovarlari</h1>
          </div>
          <div className={tab === 8 ? "active" : "tabs"}>
            <h1>Xobbi va ijod</h1>
          </div>
          <div className={tab === 9 ? "active" : "tabs"}>
            <h1>sport va xordiq</h1>
          </div>
          <div className={tab === 10 ? "active" : "tabs"}>
            <h1>Poyabzallar</h1>
          </div>
          <div className={tab === 11 ? "active" : "tabs"}>
            <h1>Texnika</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTab;
