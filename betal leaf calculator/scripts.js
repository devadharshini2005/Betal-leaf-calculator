function calculateTotal() {
    const unitType = document.getElementById('unitType').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const ratePerSemmai = parseFloat(document.getElementById('rate').value);

    if (isNaN(quantity) || isNaN(ratePerSemmai)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    let totalPrice = 0;

    // Constants
    const kavuliInSemmai = 104;  // 1 Semmai = 100 Kavuli
    const muttiInSemmai = 4;     // 1 Semmai = 4 Mutti
    const leavesPerKavuli = 104; // 1 Kavuli = 104 leaves
    const leavesPerSemmai = kavuliInSemmai * leavesPerKavuli; // 1 Semmai = 100 Kavuli * 104 leaves = 10400 leaves

    // Calculate rate per leaf
    const ratePerLeaf = ratePerSemmai / leavesPerSemmai;

    if (unitType === 'kavuli') {
        // Convert Kavuli to Semmai
        const totalSemmai = quantity / kavuliInSemmai;
        totalPrice = totalSemmai * ratePerSemmai;
    } else if (unitType === 'mutti') {
        // Convert Mutti to Semmai
        const totalSemmai = quantity / muttiInSemmai;
        totalPrice = totalSemmai * ratePerSemmai;
    }

    // Display the result
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    document.getElementById('ratePerLeaf').innerText = ratePerLeaf.toFixed(4);
    document.getElementById('result').style.display = 'block';
}
