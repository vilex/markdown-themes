import './theme/index.scss'
// import 'highlight.js/styles/default.css'

import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import MdFile from './files/component.md'


const md = new MarkdownIt({
    highlight: (content, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return `<pre class="hljs"><code>${hljs.highlight(lang, content, true).value}</code></pre>`
        }
    }
})

const result = await fetch(MdFile)
const content = await result.text()

const app = document.querySelector('#app')!
app.className = 'markdown-theme'
app.innerHTML = md.render(content)
