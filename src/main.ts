import './theme/index.scss'

import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import MdFile from './files/component.md'

const md = new MarkdownIt({
    highlight: (content, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, content, true).value
        }
    }
})

const result = await fetch(MdFile)
const content = await result.text()

const app = document.querySelector('#app')!
app.className = 'markdown-theme'
app.innerHTML = md.render(content)
