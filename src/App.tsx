// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg"
import "./App.css"
import { useSearchGpt } from "./hooks/useSearchGpt"
import { TypingIndicator } from "./components/TypingIndicator"
import { ChatLeft } from "./components/ChatLeft"
import { ChatRight } from "./components/ChatRight"
import { ChatInput } from "./components/ChatInput"
import { useRef } from "react"
import { useScrollToBottom } from "./hooks/useAutoScroll"

function App() {
  const { isTyping, handleSendRequest, messages } = useSearchGpt()
  const scrollRef = useRef<HTMLDivElement | null>(null)
  useScrollToBottom(scrollRef.current, messages)
  useScrollToBottom(scrollRef.current, isTyping)

  // Ensure that this <div> is added after the scrolling content
  // return <div ref={scrollRef} />

  return (
    <div className="flex h-screen antialiased text-gray-800 flex-col">
      <div className="w-full justify-center">
        <div className="flex justify-center flex-col items-center">
          <img src={viteLogo} alt="img" className="w-12 mb-2" />
          <h1 className="w-full text-center text-white font-bold">
            Real Search GPT
          </h1>
        </div>
      </div>
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full p-6 items-center">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 w-10/12">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages.map((message, i) =>
                    message.sender === "bot" ? (
                      <ChatLeft key={i} message={message} />
                    ) : (
                      <ChatRight key={i} message={message} />
                    )
                  )}
                  {isTyping && <TypingIndicator />}
                  <div ref={scrollRef} />
                </div>
              </div>
            </div>
            <ChatInput
              handleSendRequest={handleSendRequest}
              isTyping={isTyping}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
