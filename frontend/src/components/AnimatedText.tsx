import { useEffect, useState } from 'react'

export const AnimatedText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (prevText.length < text.length) {
          return text.substring(0, prevText.length + 1)
        } else {
          clearInterval(interval)
          return prevText
        }
      })
    }, 100)

    return () => clearInterval(interval)
  }, [text])

  return <span className="text-4xl font-serif">{displayedText}</span>
}

export default AnimatedText
