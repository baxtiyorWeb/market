import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryTab = () => {
  const [tab, setTab] = useState(1);

  const tabKeys = (index) => {
    setTab(index);
  };

  const items = [
    {
      tabKey: 1,
      label: "Electronika ",
    },
    {
      tabKey: 2,
      label: "Mexanika",
    },
    {
      tabKey: 3,
      label: "Kiyimlar",
    },
    {
      tabKey: 4,
      label: "Akksesuarlar",
    },
    {
      tabKey: 5,
      label: "Qurilish",
    },
    {
      tabKey: 6,
      label: "Avtotovarlar",
    },
    {
      tabKey: 7,
      label: "o'yinchoqlar",
    },
    {
      tabKey: 8,
      label: "Xobbi ",
    },
    {
      tabKey: 9,
      label: "sport",
    },
    {
      tabKey: 10,
      label: "Poyabzallar",
    },
    {
      tabKey: 11,
      label: "Texnika",
    },
  ];

  return (
    <div className="ml-3 p-5">
      <div className="tab-wrapper h-full w-full ">
        <div className="tab-panel flex h-[50px] w-full items-center">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  tab === item.tabKey
                    ? `tab-key  flex h-full w-auto cursor-pointer items-center justify-center border-b-2 border-[#1D828E] transition-all duration-500`
                    : "tab-key  flex h-full w-auto cursor-pointer items-center justify-center border-b-2 border-transparent "
                }
                onClick={() => tabKeys(item.tabKey)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div>
          <div className={tab === 1 ? "active" : "tabs"}>
            <div className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Aksesuarlar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">kompyuter jihozlar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Akkumlayotlar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Qurilish mollari</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Electromobillar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
          </div>
          <div className={tab === 2 ? "active" : "tabs"}>
          <div className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">kompyuter jihozlari</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">akkumulyator</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Akkumlayotlar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Electromobillar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Qurilish mollari</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Qurilish mollari</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
            <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Qurilish mollari</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
          </div>
          <div className={tab === 3 ? "active" : "tabs"}>
          <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">kiyimlar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
              </ul>
            </div>
          </div>
          <div className={tab === 4 ? "active" : "tabs"}>
          <div  className="tab-elements">
              <h1 className="text-teal-700 text-2xl not-italic font-medium">Aksesuarlar</h1>
              <ul>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-5"><Link>Akkumulyatorlar uchun zaryadlovchi qurilmalari</Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Oʻt oldirish simlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link> Avtomobil akkumulyatori aksessuarlari </Link> </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Akkumulyator klemmalari</Link>  </li>
                <li className="text-gray-900 text-[16px] not-italic font-normal mt-3"><Link>Elektrmobillar uchun zaryadlash stantsiyalari</Link>  </li>
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
