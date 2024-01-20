import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { NavBar } from "./components";
import { ErrorPage } from "./components/ErrorPage";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Portfolio from "./pages/portfolio/portfolio.tsx";
import About from "./pages/about/about.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavBar />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Route>
    </>,
  ),
  { basename: "/presentation" },
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
