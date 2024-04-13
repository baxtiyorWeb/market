import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGenerateuuid from "../../hooks/useGenerateuuid";
export default function InputNumberDetector({ setCurrent }) {
  // const handleChange = (event) => {
  //   const input = event.target.value;
  //   // Remove non-digit characters from input
  //   const strippedInput = input.replace(/\D/g, "");
  //   formatNumber(strippedInput);
  //   console.log(strippedInput);
  // };

  // const formatNumber = (event) => {
  //   // Remove non-digit characters from input
  //   const strippedInput = event.replace(/\D/g, " ");
  //   // Format the phone number with spaces
  //   let formattedNumber = "";
  //   for (let i = 0; i < strippedInput.length; i++) {
  //     if (i === 2 || i === 5 || i === 8) {
  //       formattedNumber += " "; // Add space after every 2nd, 5th, and 8th digit
  //     }
  //     formattedNumber += strippedInput[i];
  //   }
  //   setPhone(formattedNumber);

  //   return phone;
  // };

  return <></>;
}
