"use client";

import { CoreMessage } from "ai";
import { FormEvent, useState } from "react";
import { continueConversation } from "../actions";
import { readStreamableValue } from "ai/rsc";
import Image from "next/image";
import Pulse from "../ui/Pulse";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([
    {
      role: "assistant",
      content:
        "Hello, please tell me, what brings you in to see the doctor today?",
    },
    // {
    //   role: "user",
    //   content: "I have a severe headache.",
    // },
    // {
    //   role: "assistant",
    //   content:
    //     "Hello, please tell me, what brings you in to see the doctor today?",
    // },
    // {
    //   role: "user",
    //   content: "I have a severe headache.",
    // },
    // {
    //   role: "assistant",
    //   content:
    //     "Hello, please tell me, what brings you in to see the doctor today?",
    // },
    // {
    //   role: "user",
    //   content: "I have a severe headache.",
    // },
    // {
    //   role: "assistant",
    //   content:
    //     "Hello, please tell me, what brings you in to see the doctor today?",
    // },
    // {
    //   role: "user",
    //   content: "I have a severe headache.",
    // },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <section className="flex flex-col w-full items-center pb-28">
      <div className="flex flex-col gap-4 w-full py-4 px-4 max-w-2xl">
        {messages.map((message, id) => (
          <div
            key={id}
            className="flex w-full max-w-[75%] items-center gap-4 odd:self-start odd:justify-start even:self-end even:justify-end even:mb-4"
          >
            {message.role === "user" ? (
              <div className=" px-4 py-3 rounded-lg  bg-[#2563eb] text-white">
                <p>{message.content as string}</p>
              </div>
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

        {isLoading && <Pulse />}
      </div>

      <form className="w-full text-center" onSubmit={handleSubmit}>
        <div className="fixed bottom-0 w-full bg-transparent backdrop-blur-md">
          <input
            className="py-4 px-4 mb-4 w-full bg-transparent max-w-xl border border-white rounded-full outline-none focus:ring-1 placeholder-slate-600 focus:ring-blue-50"
            value={input}
            placeholder="Say something..."
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </form>
    </section>
  );
}
