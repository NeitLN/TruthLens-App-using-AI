import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { HomeScreen } from "./components/HomeScreen";
import { LoadingScreen } from "./components/LoadingScreen";
import { ResultScreen } from "./components/ResultScreen";
import { DetailAnalysisScreen } from "./components/DetailAnalysisScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { HistoryScreen } from "./components/HistoryScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomeScreen />,
      },
      {
        path: "/history",
        element: <HistoryScreen />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
      },
      {
        path: "/loading",
        element: <LoadingScreen />,
      },
      {
        path: "/result/:id",
        element: <ResultScreen />,
      },
      {
        path: "/detail/:id",
        element: <DetailAnalysisScreen />,
      },
    ],
  },
]);
