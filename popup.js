const contact = document.querySelector('#contact_info')
const contact_popup = document.querySelector('.popup')
const close_btn = document.querySelector('.close')
const dark_background = document.querySelector('.dark_background')

function contactInfo(){
  contact_popup.style.display = 'block';
  dark_background.style.display = 'block';
}

function close_popup(){
  contact_popup.style.display = 'none';
  dark_background.style.display = 'none';
}

contact.addEventListener('click', contactInfo)
close_btn.addEventListener('click', close_popup)