"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import { useEffect, useRef, useState } from "react";

// 定义 props 类型
interface ChatMessageProps {
  message: string; // 指定 message 的类型为 string
}

export default function ChatPage() {
  const divRef = useRef<HTMLDivElement | null>(null); // 创建 ref
  const [divHeight, setDivHeight] = useState<number>(0); // 状态存储高度

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight); // 获取高度并更新状态
    }
  }, []); // 组件挂载时获取一次高度
  const messages = [
    { text: "Hello, how can I help you?", side: "left" },
    {
      text: "Make beautiful websites regardless of your design experience.",
      side: "right",
    },
    { text: "Feel free to ask any questions!", side: "left" },
    {
      text: "Make beautiful websites regardless of your design experience.",
      side: "right",
    },
    { text: "Feel free to ask any questions!", side: "left" },
    {
      text: "Make beautiful websites regardless of your design experience.",
      side: "right",
    },
    { text: "Feel free to ask any questions!", side: "left" },
    {
      text: "Make beautiful websites regardless of your design experience.",
      side: "right",
    },
    { text: "Feel free to ask any questions!", side: "left" },
    {
      text: "Make beautiful websites regardless of your design experience.",
      side: "right",
    },
    { text: "Feel free to ask any questions!", side: "left" },
  ];

  const LeftChat: React.FC<ChatMessageProps> = ({ message }) => (
    <div className="justify-start grid mt-3 mb-3 ml-6">
      <Card isPressable className="w-full">
        <CardBody className="w-full">
          <span>{message}</span>
        </CardBody>
      </Card>
    </div>
  );

  const RightChat: React.FC<ChatMessageProps> = ({ message }) => (
    <div className="w-full justify-end grid mt-3 mb-3">
      <Card isPressable className="w-full">
        <CardBody className="w-full">
          <span>{message}</span>
        </CardBody>
      </Card>
    </div>
  );

  return (
    <div className="w-full flex flex-col h-full">
      <div
        ref={divRef}
        className="h-4/5 max-h-[485px] overflow-y-auto scroll-hidden"
      >
        <div>
          {messages.map((msg, index) =>
            msg.side === "left" ? (
              <LeftChat key={index} message={msg.text} /> // 使用左侧聊天组件
            ) : (
              <RightChat key={index} message={msg.text} /> // 使用右侧聊天组件
            ),
          )}
        </div>
      </div>

      <Textarea
        className="h-1/5"
        labelPlacement="outside"
        maxRows={3}
        placeholder="Enter message"
      />
    </div>
  );
}
