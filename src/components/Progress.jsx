import { useState, useEffect } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 100));
    }, 1000);
    return () => clearInterval(interval); // cleanup function to clear the interval when the component is unmounted or the progress is 100 percent completed
  }, []);

  if (progress === 100) {
    return (
      <div
        className=" 
    text-2xl text-white bg-green-500 p-4 w-1/2 mx-auto mt-20 text-center rounded-lg
    "
      >
        Task completed!
      </div>
    );
  }

  return (
    <div>
      <div className="w-full mt-20 relative bg-gray-400 h-7">
        <div
          className=" bg-green-500 absolute h-7"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
