"use client";

import { CoreMessage } from "ai";
import { useState } from "react";
import { continueConversation } from "../actions";
import { readStreamableValue } from "ai/rsc";
import Image from "next/image";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState("");

  return (
    <section className="flex flex-col w-full items-center pb-28">
      <div className="flex flex-col gap-4 w-full py-4 px-4 max-w-2xl">
        {messages.map((message, id) => (
          <div
            key={id}
            className="flex w-full max-w-[75%] items-center gap-4 odd:self-start odd:justify-start even:self-end even:justify-end even:mb-4"
          >
            {message.role === "user" ? (
              <>
                <div className=" px-4 py-3 rounded-lg  bg-[#2563eb] text-white">
                  <p>{message.content as string}</p>
                </div>
              </>
            ) : (
              <>
                <Image
                  src="/images/chatbot.png"
                  alt="Assistant logo"
                  width={30}
                  height={30}
                />
                <div className=" px-4 py-3 rounded-lg bg-[#f1f5f9]">
                  <p>{message.content as string}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <form
        className="w-full text-center"
        onSubmit={async (e) => {
          e.preventDefault();
          const newMessages: CoreMessage[] = [
            ...messages,
            { content: input, role: "user" },
          ];

          setMessages(newMessages);
          setInput("");

          const result = await continueConversation(newMessages);

          for await (const content of readStreamableValue(result)) {
            setMessages([
              ...newMessages,
              { role: "assistant", content: content as string },
            ]);
          }
        }}
      >
        <div className="fixed bottom-0 w-full bg-white">
          <input
            className="py-4 px-4 mb-4 w-full max-w-xl border border-gray-500 rounded-full outline-none focus:outline"
            value={input}
            placeholder="Say something..."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}
