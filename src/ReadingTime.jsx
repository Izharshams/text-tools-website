
import { useState } from 'react'

function ReadingTime() {
  const [text, setText] = useState('')

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0

  const readingSeconds = Math.ceil((words / 200) * 60)
  const minutes = Math.floor(readingSeconds / 60)
  const seconds = readingSeconds % 60

  return (
    <section className="reading-tool" id="reading-time">
      <div className="reading-heading">
        <h2>Reading Time Calculator</h2>
        <p>Estimate how long it takes to read your text.</p>
      </div>

      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        placeholder="Paste or type your text here..."
        rows={7}
      />

      <div className="reading-result">
        <div className="reading-stat">
          <span>Total Words</span>
          <strong>{words}</strong>
        </div>

        <div className="reading-stat">
          <span>Estimated Reading Time</span>
          <strong>
            {words === 0
              ? '0 sec'
              : minutes > 0
                ? `${minutes} min ${seconds} sec`
                : `${seconds} sec`}
          </strong>
        </div>
      </div>

      <p className="reading-note">
        Calculated at an average reading speed of 200 words per minute.
        Actual reading time may vary.
      </p>

      <button
        className="reading-clear"
        onClick={() => setText('')}
        disabled={!text}
      >
        Clear Text
      </button>
    </section>
  )
}

export default ReadingTime
