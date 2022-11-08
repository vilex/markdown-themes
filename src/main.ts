import MarkdownIt from 'markdown-it'
import MdFile from './files/component.md'
import './themes/sneh/sneh.scss'

const mi = new MarkdownIt()

const html = mi.render(MdFile)

fetch(MdFile)
    .then(
        res => res.text()
            .then(
                content => app!.innerHTML = mi.render(content)
            )
    )


const app = document.querySelector('#app')
app!.className = 'md-sneh'