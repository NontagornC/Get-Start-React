import { useState, useEffect } from "react";

function SubChild() {
  useEffect(() => {
    console.log("SubChild rendered");
    return () => {
      console.log("SubChild will unmount");
    };
  }, []);

  return <div>SubChild Component</div>;
}

function Child({ resetKey }: Readonly<{ resetKey: number }>) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Child rendered");
    return () => {
      console.log("Child will unmount");
    };
  }, [resetKey]);

  return (
    <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
      <p>Child Component</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <SubChild />
    </div>
  );
}

function Parent() {
  const [resetKey, setResetKey] = useState(0);
  const [toggleChild, setToggleChild] = useState(true);

  useEffect(() => {
    console.log("Parent rendered");
  }, [resetKey, toggleChild]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>This is the Parent Component.</p>

      <button onClick={() => setResetKey((prev) => prev + 1)}>
        Force Child Remount (Change Key)
      </button>
      <br />

      <button onClick={() => setToggleChild((prev) => !prev)}>
        Toggle Child
      </button>

      {toggleChild && <Child resetKey={resetKey} key={resetKey} />}
    </div>
  );
}

export default Parent;
