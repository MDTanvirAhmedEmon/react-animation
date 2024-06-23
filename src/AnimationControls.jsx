import { motion, useAnimationControls } from "framer-motion";

function AnimationControls() {
  const controls = useAnimationControls();
  const handleAnimationButton = () => {
    controls.start('to')
  };
  return (
    <div className=" h-[100vh] ">
      <motion.div className=" h-full flex justify-center items-center">
        <div>
          <button onClick={handleAnimationButton} className=" bg-teal-600 text-white py-1 px-3 mb-7">Flip It</button>
          <motion.div variants={{
            initial: {
              rotate: '0deg'
            },
            to: {
              rotate: '360deg'
            }
          }}
          initial = 'initial'
          animate={controls}

          className=" bg-slate-200 w-64 h-64"> </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AnimationControls;
