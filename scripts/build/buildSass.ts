import sass from 'sass'
import path from 'path'
import fs from 'fs-extra'

const input = path.resolve('src/theme/index.scss');
const output = path.resolve('dist/index.css');
const outdir = `dist`

sass.compileAsync(input)
    .then(res => {
        fs.mkdirsSync(outdir)
        fs.writeFileSync(output, res.css)
    })
    .catch(err => console.error(err))
