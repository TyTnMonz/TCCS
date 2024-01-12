// Shitty function to check URL change
    // and reapply the custom styles on next Lesson
    let prevUrl = undefined;
    setInterval(() => {
        const currUrl = window.location.href;
        if (currUrl != prevUrl) {
            // URL changed
            prevUrl = currUrl;
            changeSize();
        }
    }, 100);

    // Function to observe the DOM and wait for a TAG to be added
    // Needed to activate the Full Screen Mode on the iFrame which is
    // added programmatically and not immediately available when the page loads
    async function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }

    // Select the NavBar element where to add the Select with sizes
    const navbar = document.querySelector(".lecture-nav");
    // Create the Select element
    const sel = document.createElement("select");
    sel.setAttribute("id", "sizesOpts");
    sel.addEventListener("change", () => changeSize());
    // Add Options to the Select
    const BASE_SIZE = 840;
    const sizes = [
        {"text":"Small", "value":"1"},
        {"text":"Medium", "value":"1.3"},
        {"text":"Big", "value":"1.8"},
        {"text":"Full Screen", "value":"F"}
    ]
    sizes.map((opt) => {
        let option = document.createElement("option");
        option.text = opt.text;
        option.value = opt.value;
        sel.appendChild(option);
    })
    // Span for the Text next to the Select
    const text = document.createElement("span");
    text.innerText = "Change Content Size";
    text.style.marginRight = "10px";
    text.style.color = "whitesmoke";
    // Container
    const div = document.createElement("div");
    div.style.border = "1px solid whitesmoke";
    div.style.borderRadius = "10px";
    div.style.padding = "10px";
    div.style.marginRight = "20px";
    // Add Text and Select to the Container
    div.appendChild(text);
    div.appendChild(sel);
    // Add the Container to the NavBar
    navbar.insertBefore(div, navbar.firstChild);

    // Chage Size Function
    function changeSize() {
        // Retrieve the selected value
        const value = sel.value;
        // Select the Main element
        const main = document.querySelector("[role='main']");
        // Class to be removed
        const classEMCW = "enforce-maximum-content-width";
        if (main) {
            if ( value === "F" ) {
                // Select the iFrame and set the Full Screen Mode
                waitForElm('iframe[name=hotmart_embed]').then((video) => {
                    video.requestFullscreen();
                });
            } else {
                // If the Teachable Default Class is applyed than remove it
                if ( main.classList.contains(classEMCW) ) {
                    main.classList.remove(classEMCW);
                }
                // Set the new Style on the Element
                main.style.maxWidth = `${BASE_SIZE*value}px`;
                main.style.margin = `auto`;
            }
        }
    }