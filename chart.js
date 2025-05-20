const ctx = document.getElementById('accuracyChart').getContext('2d');
const accuracyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 13}, (_, i) => i * 10), // 0, 10, ..., 120
        datasets: [
            {
                label: 'Spotter AI',
                data: [100, 99, 98, 97, 97, 96, 95, 95, 94, 94, 93, 93, 92],
                borderColor: '#008080',
                backgroundColor: 'rgba(255,107,53,0.05)',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#F84960',
                pointHoverBorderWidth: 3,
            },
            {
                label: 'Competitors',
                data: [95, 94, 93, 92, 90, 85, 80, 75, 70, 65, 60, 55, 50], // starts lower
                borderColor: '#CAE2E4',
                backgroundColor: 'rgba(107,107,255,0.05)',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#4B6AFF',
                pointHoverBorderWidth: 3,
            }
        ]
    },
    options: {
        plugins: {
            legend: { display: true },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(255,255,255,0.98)',
                borderColor: '#e4e5e1',
                borderWidth: 1,
                titleColor: '#b0b0b0',
                titleFont: { family: 'monospace', size: 18, weight: 'bold' },
                bodyColor: '#b0b0b0',
                bodyFont: { family: 'monospace', size: 16 },
                padding: 16,
                cornerRadius: 12,
                displayColors: false,
                boxPadding: 4,
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                shadowBlur: 8,
                shadowColor: 'rgba(0,0,0,0.08)',
                callbacks: {
                    title: function(context) {
                        // Show X value as 'DAYS'
                        const label = context[0].label;
                        return `${label} DAYS`;
                    },
                    label: function(context) {
                        // Show dataset label and value as percentage with color
                        let value = context.parsed.y;
                        let base = context.dataset.data[0];
                        let percent = ((value - base) / base * 100).toFixed(1);
                        let color = context.dataset.label === 'Fingerprint' ? '#F84960' : '#4B6AFF';
                        let sign = percent > 0 ? '+' : '';
                        return ` ${context.dataset.label}  %c${sign}${percent}%`;
                    },
                    labelTextColor: function(context) {
                        return context.dataset.label === 'Fingerprint' ? '#F84960' : '#4B6AFF';
                    },
                    labelTextStyle: function(context) {
                        return {
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        };
                    }
                }
            }
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