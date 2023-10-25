export function initialPageLoader(pageContent){
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("main-content-container");
    container.appendChild(pageContent);
    
    container.appendChild(pageContent);
    content.appendChild(createMenuBar().menuBar);
    content.appendChild(container);
    content.appendChild(createFooter().footer);
}

const menuList = [
    "Home", "About"
];

function createMenuBar(){
    
    const logo = document.createElement("div");
    logo.classList.add("menu-logo");
    logo.textContent = "Logo";

    const rightMenu = document.createElement("div");
    rightMenu.classList.add("right-menu");

    for(let i = 0; i < menuList.length; i++){
        const item = document.createElement("div");
        item.classList.add("menu-item");
        item.setAttribute("data-menu-type", menuList[i]);
        item.textContent = menuList[i];

        rightMenu.appendChild(item);
    }

    const menuBar = document.createElement("div");
    menuBar.classList.add("menu-bar");
    menuBar.appendChild(logo);
    menuBar.appendChild(rightMenu);

    return {
        menuBar
    }
}

function createFooter(){
    const ref = document.createElement("div");
    ref.classList.add("image-reference");
    ref.textContent = "https://www.pinterest.com/pin/357825132884937079/";

    const footer = document.createElement("div");
    footer.classList.add("footer");

    footer.appendChild(ref);

    return {
        footer
    }
}