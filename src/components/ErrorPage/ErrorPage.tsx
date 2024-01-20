import { motion } from "framer-motion";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  // Error message
  const error: any = useRouteError();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
      className="flex	h-screen flex-col  items-center justify-center	"
    >
      <h1 className="mb-5	text-7xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-5">
        <i>{error.statusText || error.message}</i>
      </p>
      <a
        href="/"
        className="font-black	hover:text-blue-700 dark:hover:text-blue-500"
      >
        Back to Home page
      </a>
    </motion.div>
  );
};

export default ErrorPage;
