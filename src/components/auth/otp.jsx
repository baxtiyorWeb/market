import { Divider, Steps } from "antd";
import React, { useState } from "react";
import InputNumberDetector from "../../ui/input/InputNumberDetector";
import CreateOtp from "./createOtp";
const { Step } = Steps;
const Otp = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <Divider>
        <Steps
          direction="horizontal"
          current={current}
          responsive
          onChange={(e) => setCurrent(e)}
        >
          <Step title="raqamingizni kiriting">
            <h1>1</h1>
          </Step>
          <Step title="sms ni tasdiqlang">
            <h1>2</h1>
          </Step>
          <Step title="login parol  kiriting">
            <h1>3</h1>
          </Step>
        </Steps>
      </Divider>
      <Divider>
        {current === 0 && (
          <Divider>
            <InputNumberDetector setCurrent={setCurrent} />
          </Divider>
        )}
        {current === 1 && (
          <Divider>
            <CreateOtp />
          </Divider>
        )}
        {current === 2 && <h1>ok {current}</h1>}
      </Divider>
    </div>
  );
};

export default Otp;
