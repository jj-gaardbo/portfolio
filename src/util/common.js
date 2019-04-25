import * as constant from "../styles/base/constants.js"

import iconWeb from "../images/icons/web.svg"
import iconAnimation from "../images/icons/animation.svg"
import iconsGraphics from "../images/icons/graphics.svg"
import iconsSchool from "../images/icons/school.svg"
import iconsMusic from "../images/icons/music.svg"

import frame1 from "../images/frames/frame1.png"
import frame2 from "../images/frames/frame2.png"
import frame3 from "../images/frames/frame3.png"
import frame4 from "../images/frames/frame4.png"
import frame5 from "../images/frames/frame5.png"
import frame6 from "../images/frames/frame6.png"

import pattern1 from "../images/patterns/1.svg"
import pattern2 from "../images/patterns/2.svg"
import pattern3 from "../images/patterns/3.svg"
import pattern4 from "../images/patterns/4.svg"
import pattern5 from "../images/patterns/5.svg"
import pattern6 from "../images/patterns/6.svg"
import pattern7 from "../images/patterns/7.svg"

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
  {console.log(hex)}
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

export function getRandomFrame(){
  let frames = [frame1, frame2, frame3, frame4, frame5, frame6];
  let chosenFrameIndex = Math.floor((Math.random() * 5) + 1);
  return frames[chosenFrameIndex]
}

export function getRandomComicPattern(){
  let patterns = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6, pattern7];
  let chosenPatternIndex = Math.floor((Math.random() * 6) + 1);
  return patterns[chosenPatternIndex]
}
