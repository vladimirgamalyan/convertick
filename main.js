window.onload = function() {
    function updateValue(e) {
        let utf8Encode = new TextEncoder();
        let encoded = utf8Encode.encode(e.target.value);
        let result = ''
        for (let b of encoded) {
            result += b.toString(2).padStart(8, "0");
        }
        textAreaOutput.textContent = result;
    }

    const textAreaInput = document.getElementById("textAreaInput");
    const textAreaOutput = document.getElementById("textAreaOutput");

    textAreaInput.addEventListener("input", updateValue);
};
