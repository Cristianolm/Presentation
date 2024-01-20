import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeButton } from "..";
import MenuBtn from "./MenuBtn";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { setDevice } from "../../redux/states/device.slice";
import { useDispatch } from "react-redux";
import styles from "./UnderlineAnimation.module.scss";
// MUI icons
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
  const windowWidth = useWindowDimensions();
  const dispatch = useDispatch();

  const mobileLayout: number = 1000;
  useEffect(() => {
    if (windowWidth <= mobileLayout) {
      dispatch(setDevice("Mobile"));
    } else {
      dispatch(setDevice("Desktop"));
    }
  }, [dispatch, windowWidth]);

  const [isChecked, setIChecked] = useState<boolean>(false);

  function handleClick() {
    setIChecked(!isChecked);
  }

  return (
    <>
      <header className="sticky top-0 z-20 flex h-12  w-screen justify-end overflow-hidden">
        <div className="flex w-1/3 items-center justify-center">
          <MenuBtn handleClick={handleClick} checkState={isChecked} />
        </div>
        <div className="flex w-1/3 items-center justify-end px-3 pr-6">
          <ThemeButton checkedValue={isChecked} />
        </div>
      </header>
      <div
        className={`fixed top-0 z-10  w-screen border-b-black bg-white transition-all  duration-300   ${
          isChecked ? "h-screen border-b-4" : "h-0 border-b-0"
        }`}
      >
        {isChecked ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
              className="absolute left-1/2 top-1/2 w-full -translate-x-1/2	 -translate-y-1/2 text-center  	 sm:w-11/12 "
            >
              <ul>
                <li className={styles.p}>
                  <Link to="/about" onClick={handleClick}>
                    <p
                      className={`${styles.underline} text-[48px] dark:text-black`}
                    >
                      About
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" onClick={handleClick}>
                    <p
                      className={`${styles.underline} text-[48px] dark:text-black`}
                    >
                      Portfolio
                    </p>
                  </Link>
                </li>
              </ul>
            </motion.div>

            <div className="absolute  bottom-10 left-1/2 flex -translate-x-1/2 -translate-y-1/2 ">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
              >
                <a
                  title="My Instagram account."
                  rel="noreferrer"
                  href="https://www.instagram.com/cristianolm96/"
                  target="_blank"
                >
                  <InstagramIcon
                    style={{ fill: "black" }}
                    sx={{ fontSize: 40 }}
                  />
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.35 }}
              >
                <a
                  title="My Linkedin account."
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/cristiano-martins-0ab8ba133/"
                  target="_blank"
                >
                  <LinkedInIcon
                    style={{ fill: "black" }}
                    sx={{ fontSize: 40 }}
                  />
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
              >
                <a
                  title="My GitHub account"
                  rel="noreferrer"
                  href="https://github.com/Cristianolm"
                  target="_blank"
                >
                  <GitHubIcon style={{ fill: "black" }} sx={{ fontSize: 40 }} />
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.45 }}
                className="email"
              >
                <a
                  title="Sende me a email"
                  href="mailto:cristianomartins96@hotmail.com"
                >
                  <EmailIcon style={{ fill: "black" }} sx={{ fontSize: 40 }} />
                </a>
              </motion.div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
