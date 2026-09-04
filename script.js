const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

function sendMessage(e){
  e.preventDefault();
  alert('Thank you! Your message form is ready. Connect it to your email service before publishing.');
}
