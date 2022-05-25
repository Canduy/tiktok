import HeaderOnly from "~/component/Layout/HeaderOnly";
import routes from "~/config/route.";
import Following from "~/pages/Follwing";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.following,
    component: Following,
  },
  {
    path: routes.profile,
    component: Profile,
  },
  {
    path: routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
