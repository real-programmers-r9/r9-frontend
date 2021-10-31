import { useState } from "react";

export default function useDaumAdress() {
  const [address, setAddress] = useState(""); // 우편번호
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소

  const onCompletePost = (data: any) => {
    console.log(data);
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

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
  };

  return {
    address,
    addressDetail,
    onCompletePost,
  };
}
