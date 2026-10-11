
import { useState } from 'react'

function SentenceCounter() {
  const [text, setText] = useState('')

  const sentences = text.trim()
    ? text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.filter(
        sentence => sentence.trim()
      ).length || 0
    : 0

  const words = text.trim()
    ? text.trim().split(/\s+/).length
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
    <section className="sentence-tool" id="sentence-counter">
      <div className="sentence-heading">
        <h2>Sentence Counter</h2>
        <p>Count sentences and words in your text.</p>
      </div>

      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Paste or type your text here..."
        rows={7}
      />

      <div className="sentence-stats">
        <div className="sentence-stat">
          <span>Sentences</span>
          <strong>{sentences}</strong>
        </div>

        <div className="sentence-stat">
          <span>Words</span>
          <strong>{words}</strong>
        </div>
      </div>

      <div className="sentence-actions">
        <button onClick={copyText} disabled={!text}>
          Copy Text
        </button>

        <button onClick={() => setText('')} disabled={!text}>
          Clear Text
        </button>
      </div>
    </section>
  )
}

export default SentenceCounter
