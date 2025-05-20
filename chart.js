const ctx = document.getElementById('accuracyChart').getContext('2d');
const accuracyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 13}, (_, i) => i * 10), // 0, 10, ..., 120
        datasets: [
            {
                label: 'Fingerprint',
                data: [100, 99, 98, 97, 97, 96, 95, 95, 94, 94, 93, 93, 92],
                borderColor: '#008080',
                backgroundColor: 'rgba(255,107,53,0.05)',
                tension: 0.4,
                borderWidth: 1,
                pointRadius: 0,
            },
            {
                label: 'Other',
                data: [100, 99, 98, 97, 95, 90, 80, 75, 70, 65, 60, 55, 50],
                borderColor: '#F84960',
                backgroundColor: 'rgba(107,107,255,0.05)',
                tension: 0.4,
                borderWidth: 1,
                pointRadius: 0,
            }
        ]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                display: true,
                offset: false,
                min: 0,
                max: 120,
                grid: {
                    display: false,
                    drawBorder: true,
                    drawOnChartArea: false,
                    drawTicks: true,
                    color: '#e4e5e1'
                },
                border: {
                    display: true,
                    color: '#e4e5e1'
                },
                ticks: {
                    color: '#b0b0b0',
                    font: { family: 'monospace', size: 12 },
                    callback: function(value, index, values) {
                        // Only show ticks at 0, 30, 60, 90, 120
                        const label = this.getLabelForValue(value);
                        return [0, 30, 60, 90, 120].includes(Number(label)) ? label : '';
                    }
                }
            },
            y: {
                display: true,
                grid: { display: false },
                border: {
                    display: true,
                    color: '#e4e5e1'
                },
                ticks: { display: false },
                min: 40,
                max: 110
            }
        }
    }
}); 