
import { useState } from 'react'

function WordCounter() {
  const [text, setText] = useState('')

  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const characters = text.length
  const charactersWithoutSpaces = text.replace(/\s/g, '').length
  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter(sentence => sentence.trim()).length
    : 0
  const paragraphs = text.trim()
    ? text.split(/\n+/).filter(paragraph => paragraph.trim()).length
    : 0

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text)
      alert('Text copied successfully!')
    } catch {
      alert('Text copy nahi ho saka.')
    }
  }

  return (
    <section className="word-counter" id="word-counter">
      <div className="counter-heading">
        <h2>Word Counter</h2>
        <p>Count words, characters and more instantly.</p>
      </div>

      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Type or paste your text here..."
        rows={8}
      />

      <div className="counter-actions">
        <button onClick={copyText} disabled={!text}>
          Copy Text
        </button>
        <button onClick={() => setText('')} disabled={!text}>
          Clear Text
        </button>
      </div>

      <div className="counter-stats">
        <div className="stat-card">
          <span>Words</span>
          <strong>{words}</strong>
        </div>
        <div className="stat-card">
          <span>Characters</span>
          <strong>{characters}</strong>
        </div>
        <div className="stat-card">
          <span>No Spaces</span>
          <strong>{charactersWithoutSpaces}</strong>
        </div>
        <div className="stat-card">
          <span>Sentences</span>
          <strong>{sentences}</strong>
        </div>
        <div className="stat-card">
          <span>Paragraphs</span>
          <strong>{paragraphs}</strong>
        </div>
      </div>
    </section>
  )
}

export default WordCounter
