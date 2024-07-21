"use server";

import { createStreamableValue } from "ai/rsc";
import { CoreMessage, streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function continueConversation(messages: CoreMessage[]) {
  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    system:
      `You are an assistant to a medical doctor who wants to diagnose a patient. ` +
      `Your job is to interview the patient, ` +
      `get the patient's medical history asking only one question at a time ` +
      `so the collected information can be made available to the doctor for diagnosis. ` +
      `At the end of the session, appreciate the user for successfully giving you the information you requested for.`,
    messages,
  });

  const stream = createStreamableValue(result.textStream);
  return stream.value;
}
