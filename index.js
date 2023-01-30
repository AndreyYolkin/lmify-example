import { createCommonJS } from 'mlly'
import { resolve } from 'pathe' 

const { require } = createCommonJS(import.meta.url)

const { install, setPackageManager, setRootDir } = require('lmify')

setPackageManager('npm')
setRootDir(resolve(process.cwd() + '/testingnpm'))
install('lodash')