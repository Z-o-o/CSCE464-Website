const arrow_left = document.querySelector('#arrow_left')
const arrow_right = document.querySelector('#arrow_right')
const home_image = document.querySelector('#self_image')
// const contact = document.querySelector('#contact_info')
// const contact_popup = document.querySelector('.popup')
// const close = document.querySelector('.close')
// const dark_background = document.querySelector('.dark_background')

const IMG_COUNT = 5
let img_number = 0

function changeImageLeft(){
  img_number--;
  if (img_number < 0){
    img_number = (IMG_COUNT - 1);
  }
  home_image.setAttribute("src", "zen_imgs/" + img_number + ".jpg")
}

function changeImageRight(){
  img_number++;
  if (img_number > (IMG_COUNT - 1)){
    img_number = 0;
  }
  home_image.setAttribute("src", "zen_imgs/" + img_number + ".jpg")
}

// function contactInfo(){
//   contact_popup.style.display = 'block';
//   dark_background.style.display = 'block';
// }

// function close_popup(){
//   contact_popup.style.display = 'none';
//   dark_background.style.display = 'none';
// }

arrow_left.addEventListener('click', changeImageLeft)
arrow_right.addEventListener('click', changeImageRight)
//contact.addEventListener('click', contactInfo)
//close.addEventListener('click', close_popup)