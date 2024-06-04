function convertHexToRGB() {
    // Get the hex color value from the input field
    const hex = document.getElementById('hexInput').value;
    
    // Validate the hex color value
    const hexPattern = /^#([0-9A-F]{3}){1,2}$/i;
    if (!hexPattern.test(hex)) {
        document.getElementById('result').textContent = "Invalid hex color";
        return;
    }
    
    // Remove the hash at the start if it's there
    let hexValue = hex.slice(1);

    // Convert 3-digit hex to 6-digit hex
    if (hexValue.length === 3) {
        hexValue = hexValue.split('').map(char => char + char).join('');
    }

    // Convert hex to RGB
    const bigint = parseInt(hexValue, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Display the result
    document.getElementById('result').textContent = `RGB(${r}, ${g}, ${b})`;
}
