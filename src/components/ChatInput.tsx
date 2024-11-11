import { useState } from "react"

export const ChatInput = ({
  handleSendRequest,
  isTyping,
}: {
  handleSendRequest: (message: string) => Promise<void>
  isTyping: boolean
}) => {
  const [message, setMessage] = useState<string>('')

  const handleSend = async () => {
    if (!message) {
      alert("input message")
      return
    }
    await handleSendRequest(message)
    setMessage('')
  }

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 bg-white"
            placeholder="ask a question"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.which === 13) {
                handleSend()
              }
            }}
            value={message}
          />
        </div>
      </div>
      <div className="ml-4">
        <button
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
          disabled={isTyping}
          onClick={handleSend}
        >
          <span>Send</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
