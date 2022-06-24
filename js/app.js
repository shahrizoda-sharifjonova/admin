const fixedClose = document.querySelector('.cabinet__fixed-close');
const cabinetFixed = document.querySelector('.cabinet__fixed');

fixedClose.addEventListener('click',(e)=>{
    cabinetFixed.classList.toggle('hidden')
})