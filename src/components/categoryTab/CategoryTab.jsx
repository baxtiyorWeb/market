import { Tabs } from "antd";

const CategoryTab = () => {
  function onChange(e) {
    console.log(e);
  }

  const items = [
    {
      key: "1",
      label: "Transport",
      children: "Ko'chmas mulk",
    },
    {
      key: "2",
      label: "Ish va Hizmatlar",
      children: "Ish va Hizmatlar",
    },
    {
      key: "3",
      label: "Ish va hizmatlar",
      children: "Ish va Hizmatlar 1",
    },
    {
      key: "4",
      label: "Uy bog', mebel",
      children: "Uy bog', mebel",
    },
    {
      key: "5",
      label: "Qurilish mollari",
      children: "Qurilish mollari",
    },
    {
      key: "6",
      label: "Ishlab chiqarish",
      children: "Ishlab chiqarish",
    },
    {
      key: "7",
      label: "Asbob uskunalar",
      children: "Asbob uskunalar",
    },
    {
      key: "8",
      label: "Shaxsiy buyumlar",
      children: "Shaxsiy buyumlar",
    },
    {
      key: "9",
      label: "Oshxona buyumlari",
      children: "Oshxona buyumlari",
    },
    {
      key: "10",
      label: "Akksesuarlar",
      children: "Akksesuarlar",
    },
    {
      key: "11",
      label: "Kiyimlar",
      children: "Kiyimlar",
    },
    {
      key: "12",
      label: "Avto tovarlar",
      children: "Avto tovarlar",
    },
    {
      key: "13",
      label: "Pyabzallar",
      children: "Pyabzallar",
    },
    {
      key: "14",
      label: "Sport va Hordiq",
      children: "Sport va Hordiq",
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        addIcon
        spellCheck
      />
    </div>
  );
};

export default CategoryTab;
