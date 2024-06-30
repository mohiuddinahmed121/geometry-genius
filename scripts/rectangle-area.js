function calculateRectangleArea() {
    // get lenght of the rectangle
    const lenghtInput = document.getElementById('rectangle-length');
    const lenghtText = lenghtInput.value;
    const lenght = parseFloat(lenghtText);
    console.log(lenght);

    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    // calculate rectangle area
    const area = lenght * width;

    // display rectangle area
    const RectangleAreaSpan = document.getElementById('rectangle-area');
    RectangleAreaSpan.innerText = area;
}