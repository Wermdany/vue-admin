import type { SelfRouteMap } from "#/route";

const map: SelfRouteMap = {
  LOGIN: {
    component: () => import("@/views/login/pages/login.vue"),
    describe: "登录页面"
  }
};

export default map;
