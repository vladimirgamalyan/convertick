window.onload = function() {
    function updateValue(e) {
        textAreaOutput.textContent = e.target.value;
    }

    const textAreaInput = document.getElementById("textAreaInput");
    const textAreaOutput = document.getElementById("textAreaOutput");

    textAreaInput.addEventListener("input", updateValue);
};
