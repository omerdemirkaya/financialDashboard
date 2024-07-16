import { Bar } from 'react-chartjs-2';
import './Debts.css';

const Debts = () => {
  // Örnek borç verileri
  const debtsData = [
    { name: 'Supplier A', amount: 15000 },
    { name: 'Supplier B', amount: 22000 },
    { name: 'Supplier C', amount: 18000 },
    { name: 'Supplier D', amount: 25000 },
    { name: 'Supplier E', amount: 20000 },
  ];

  // Grafik için veri formatı
  const chartData = {
    labels: debtsData.map(debt => debt.name),
    datasets: [
      {
        label: 'Borç Tutarı',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: debtsData.map(debt => debt.amount),
      },
    ],
  };

  // Grafik ayarları
  const chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  return (
    <div className="debts-container">
      <h2>Borçlar</h2>
      <table className="debts-table">
        <thead>
          <tr>
            <th>Tedarikçi</th>
            <th>Tutar (TL)</th>
          </tr>
        </thead>
        <tbody>
          {debtsData.map((debt, index) => (
            <tr key={index}>
              <td>{debt.name}</td>
              <td>{debt.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="debts-chart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Debts;
