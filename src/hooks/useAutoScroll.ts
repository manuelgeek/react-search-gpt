import { useEffect } from "react"

export const useScrollToBottom = (
  element: HTMLDivElement | null,
  data: any
) => {
  const scrollToBottom = () => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // console.log('tete')
    scrollToBottom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
}
