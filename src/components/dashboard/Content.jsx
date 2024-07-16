import "./Content.css";
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';

// Chart.js bileşenlerini kaydedin
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const Content = () => {
    const barData = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        datasets: [
            {
                label: 'Ciro',
                data: [12, 19, 3, 5, 2, 3, 15, 22, 10, 8, 6, 7],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        datasets: [
            {
                label: 'Gelir',
                data: [65, 59, 80, 81, 56, 55, 60, 70, 75, 85, 90, 95],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
            {
                label: 'Gider',
                data: [28, 48, 40, 19, 86, 27, 30, 35, 40, 50, 55, 60],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    const pieData = {
        labels: ['Nakit', 'Hisse Senetleri', 'Tahviller', 'Diğer'],
        datasets: [
            {
                label: 'Para Dağılımı',
                data: [300, 50, 100, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="content-container">
            <div className="content-context">
                <div className="content-context-header">
                    Money in the Bank
                </div>
                <div className="content-chart">
                    <Pie data={pieData} />
                </div>
            </div>
            <div className="content-context">
                <div className="content-context-header">
                    Ciro of the Business
                </div>
                <div className="content-chart">
                    <Bar data={barData} />
                </div>
            </div>
            <div className="content-context">
                <div className="content-context-header">
                    Gelir Gider Tablosu
                </div>
                <div className="content-chart">
                    <Line data={lineData} />
                </div>
            </div>
        </div>
    )
}

export default Content;
