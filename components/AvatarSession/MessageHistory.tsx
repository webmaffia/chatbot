import React, { useEffect, useRef } from "react";

import { useMessageHistory, MessageSender } from "../logic";

export const MessageHistory: React.FC = () => {
  const { messages } = useMessageHistory();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || messages.length === 0) return;

    container.scrollTop = container.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] overflow-y-auto flex flex-col gap-2 px-2 py-2 text-white self-center max-h-[70vh] jashMsg"
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex flex-col gap-1 max-w-[85vw] sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[350px] ${
            message.sender === MessageSender.CLIENT
              ? "self-end items-end JashQue"
              : "self-start items-start avatarAnsJash"
          }`}
        >
          <p className="text-xs text-black">
            {message.sender === MessageSender.AVATAR ? "VIRA" : "You"}
          </p>
          <p className="text-sm">{message.content}</p>
        </div>
      ))}
    </div>
  );
};
