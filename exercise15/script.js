// Exercise 15: Image Gallery
// Complete the TODOs below

// TODO 1: Define your state object
const state = {
    images: [
        'https://via.placeholder.com/150/0000FF/808080?Text=Image1',
        'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Image2',
        'https://via.placeholder.com/150/FFFF00/000000?Text=Image3',
        'https://via.placeholder.com/150/00FF00/0000FF?Text=Image4',
        'https://via.placeholder.com/150/FF00FF/00FFFF?Text=Image5'
    ],
    currentIndex: 0 // index of the currently displayed image

};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const app = document.getElementById("app");

    let thumbnails = state.images.map((img, index) => `
        <img 
            src="${img}" 
            class="thumbnail ${index === state.selectedIndex ? "active" : ""}"
            data-index="${index}"
        >
    `).join("");

    app.innerHTML = `
        <div class="gallery">
            <div class="main-image">
                <img src="${state.images[state.selectedIndex]}">
            </div>
            <div class="thumbnails">
                ${thumbnails}
            </div>
        </div>
    `;

    // TODO 4: Add your event listeners and logic
    document.querySelectorAll(".thumbnail").forEach(img => {
        img.addEventListener("click", () => {
            updateState({ selectedIndex: Number(img.dataset.index) });
        });
    });
}

// TODO 5: Initial render
render();