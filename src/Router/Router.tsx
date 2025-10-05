import App from "@/App";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "hero",
        Component: BackgroundPattern,
      },
    ],
  },
]);

export default router;
