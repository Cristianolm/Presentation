import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { GridContent } from "../../components/GridContent";
import { RootState } from "../../redux/store";

const HomePage: React.FC = () => {
  const count = useSelector((state: RootState) => state.timesOut);

  const [isHeaderLoaded, setHeaderLoaded] = useState<{
    nameFirst: boolean;
    nameSecond: boolean;
    react1: boolean;
  }>({
    nameFirst: false,
    nameSecond: false,
    react1: false,
  });

  useEffect(() => {
    const nameFirstTimeout = setTimeout(() => {
      setHeaderLoaded((prevState) => ({
        ...prevState,
        nameFirst: true,
      }));
    }, count.fast4x);
    const nameSecondTimeout = setTimeout(() => {
      setHeaderLoaded((prevState) => ({
        ...prevState,
        nameSecond: true,
      }));
    }, count.fast2x);

    const reactTimeout = setTimeout(() => {
      setHeaderLoaded((prevState) => ({
        ...prevState,
        react1: true,
      }));
    }, count.mid8x);

    return () => {
      clearTimeout(nameFirstTimeout);
      clearTimeout(nameSecondTimeout);
      clearTimeout(reactTimeout);
    };
  }, [count.mid8x, count.fast2x, count.fast4x]);

  const authorClassName =
    "inline-block animate-nameSmooth  font-DMSansBold text-4xl min-[300px]:text-5xl min-[400px]:text-6xl sm:text-8xl md:text-9xl min-[900px]:text-[9.5rem] min-[1000px]:text-[11rem]";

  const firstName = Array.from("CRISTIANO").map((letter, index) => (
    <div key={index} className={authorClassName}>
      {letter}
    </div>
  ));

  const lastName = Array.from("MARTINS").map((letter, index) => (
    <div key={index} className={authorClassName}>
      {letter}
    </div>
  ));

  return (
    <>
      <div className="relative right-[20%] w-screen animate-aboutSmooth2 text-center font-DMSansBold   text-orange-600 dark:text-orange-400 sm:text-2xl">
        My name is
      </div>
      <div className=" w-screen justify-center text-center">
        {isHeaderLoaded["nameFirst"] ? <div>{firstName}</div> : null}
        {isHeaderLoaded["nameSecond"] ? <div>{lastName}</div> : null}
      </div>
      {isHeaderLoaded["nameSecond"] ? (
        <div>
          <div className="w-screen  animate-aboutSmooth2 text-center font-DMSansBold text-orange-600 dark:text-orange-400 sm:text-2xl">
            and ...
          </div>
        </div>
      ) : null}

      <div className="w-screen text-center md:mt-4">
        {isHeaderLoaded["react1"] ? (
          <>
            <TypeAnimation
              className="animate-aboutSmooth  font-DMSansBold text-blue-800 dark:text-blue-600 min-[300px]:text-3xl sm:text-4xl md:text-6xl"
              sequence={[
                "I'M A REACT DEVELOPER",
                3000,
                "I'M A GEOGRAPHER",
                4000,
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 100 }}
              deletionSpeed={{ type: "keyStrokeDelayInMs", value: 99 }}
              repeat={Infinity}
              cursor={false}
            />
            <main className="order-2 bg-gray-300 dark:bg-gray-400 sm:mt-2 md:mt-7">
              <motion.p
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="m-6 pt-6 font-semibold dark:text-black"
              >
                <span className="uppercase"> Check out my </span>
                <Link to={"/portfolio"}>
                  <span className="ml-2 mr-2 cursor-pointer rounded-full border-2 border-indigo-600 bg-gray-100 px-1 py-1	 text-2xl   font-bold uppercase tracking-widest text-blue-700  hover:bg-white  hover:text-blue-800 ">
                    portfolio
                  </span>
                </Link>
                {/* or enjoy some AI art. */}
              </motion.p>

              <GridContent />
            </main>
          </>
        ) : null}
      </div>
    </>
  );
};

export default HomePage;
