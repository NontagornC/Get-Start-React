/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";

// Child component ที่ใช้ React.memo เพื่อป้องกันการ re-render เมื่อ props ไม่เปลี่ยน

function UseCallbackExample() {
  const [number, setNumber] = useState(0);
  const [someValue, setSomeValue] = useState(0);
  const [numberWithCallback, setNumberWithCallback] = useState<
    number | undefined
  >(undefined);

  const [useMock1, setMock1] = useState(1);
  const [useMock2, setMock2] = useState(1);

  const getTimestamp = () => new Date().getTime();

  const numberWithoutCallback = getTimestamp();

  const getNumber = useCallback(() => {
    setNumberWithCallback(getTimestamp());
  }, [someValue]);

  const handleCal = useCallback(() => {
    return useMock1 + useMock2;
  }, [useMock1]);

  return (
    <>
      <p>แบบไม่ใช้ useCallback: {numberWithoutCallback}</p>
      <hr />
      <p>แบบใช้ useCallback: {numberWithCallback}</p>
      <hr />
      <p>mock 1: {useMock1}</p>
      <hr />
      <p>mock 2: {useMock2}</p>
      <hr />
      <p>sum : {handleCal()}</p>
      ทดลองเปลี่ยนค่า (Number): {number}
      <br />
      <button
        onClick={() => {
          setMock1((prev) => ++prev);
        }}
      >
        เพิ่ม mock 1(+)
      </button>
      <button
        onClick={() => {
          setMock2((prev) => ++prev);
        }}
      >
        เพิ่ม mock 2(+)
      </button>
      <button
        onClick={() => {
          setNumber((prev) => ++prev);
        }}
      >
        เพิ่ม (+)
      </button>
      <button
        onClick={() => {
          setNumber((prev) => --prev);
        }}
      >
        ลด (-)
      </button>
      <hr />
      ทดลองเปลี่ยนค่า (Some value): {someValue}
      <br />
      <button
        onClick={() => {
          setSomeValue((prev) => ++prev);
          getNumber();
        }}
      >
        เพิ่ม (+)
      </button>
      <button
        onClick={() => {
          setSomeValue((prev) => --prev);
          getNumber();
        }}
      >
        ลด (-)
      </button>
    </>
  );
}

export default UseCallbackExample;
