import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function InView() {
  const ref = useRef(null);
  // once : true to run animation one time
  const inView = useInView(ref, {once: true});
  useEffect(() => {
    console.log("inView", inView);
  }, [inView]);

  return (
    <div className="">
      <div className="h-[100vh]"></div>
      {/* normal inView */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className=" h-[100vh] bg-black "
      ></motion.div>


      {/* using useInView Hook and we can take decision using useInView Hook value */}
      <motion.div ref={ref} className={` h-[100vh] ${inView ? 'bg-green-600' : 'bg-red-600'}`}></motion.div>
    </div>
  );
}

export default InView;
