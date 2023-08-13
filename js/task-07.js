const fontSizeControlSlider = document.querySelector('#font-size-control');
const changingText = document.querySelector('#text');


const controlSlider = () => {
    const fontSizeValue = `${fontSizeControlSlider.value}px`;
    changingText.style.fontSize = fontSizeValue;
};

fontSizeControlSlider.addEventListener("input", controlSlider);
