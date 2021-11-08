import { useState } from "react";

export type UseDaumAdress = [string, string, (data: any) => void];

export default function useDaumAdress(): UseDaumAdress {
  const [zonecode, setZonecode] = useState(""); // 우편번호
  const [address, setAddress] = useState(""); // 상세주소

  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setZonecode(data.zonecode);
    setAddress(fullAddr);
  };

  return [zonecode, address, onCompletePost];
}
