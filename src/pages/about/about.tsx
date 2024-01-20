import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./UnderlineAnimation.module.scss";

const About: React.FC = () => {
  const calculate_age = (dob: string): number => {
    try {
      const birthDate = new Date(dob);
      const difference = Date.now() - birthDate.getTime();
      const age = new Date(difference);
      return Math.abs(age.getUTCFullYear() - 1970);
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const info = {
    firstName: "Cristiano",
    lastName: "Martins",
    age: calculate_age("1996-01-21"),
  };

  const { firstName, lastName, age } = info;

  return (
    <div className="w-screen">
      <Container>
        <Link to="/">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-lg font-extrabold	 transition-all  duration-300 ease-in-out hover:text-xl hover:text-blue-600 dark:hover:text-blue-400"
          >
            Homepage
          </motion.p>
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.p
            className="mt-6 leading-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
          >
            Hello, my name is {firstName} {lastName}, and I'm
            <span> {age}</span> years old. I live in Amiais de Baixo, a village
            near Santarém and I'm doing this website to train my programming and
            development skills.
          </motion.p>
          <p className="mt-10	text-left text-lg text-blue-800 dark:text-blue-400">
            For more info check out my CV:{" "}
            <span
              className={`${styles.underline} after:bg-black dark:after:bg-white`}
            >
              <a
                className="font-bold"
                href={"/presentation/pdf/CV_Cristiano(pt).pdf"}
                target="_blank"
              >
                PT
              </a>
            </span>{" "}
            |{" "}
            <span
              className={`${styles.underline} after:bg-black dark:after:bg-white`}
            >
              <a
                className="font-bold"
                href={"/presentation/pdf/CV_Cristiano(en).pdf"}
                target="_blank"
              >
                EN
              </a>
            </span>
          </p>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;
