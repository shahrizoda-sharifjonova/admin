const openDrodpwn = document.querySelector('.open-dropdown');
const cabinetdropdownContent = document.querySelector('.cabinet__dropdown-content');
const dropdownClose = document.querySelector('.dropdownClose');

openDrodpwn.addEventListener('click' , (e)=>{
    cabinetdropdownContent.classList.toggle('active')
    dropdownClose.classList.toggle('active')
    dropdownClose.addEventListener('click', (e)=>{
        cabinetdropdownContent.classList.remove('active')
        dropdownClose.classList.remove('active')
    })
})

const dropdownBtn = document.querySelectorAll('.dropdown__button');

dropdownBtn.forEach(el => {
    el.addEventListener('click' , (e)=>{
        dropdownBtn.forEach(btn => {
            btn.classList.remove('active')
        })
        el.classList.toggle('active')
        dropdownClose.classList.toggle('active')
        dropdownClose.addEventListener('click', (e)=>{
            dropdownBtn.forEach(btn => {
                btn.classList.remove('active')
                dropdownClose.classList.remove('active')
            })
        })
    })
});

const fixedClose = document.querySelector('.cabinet__fixed-close');
const cabinetFixed = document.querySelector('.cabinet__fixed');

fixedClose.addEventListener('click', (e)=>{
    cabinetFixed.classList.toggle('hidden')
})

const headerDropdownBtn = document.querySelectorAll('.header__dropdown-btn');
const headerDropdownContent = document.querySelectorAll('.header__dropdown-content');

headerDropdownBtn.forEach(el => {
    el.addEventListener('click' , (e)=>{
        headerDropdownBtn.forEach(btn => {
            btn.classList.remove('active')
        })
        el.classList.toggle('active')
        dropdownClose.classList.toggle('active')
        dropdownClose.addEventListener('click', (e)=>{
            headerDropdownBtn.forEach(btn => {
                btn.classList.remove('active')
            })
        })
    })
});
