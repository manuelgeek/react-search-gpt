import { useState } from "react"
import { Message } from "./type"
// import { chats } from "./chats"

export const useSearchGpt = () => {
  const [messages, setMessages] = useState<Message[]>([
    // ...chats,
    {
      message: "Hello, I'm Real Estate Assistant! Ask me anything!",
      sender: "bot",
      direction: "outgoing",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSendRequest = async (message: string) => {
    const newMessage: Message = {
      message,
      direction: "incoming",
      sender: "user",
    }
    console.log('ddddd')

    setMessages((prevMessages) => [...prevMessages, newMessage])
    setIsTyping(true)

    try {
      const response = await processMessageToChatGPT([...messages, newMessage])
      const content = response.choices[0]?.message?.content
      if (content) {
        const chatGPTResponse: Message = {
          message: content,
          sender: "bot",
          direction: "incoming",
        }
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse])
      }
    } catch (error) {
      console.error("Error processing message:", error)
    } finally {
      setIsTyping(false)
    }
  }

  async function processMessageToChatGPT(chatMessages: Message[]) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "bot" ? "assistant" : "user"
      return { role, content: messageObject.message }
    })

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "I'm a Student using ChatGPT for learning",
        },
        ...apiMessages,
      ],
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })

    return response.json()
  }

  console.log({messages})

  return {
    isTyping,
    handleSendRequest,
    messages,
  }
}
