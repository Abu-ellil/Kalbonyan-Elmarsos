import  { useState, useEffect } from "react";
import '../style/totop.css'

const ToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollDistance = documentHeight - windowHeight;
    const scrollPercent = Math.round((scrollTop / scrollDistance) * 100);
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };




  const [circumference, setCircumference] = useState(0);
 let size = 60;
 let strokeWidth = 5;
 let progress = scrollPercent;
  useEffect(() => {
    const radius = size / 2;
    const circleCircumference = 2 * Math.PI * radius;
    setCircumference(circleCircumference);
  }, [size]);

  const progressOffset = circumference - (progress / 100) * circumference;



  return (
    <>
      {" "}
      <div
        className="to-top-button"
        style={{ opacity: scrollPercent > 10 ? .6 : 0 }}
      >
        <button
          onClick={scrollToTop}
        >
          <svg className="circular-progress" width={size} height={size}>
            <circle
              className="circular-progress-bg"
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - strokeWidth / 2}
              strokeWidth={strokeWidth}
            />
            <circle
              className="circular-progress-fill"
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - strokeWidth / 2}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
            />
          </svg>

          <span>Top</span>
          {/* <span className="scroll-percent">{scrollPercent}%</span> */}
        </button>
      </div>
    </>
  );
};

export default ToTopButton;
