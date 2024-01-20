import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => (
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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        No projects yet.
      </motion.p>
    </Container>
  </div>
);

export default Portfolio;
