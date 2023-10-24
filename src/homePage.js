export function createHomePageContent(){
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Test headline";

    const restaurantImage = document.createElement("div");
    restaurantImage.classList.add("restaurant-image");

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae molestias earum quibusdam quasi id omnis suscipit pariatur si";

    const container = document.createElement("div");
    container.classList.add("page-content-container");

    container.appendChild(headline);
    container.appendChild(restaurantImage);
    container.appendChild(description);

    return {
        container
    }
}