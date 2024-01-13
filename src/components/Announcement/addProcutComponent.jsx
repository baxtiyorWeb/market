import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "antd";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Container from "../../shared/Container";
export default function AddProductComponent() {
  const schema = yup.object().shape({
    test: yup.string().required("test input is required"),
  });

  //  form submit
  const onSubmit = (data) => {
    console.log(data);
  };


  // schema buil resolver
  const { handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <div className="mb-10 mt-[43px]">
        <h1 className="text font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]">
          Kvartira
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-3"
        >
          <div className="mb-10">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              To’liq ism
            </span>
            <input
              type="text"
              className="focus:border-[1px_solid_rgb(59 130 246)] mt-2 h-[50px] w-[334px] shrink-0 rounded-[5px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none "
              placeholder="Imomova Mohizoda"
            />
          </div>
          <div className="mb-10">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              E-mail
            </span>
            <input
              type="text"
              className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="imomovamohizoda@gmail.com"
            />
          </div>
          <div className="mb-10">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              Telefon nomer
            </span>
            <input
              type="text"
              className="mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none"
              placeholder="+998900158502"
            />
          </div>
          <div className="mb-10 w-[334px]">
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              Kategoriyani tanlang
            </span>
            {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
            <Select
              style={{
                width: "100%",
                height: "50px",
                marginTop: "8px",
                borderRadius: "10px",
              }}
              defaultActiveFirstOption
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
              ]}
            />
          </div>
          <div className="mb-10 w-[334px]">
            {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              Hudud
            </span>
            <Select
              style={{
                width: "100%",
                height: "50px",
                marginTop: "8px",
                borderRadius: "10px",
              }}
              defaultActiveFirstOption
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
              ]}
            />
          </div>
          <div className="mb-10 w-[334px]">
            {/* {open && <ComboOverlay setOpen={setOpen} open={open} />} */}
            <span className="text font-poppins text-[14px] font-normal leading-[22px] text-black">
              Xonadonlar soni
            </span>
            <Select
              style={{
                width: "100%",
                height: "50px",
                marginTop: "8px",
                borderRadius: "10px",
              }}
              defaultActiveFirstOption
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
              ]}
            />
          </div>
        </form>
      </div>
    </Container>
  );
}
