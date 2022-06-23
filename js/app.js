const openDrodpwn = document.querySelector('.open-dropdown');
const dropdownContent = document.querySelector('.cabinet__dropdown-content');

openDrodpwn.addEventListener('click' , (e)=>{
    dropdownContent.classList.toggle('active')
})