"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";

export const TestList = ({ list }) => {
  const [count, setCount] = useState(0);

  return (
    // <Button radius="full" onPress={() => setCount(count + 1)}>
    //   Count is {count} {results[0].title} d
    // </Button>
    <>
      {list.map((elem: any, idx: any) => {
        return (
          <div key={idx}>
            <span className="text-blue-900">{elem.title}</span>
            <span>{elem.content}</span>
          </div>
        );
      })}
    </>
  );
};
