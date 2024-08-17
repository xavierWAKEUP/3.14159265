function generatePi() {
    const digits = parseInt(document.getElementById('digits').value);
    
    if (digits <= 0) {
        alert("Please enter a positive number.");
        return;
    }

    // Use a high precision library or approximation for pi
    // Here is a simple implementation for demonstration
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
    let pi = '3.';
    let k = 1;
    let q = 1;
    let m = 1;
    let r = 1;
    
    for (let i = 0; i < digits; i++) {
        let num = 12 / (16 ** k) * (
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
