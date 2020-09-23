const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#toggled-section')
let toggledSection = false;
menuBtn.addEventListener('click', function () {
        if (!toggledSection) {
            nav.classList.add('open');
            toggledSection = true;
} else {
    nav.classList.remove('open');
    toggledSection = false;
}
});