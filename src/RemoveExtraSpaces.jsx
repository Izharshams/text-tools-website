
import { useState } from 'react'

function RemoveExtraSpaces() {
  const [text, setText] = useState('')

  function cleanText() {
    const cleaned = text
      .split('\n')
      .map(line => line.trim().replace(/[ \t]+/g, ' '))
      .join('\n')

    setText(cleaned)
  }

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text)
      alert('Text copied successfully!')
    } catch {
      alert('Text copy nahi ho saka.')
    }
  }

  return (
    <section className="cleaner-section" id="remove-spaces">
      <div className="cleaner-heading">
        <h2>Remove Extra Spaces</h2>
        <p>Clean unnecessary spaces from your text in one click.</p>
      </div>

      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Paste your text here..."
        rows={7}
      />

      <div className="cleaner-actions">
        <button onClick={cleanText} disabled={!text}>
          Clean Text
        </button>

        <button onClick={copyText} disabled={!text}>
          Copy Text
        </button>

        <button onClick={() => setText('')} disabled={!text}>
          Clear
        </button>
      </div>
    </section>
  )
}

export default RemoveExtraSpaces
