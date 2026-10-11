import WordCounter from './WordCounter';
import TextCaseConverter from './TextCaseConverter';
import RemoveExtraSpaces from './RemoveExtraSpaces';
import ReadingTime from './ReadingTime';
import SentenceCounter from './SentenceCounter';
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="/" className="logo">
          TextTools
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#tools">All Tools</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Explore Tools
        </button>
      </nav>

      <main>
        <section className="hero">
          <span className="hero-badge">
            Simple Tools. Better Writing.
          </span>

          <h1>
            All Your Text Tools,
            <span> In One Place.</span>
          </h1>

          <p>
            Free online tools to count words, clean text,
            change letter cases and make writing easier.
          </p>

          <a href="#tools" className="hero-button">
            Explore All Tools →
          </a>
        </section>

        <section className="tools-section" id="tools">
          <div className="section-heading">
            <div>
              <h2>Explore Our Tools</h2>
              <p>Everything you need to work with text.</p>
            </div>
          </div>

          <div className="tools-grid">
            <article className="tool-card">
              <div className="tool-icon">Aa</div>
              <h3>Word Counter</h3>
              <p>Count words, characters and paragraphs.</p>
              <a href="#word-counter">Use Tool →</a>
            </article>

            <article className="tool-card">
              <div className="tool-icon">Aa</div>
              <h3>Case Converter</h3>
              <p>Convert text to uppercase or lowercase.</p>
              <a href="#case-converter">Use Tool →</a>
            </article>

            <article className="tool-card">
              <div className="tool-icon">Tx</div>
              <h3>Remove Extra Spaces</h3>
              <p>Clean unwanted spaces from your text.</p>
              <a href="#remove-spaces">Use Tool →</a>
            </article>

            <article className="tool-card">
              <div className="tool-icon">◷</div>
              <h3>Reading Time</h3>
              <p>Estimate how long your text takes to read.</p>
              <a href="#reading-time">Use Tool →</a>
            </article>

            <article className="tool-card">
              <div className="tool-icon">¶</div>
              <h3>Sentence Counter</h3>
              <p>Count the sentences in your writing.</p>
              <a href="#sentence-counter">Use Tool →</a>
            </article>
          </div>
        </section>

        <WordCounter />
        <TextCaseConverter />
        <RemoveExtraSpaces />
        <ReadingTime />
        <SentenceCounter />
        <section className="about-section" id="about">
          <h2>Writing Made Simple</h2>
          <p>
            TextTools brings useful writing utilities together
            in one simple place. Free to use, right in your browser.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 TextTools. All rights reserved.</p>
        <p>Simple tools for everyday writing.</p>
      </footer>
    </div>
  )
}

export default App
