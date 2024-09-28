import service from "@/utils/axios";
import { LoginVo } from "@/types/auth/login/loginVo";

export async function loginAction(loginRequest: LoginVo) {
  return await service({
    url: "/user/open/login",
    method: "post",
    data: loginRequest,
  });
}

export async function logoutAction() {
  return await service({
    url: "/user/open/logout",
    method: "get",
  });
}
