import 'uikit-css'
import 'slideshow-css'
import 'jquery'
import 'uikit-js'
import './assets/css/myUikit.css'

export default (Vue, options) => {
  Vue.prototype.$ui = window.UIkit
}
