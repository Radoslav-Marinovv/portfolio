const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Radoslav Marinov.
        <a href="/files/Radoslav-Marinov-Resume.pdf">Radoslav-Marinov-Resume</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          font-size: large;
          float: right;
        }
      `}</style>
    </footer>
  ),
}
