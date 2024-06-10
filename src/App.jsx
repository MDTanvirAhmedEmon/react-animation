import { motion } from "framer-motion";

function App() {
  const myVariants = {
    hidden: { opacity: 0, x: "-100%" },
    show: { opacity: 1, x: 0 },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <>
      {/* <motion.div initial={{x: 0, rotate: 0, y: 0}} animate={{x: 100, rotate: 360, y: 200 }} transition={{ duration: 0.2 }} whileHover={{ scale: 1.1}} whileTap={{scale: 0.9}} 
      className=" w-80 h-24 bg-slate-500 cursor-pointer">
        
      </motion.div> */}

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 2 }}
        className=" w-80 h-24 bg-slate-500 cursor-pointer"
      ></motion.div>

      <motion.div
        variants={myVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 2 }}
        className=" w-80 h-24 bg-slate-500 cursor-pointer"
      ></motion.div>

      {/*  ====================================================== */}

      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className=" grid grid-cols-3 gap-8 mt-28"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className=" h-24 bg-slate-500 cursor-pointer"
        ></motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className=" h-24 bg-slate-500 cursor-pointer"
        ></motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className=" h-24 bg-slate-500 cursor-pointer"
        ></motion.div>
      </motion.div>
    </>
  );
}

export default App;
