import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import hljs from 'reveal.js/plugin/highlight/highlight.esm';
import 'reveal.js/plugin/highlight/monokai.css'
import './style.css'

if (document.querySelector("#app.presentation") !== null) {
  let deck = new Reveal({
    margin: 0.10,
    maxScale: 1.0,
    plugins: [Markdown, hljs],
  });
  deck.initialize();
} else {
  console.log("hello there")
}