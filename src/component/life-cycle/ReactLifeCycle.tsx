import { useState, useEffect } from "react";

const ReactLifeCycle = () => {
  console.log("1. Component Function ทำงาน (เริ่ม Render)");

  const [count, setCount] = useState(0);
  console.log("2. State ถูกสร้าง/อ่านค่า");

  useEffect(() => {
    console.log("ทำงานตอน mount เท่านั้น (componentDidMount)");
    console.log("4. Component ติดตั้งเสร็จสมบูรณ์ (componentDidMount)");

    return () => {
      console.log("ทำงานเมื่อ unmount หรือ component ถูกทำลาย");
      console.log("🔴 UNMOUNT: Child Component กำลังถูกทำลาย (Unmount)");
      console.log(
        "🧹 CLEANUP: ทำความสะอาดทรัพยากร เช่น ยกเลิก subscription, timer, etc."
      );
    };
  }, []);

  useEffect(() => {
    console.log(
      "ทำงานตอน mount และทุกครั้งที่ dependencies เปลี่ยน (componentDidUpdate)"
    );
    console.log("5. Component อัพเดต เมื่อ count เปลี่ยน (componentDidUpdate)");
    console.log(`   Count เปลี่ยนจาก เป็น ${count}`);
  }, [count]);

  useEffect(() => {
    console.log("ทำงานทุกครั้งที่ re-render");
  });

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  console.log("3. เตรียมสร้าง JSX สำหรับ render");

  return (
    <div className="lifecycle-demo flex flex-col gap-4">
      <h2>React Life Cycle Demo</h2>

      <div className="lifecycle-info">
        <p>Count: {count}</p>
      </div>

      <div className="lifecycle-actions">
        <button onClick={handleIncrement}>เพิ่ม Count</button>
      </div>

      <div className="lifecycle-phases">
        <h3>สรุปวงจรชีวิตของ React:</h3>
        <ol>
          <li>
            <strong>Mounting:</strong> Component ถูกสร้างและแสดงครั้งแรก
          </li>
          <li>
            <strong>Updating:</strong> Component ถูกอัพเดตเมื่อ props หรือ state
            เปลี่ยน
          </li>
          <li>
            <strong>Unmounting:</strong> Component ถูกนำออกจาก DOM
          </li>
        </ol>
      </div>
    </div>
  );

  // Phase 3: Unmounting - จะทำงานเมื่อ Component ถูกนำออกจาก DOM
  // การ cleanup จะทำงานผ่าน return function ใน useEffect
};

export default ReactLifeCycle;
