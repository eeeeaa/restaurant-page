import './css/style.css';
import { initialPageLoader } from "./pageLoader";
import { createHomePageContent } from './homePage';
import { createAboutPageContent } from './AboutPage';

const homePage = createHomePageContent();
const aboutPage = createAboutPageContent();

initialPageSetup();

function initialPageSetup() {
    initialPageLoader(homePage.container);
    setupListener();
}

function setupListener() {
    const menuArray = Array.from(document.querySelectorAll(".menu-item"));

    for (let i = 0; i < menuArray.length; i++) {
        const currentItem = menuArray[i];
        if (currentItem.getAttribute("data-menu-type") === "Home") {
            currentItem.addEventListener("click", (e) => {
                updateMainContentContainer(homePage);
            });
        }

        if (currentItem.getAttribute("data-menu-type") === "About") {
            currentItem.addEventListener("click", (e) => {
                updateMainContentContainer(aboutPage);
            });
        }
    }
}

function updateMainContentContainer(page){
    clearMainContentContainer();
    document.querySelector(".main-content-container").appendChild(page.container);
}

function clearMainContentContainer(){
    document.querySelector(".main-content-container").innerHTML = "";
}
