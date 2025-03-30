
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hey! I’m your One Sphere assistant. What do you need done?' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }])
    setInput('')
  }

  return (
    <div className="container">
      <Head>
        <title>One Sphere Assistant</title>
      </Head>
      <main>
        <h1 className="title">One Sphere</h1>
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={\`bubble \${msg.role}\`}>{msg.text}</div>
          ))}
        </div>
        <div className="input-bar">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Speak or type..." />
          <button onClick={sendMessage}>Send</button>
        </div>
      </main>
    </div>
  )
}
