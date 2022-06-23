const openDrodpwn = document.querySelector('.open-dropdown');
const cabinetdropdownContent = document.querySelector('.cabinet__dropdown-content');

openDrodpwn.addEventListener('click' , (e)=>{
    cabinetdropdownContent.classList.toggle('active')
})

const dropdownBtn = document.querySelectorAll('.dropdown__button');

dropdownBtn.forEach(el => {
    el.addEventListener('click' , (e)=>{
        dropdownBtn.forEach(btn => {
            btn.classList.remove('active')
        })
        el.classList.toggle('active')
    })
});

const fixedClose = document.querySelector('.cabinet__fixed-close');
const cabinetFixed = document.querySelector('.cabinet__fixed');

fixedClose.addEventListener('click', (e)=>{
    cabinetFixed.classList.toggle('hidden')
})