
import { useState } from 'react'

function TextCaseConverter() {
  const [text, setText] = useState('')

  function convertCase(type) {
    if (type === 'upper') {
      setText(text.toUpperCase())
    }

    if (type === 'lower') {
      setText(text.toLowerCase())
    }

    if (type === 'title') {
      setText(
        text.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase())
      )
    }

    if (type === 'sentence') {
      setText(
        text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, letter =>
          letter.toUpperCase()
        )
      )
    }
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
    <section className="case-converter" id="case-converter">
      <div className="case-heading">
        <h2>Text Case Converter</h2>
        <p>Change your text into different letter cases.</p>
      </div>

      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Enter your text here..."
        rows={6}
      />

      <div className="case-buttons">
        <button onClick={() => convertCase('upper')} disabled={!text}>
          UPPERCASE
        </button>

        <button onClick={() => convertCase('lower')} disabled={!text}>
          lowercase
        </button>

        <button onClick={() => convertCase('title')} disabled={!text}>
          Title Case
        </button>

        <button onClick={() => convertCase('sentence')} disabled={!text}>
          Sentence case
        </button>
      </div>

      <button className="case-copy" onClick={copyText} disabled={!text}>
        Copy Text
      </button>
    </section>
  )
}

export default TextCaseConverter
