function generatePi() {
    const digits = parseInt(document.getElementById('digits').value);
    
    if (isNaN(digits) || digits <= 0) {
        alert("Please enter a positive number.");
        return;
    }

    // Pi calculation
    const pi = calculatePi(digits);
    
    // Create a Blob with the pi digits
    const blob = new Blob([pi], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a link element and trigger a download
    const link = document.getElementById('downloadLink');
    link.href = url;
    link.download = 'pi.txt';
    link.textContent = 'Download Pi.txt';
    link.style.display = 'inline';
}

function calculatePi(digits) {
    // Basic implementation, for educational purposes
    let pi = '3.';
    let k = 1;
    
    while (pi.length < digits + 2) {
        const num = 12 / (16 ** k) * (
            (4 / (8 * k + 1)) -
            (2 / (8 * k + 4)) -
            (1 / (8 * k + 5)) -
            (1 / (8 * k + 6))
        );
        pi += Math.floor(num);
        k++;
    }
    
    return pi;
}
