import * as constant from "../styles/base/constants.js"

import iconWeb from "../images/icons/web.svg"
import iconAnimation from "../images/icons/animation.svg"
import iconsGraphics from "../images/icons/graphics.svg"
import iconsSchool from "../images/icons/school.svg"
import iconsMusic from "../images/icons/music.svg"

export function getImagePath(path,image) {
  return path+"/"+image;
}

export function getCategoryObject(cat) {
  let object = {
    "name":"",
    "icon":"",
    "color":""
  }
  switch (cat) {
    case 'web':
      object.name = "Web development"
      object.icon = iconWeb
      object.color = constant.babyBlue
      break
    case 'music':
      object.name = "Music"
      object.icon = iconsMusic
      object.color = constant.gray
      break
    case 'school':
      object.name = "School project"
      object.icon = iconsSchool
      object.color = constant.brown
      break
    case 'animation':
      object.name = "Animation"
      object.icon = iconAnimation
      object.color = constant.blueGray
      break
    case 'graphics':
      object.name = "Computer Graphics"
      object.icon = iconsGraphics
      object.color = constant.blue
      break
  }

  return object
}

export function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  let r = 255 - parseInt(hex.slice(0, 2), 16)
  let g = 255 - parseInt(hex.slice(2, 4), 16)
  let b = 255 - parseInt(hex.slice(4, 6), 16)
  if(r < 127 && g < 127 || g < 127 && b < 127 || b < 127 && r < 127){
    return constant.black
  } else {
    return constant.darkWhite
  }

}
