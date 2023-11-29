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
            for (let i = 0; i < mutations.length; i++) {
                let addedImages = mutations[i].addedNodes[0].querySelectorAll("img");
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
                    });

                    parent.addEventListener("click", function (event) {
                        event.stopPropagation();
                    });
                }
            }
        }
    });
});

let article = document.querySelectorAll("article")[0];
mutationsInArtical.observe(article, { childList: true, subtree: true });