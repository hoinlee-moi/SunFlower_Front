import { UserInputProps } from "./../etc/TypeColletion";
import React, { useState, useCallback } from "react";

export default (initalValue:any): UserInputProps => {
  const [data, setData] = useState(initalValue);

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof data === "string") {
        setData(e.target.value);
        return;
      }
      const { value, name } = e.target;
      setData((data: any) => ({ ...data, [name]: value }));
    },
    [data]
  );
  return [data, handler];
};
