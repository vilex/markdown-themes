import MarkdownIt from 'markdown-it'
import MdFile from './files/component.md'
import './theme/index.scss'

const mi = new MarkdownIt()

const result = await fetch(MdFile)
const content = await result.text()

const app = document.querySelector('#app')!
app.className = 'markdown-theme'
app.innerHTML = mi.render(content)