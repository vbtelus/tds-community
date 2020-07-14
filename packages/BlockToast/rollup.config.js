import configure from '../../config/rollup.config'
import { dependencies } from './package.json'

export default configure({
  input: './BlockToast.jsx',
  dependencies,
})
