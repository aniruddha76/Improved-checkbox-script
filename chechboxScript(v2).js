let selectedImages = [];

async function downloadSelectedImages() {
    // const selectedImages = document.querySelectorAll('input[type="checkbox"]:checked');
    // const imageUrls = Array.from(selectedImages).map(checkbox => {
    //     return checkbox.parentNode.parentElement.querySelector("img").src;
    // });
    console.log(selectedImages);
}


function createCheckboxes() {
    var images = document.querySelectorAll("article img");
    images.forEach(function (image) {
        var checkboxContainer = document.createElement("div");
        checkboxContainer.id = "checkboxContainer";
        checkboxContainer.style.position = "absolute";
        checkboxContainer.style.top = "0";
        checkboxContainer.style.left = "0";
        checkboxContainer.style.zIndex = "2";

        var checkbox = document.createElement("input");
        checkbox.id = "imageCheckbox";
        checkbox.type = "checkbox";
        checkbox.style.height = "20px";
        checkbox.style.width = "20px";
        checkboxContainer.appendChild(checkbox);

        image.parentNode.appendChild(checkboxContainer);

        checkbox.addEventListener("click", function (event) {
            event.stopPropagation();
            let imageUrlToPush = checkbox.parentNode.parentElement.querySelector("img").src;
            if (imageUrlToPush) {
                console.log(imageUrlToPush);
                selectedImages.push(imageUrlToPush);
                console.log("Added that into download list!!");
            }
        });

        image.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });
}

createCheckboxes();


const mutationsInArtical = new MutationObserver(mutations => {
    mutations.forEach(record => {
        let rowAdded = record.addedNodes[0].className;
        if (rowAdded === "_ac7v  _al3n") {
            let addedImages = record.addedNodes[0].querySelectorAll("img");

            for (let j = 0; j < addedImages.length; j++) {
                let parent = addedImages[j].parentNode;
                var checkboxContainer = document.createElement("div");
                checkboxContainer.id = "checkboxContainer";
                checkboxContainer.style.position = "absolute";
                checkboxContainer.style.top = "0";
                checkboxContainer.style.left = "0";
                checkboxContainer.style.zIndex = "2";

                var checkbox = document.createElement("input");
                checkbox.id = "imageCheckbox";
                checkbox.type = "checkbox";
                checkbox.style.height = "20px";
                checkbox.style.width = "20px";
                checkboxContainer.appendChild(checkbox);

                parent.appendChild(checkboxContainer);

                checkbox.addEventListener("click", function (event) {
                    event.stopPropagation();
                    let imageUrlToPush = checkbox.parentNode.parentElement.querySelector("img").src;
                    if (imageUrlToPush) {
                        console.log(imageUrlToPush);
                        selectedImages.push(imageUrlToPush);
                        console.log("Added that into download list!!");
                    }
                });

                parent.addEventListener("click", function (event) {
                    event.stopPropagation();
                });
            }
        }
    }
    );
});

let article = document.querySelectorAll("article")[0];
mutationsInArtical.observe(article, { childList: true, subtree: true });