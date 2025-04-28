document.getElementById('taxForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        tax = 12500 + (income - 500000) * 0.2;
    } else {
        tax = 112500 + (income - 1000000) * 0.3;
    }

    document.getElementById('result').innerHTML = `Your calculated tax is: <strong>₹${tax.toFixed(2)}</strong>`;
});
