// OPEN MENU =========================================================
const openMenu = document.querySelector('.menu_btn');
openMenu.onclick = function () {
    let menu = document.querySelector('.menu_active');
    menu.classList.toggle('open_menu');
};
//====================================================================

// SEARCH ============================================================

document.querySelector('.search').addEventListener('click', function () {
    document.querySelector('.search').style.display = 'none';
    document.querySelector('.open_search').style.display = 'flex';
});

//===================================================================

// window_popUp_inner================================================

document.querySelector('.toCome').addEventListener('click', function () {
    document.querySelector('body').style.height = "100vh"
    document.querySelector('.window_popUp_inner').style.display = "flex";    
});

document.querySelector('.header_popup > img').addEventListener('click', function () {
    document.querySelector('body').style.height = "auto"
    document.querySelector('.window_popUp_inner').style.display = "none";  
})