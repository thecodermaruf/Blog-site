import App from "@/App";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";
import Blog from "@/components/ui/Blog/blog";
import Contact from "@/components/ui/Contact/contact";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: BackgroundPattern,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/",
        // Component: ,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

export default router;
