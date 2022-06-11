import HeaderOnly from "~/layouts/HeaderOnly";
import config from "~/config";
import Following from "~/pages/Follwing";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

const publicRoutes = [
  {
    path: config.route.home,
    component: Home,
  },
  {
    path: config.route.following,
    component: Following,
  },
  {
    path: config.route.profile,
    component: Profile,
  },
  {
    path: config.route.upload,
    component: Upload,
    layout: HeaderOnly,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
