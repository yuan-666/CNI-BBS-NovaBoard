import service from "@/utils/axios";
import { LoginDTO } from "@/types/auth/login/loginDTO";

export async function loginAction(loginRequest: LoginDTO) {
  return await service({
    url: "/user/open/login",
    method: "post",
    data: loginRequest,
  });
}

export async function logoutAction(id: string) {
  return await service({
    url: "/user/open/logout/" + id,
    method: "get",
  });
}
