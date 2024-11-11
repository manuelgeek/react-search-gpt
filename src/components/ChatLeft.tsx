import { Message } from "../hooks/type"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism"


export const ChatLeft = ({ message }: { message: Message }) => (
  <div className="col-start-1 col-end-8 p-3 rounded-lg">
    <div className="flex flex-row items-center">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
        C
      </div>
      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl text-left">
        {/* <div>{message.message}</div> */}
        <ReactMarkdown
          remarkPlugins={[gfm]}
          components={{
            code(props) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { children, className, node, ...rest } = props
              const match = /language-(\w+)/.exec(className || "")
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={ghcolors}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {/* *React-Markdown* now supports ~strikethrough~. Thanks to gfm plugin. */}
          {message.message}
        </ReactMarkdown>
      </div>
    </div>
  </div>
)
