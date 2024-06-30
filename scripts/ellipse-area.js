function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-radius-major');
    const minorRadius = getInputValueById('ellipse-radius-minor');

    const area = 3.1416 * majorRadius * minorRadius;

    setInnerTextById('ellipse-area', area);
}
