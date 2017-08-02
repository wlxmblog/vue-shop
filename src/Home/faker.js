import HomePageData from './home.json'

var slider_img = require.context('./sliders', false, /\.(png|jpg|gif|svg)$/)
var list_img = require.context('./lists', false, /\.(png|jpg|gif|svg)$/)

HomePageData.sliders.forEach((x) => {
  x.img_url = slider_img('./' + x.img_url)
})
HomePageData.sliders.forEach((x) => {
  x.img_url = slider_img('./' + x.img_url)
})