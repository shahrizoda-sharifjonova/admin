const openDrodpwn = document.querySelector('.open-dropdown');
const cabinetdropdownContent = document.querySelector('.cabinet__dropdown-content');

openDrodpwn.addEventListener('click' , (e)=>{
    cabinetdropdownContent.classList.toggle('active')
})

const dropdownBtn = document.querySelectorAll('.dropdown__button');

dropdownBtn.forEach(el => {
    el.addEventListener('click' , (e)=>{
        el.classList.toggle('active')
    })
});