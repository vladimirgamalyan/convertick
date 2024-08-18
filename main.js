window.onload = function() {
    const regexBinary = /^[01]+$/;
    let utf8Encoder = new TextEncoder();
    let utf8Decoder = new TextDecoder();

    function updateInputValue(e) {
        let encoded = utf8Encoder.encode(e.target.value);
        let result = ''
        for (let b of encoded) {
            result += b.toString(2).padStart(8, "0");
        }
        textAreaOutput.value = result;
    }

    function updateOutputValue(e) {
        const s = e.target.value;
        const l = s.length;
        if (l % 8 || !regexBinary.test(s)) {
            textAreaInput.value = "";
        } else {
            const octets = l / 8;
            let ba = new Uint8Array(octets);
            for (let i = 0; i < octets; ++i) {
                ba[i] = parseInt(s.slice(i * 8, i * 8 + 8), 2);
            }
            try {
                textAreaInput.value = utf8Decoder.decode(ba);
            } catch (error) {
                textAreaInput.value = "";
            }
        }
    }

    const textAreaInput = document.getElementById("textAreaInput");
    const textAreaOutput = document.getElementById("textAreaOutput");

    textAreaInput.addEventListener("input", updateInputValue);
    textAreaOutput.addEventListener("input", updateOutputValue);
};
