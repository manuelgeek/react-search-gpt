export const TypingIndicator = () => (
  <div className="col-start-1 col-end-8 p-3 rounded-lg">
    <div className="flex flex-row items-center">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
        A
      </div>
      <div className="relative ml-3 text-sm dark:bg-blue-900 py-2 px-4 shadow rounded-xl">
        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          typing...
        </div>
      </div>
    </div>
  </div>
)