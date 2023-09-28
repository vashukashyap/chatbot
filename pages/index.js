import { useState } from "react"
import Head  from "next/head"



export default function MyPage() {
  const [prompt, setPrompt] = useState("")
  const [answer, setAnswer] = useState("")
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("/api/get-answer", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    })
    setMessages( arr => [...arr, `${prompt}`]);
    const data = await response.json()
    setAnswer(data.text.trim())
    setIsLoading(false)
    setMessages( arr => [...arr, `${data.text.trim()}`]);
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  return (
    
    <div className="container">
      <h1>Don't take stress, Use Mental health Advisor!</h1>
      <form className="our-form" onSubmit={handleSubmit}>
        <input className="prompt-field" type="text" onChange={handleChange} />
        <button className="prompt-button">Send</button>
      </form>
      <ul>
      {messages.map((message) => <li className="messages answer-area"> <span>{message}</span> </li>)}
      </ul>
      {isLoading && <div className="loading-spinner"></div>}

    </div>
  )
}
