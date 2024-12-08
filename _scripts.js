document.getElementById("choice").addEventListener("change", function () {
    const choice = this.value;
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    if (choice === "energy") {
        inputsDiv.innerHTML = `
            <label for="frequency">Frequency (ν in Hz):</label>
            <input type="number" id="frequency" step="any" required>
        `;
    } else if (choice === "frequency") {
        inputsDiv.innerHTML = `
            <label for="wavelength">Wavelength (λ in meters):</label>
            <input type="number" id="wavelength" step="any" required>
        `;
    } else if (choice === "wavelength") {
        inputsDiv.innerHTML = `
            <label for="frequency">Frequency (ν in Hz):</label>
            <input type="number" id="frequency" step="any" required>
        `;
    }
});

document.getElementById("calculationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const choice = document.getElementById("choice").value;
    const resultDiv = document.getElementById("result");
    const h = 6.626e-34; // Planck's constant
    const c = 3e8; // Speed of light

    let result;

    if (choice === "energy") {
        const frequency = parseFloat(document.getElementById("frequency").value);
        result = `Energy (E) = ${h * frequency} Joules`;
    } else if (choice === "frequency") {
        const wavelength = parseFloat(document.getElementById("wavelength").value);
        result = `Frequency (ν) = ${c / wavelength} Hz`;
    } else if (choice === "wavelength") {
        const frequency = parseFloat(document.getElementById("frequency").value);
        result = `Wavelength (λ) = ${c / frequency} meters`;
    }

    resultDiv.textContent = result;
});
