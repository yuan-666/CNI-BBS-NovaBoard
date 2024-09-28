"use client";

import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { toast } from "sonner";
// @ts-ignore
import { useRouter } from "next/navigation";

import LoginLayout from "@/app/auth/login/layout";
import { title } from "@/components/primitives";
import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { loginAction } from "@/app/auth/login/action";
import { BaseResponse } from "@/types";
import { setCookie } from "@/utils/cookies";
import { userInfoCookie } from "@/common/auth/constant";

export default function LoginPage() {
  const router = useRouter();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: "",
    loginType: "password",
    rememberMe: "0",
  });

  async function clickToLogin() {
    loginAction(loginRequest).then((res: BaseResponse) => {
      console.log("login Result:", res);
      if (res.success === true) {
        // 判断后端返回数据是否有错
        if (res.data) {
          toast.success("login success");
          router.push("/");
          console.log("cookie", JSON.stringify(res.data));
          // setCookie(userInfoCookie, JSON.stringify(res.data));
        } else {
          toast.error("服务器异常，请重试！");
        }
      } else {
        toast.error("登录失败，请重试");
      }
    });
  }

  return (
    <LoginLayout>
      <div className="flex flex-row gap-5">
        <div className="animate__animated animate__lightSpeedInRight">
          <div>
            <h1 className={title()}>Welcome</h1>
            <div className="max-w-80 mb-5 mt-5">
              To Keep connected with up please login with your personal
              information by email address and password
            </div>
          </div>
          <div className="flex max-w-[300px] flex-wrap gap-4">
            <form className="flex max-w-[300px] flex-wrap gap-4">
              <Input
                autoComplete="username"
                label="Username"
                type="text"
                value={loginRequest.username}
                onValueChange={(value) => {
                  setLoginRequest({
                    ...loginRequest,
                    username: value,
                  });
                }}
              />
              <Input
                autoComplete="current-password"
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                label="Password"
                type={isVisible ? "text" : "password"}
                value={loginRequest.password}
                onValueChange={(value) => {
                  setLoginRequest({
                    ...loginRequest,
                    password: value,
                  });
                }}
              />
            </form>
            <Checkbox className="size-1/11">Remember Me</Checkbox>
            <Link className="size-1/11" href="#">
              Forget Password？
            </Link>
            <Button color="primary" onPress={clickToLogin}>
              Login
            </Button>
            <Button color="primary" variant="bordered">
              Registry
            </Button>
            <div className="flex-col">
              <div>Or you can login with</div>
              <br />
              <div>
                <Link isExternal href={siteConfig.links.twitter}>
                  <TwitterIcon className="text-default-500" />
                </Link>
                <Link isExternal href={siteConfig.links.discord}>
                  <DiscordIcon className="text-default-500 ml-2" />
                </Link>
                <Link isExternal href={siteConfig.links.github}>
                  <GithubIcon className="text-default-500 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}