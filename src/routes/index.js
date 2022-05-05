import HeaderOnly from "~/component/Layout/HeaderOnly";
import Following from "~/pages/Follwing";
import Home from "~/pages/Home";
import Upload from "~/pages/Upload";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
