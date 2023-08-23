'use client';

import { Checkbox } from "@/util/checkbox";
import Image from "next/image";
import React, {  useState } from "react";

const DisplayData = ({ item, key }) => {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <tr key={key}>
    <td>
    <Checkbox
        value={checked}
        onChange={handleChange}
      />
    </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>
        <div className="flex">
          <Image
            src="/images/edit.png"
            height="20"
            width="20"
            alt="edit icon"
          />
          <Image
            src="/images/delete.png"
            height="20"
            width="20"
            alt="edit icon"
          />
        </div>
      </td>
    </tr>
  );
};

export default DisplayData;
