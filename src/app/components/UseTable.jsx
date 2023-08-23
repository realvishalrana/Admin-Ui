import React from "react";
import DisplayData from "./DisplayData";

const UseTable = ({res}) => {
  return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {res.map((item) => (
            <DisplayData item={item} key={item.id} />
          ))}
        </tbody>
      </table>
  );
};

export default UseTable;
