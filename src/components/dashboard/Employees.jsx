import { Bar } from 'react-chartjs-2';
import './Employees.css';

const Employees = () => {
  // Örnek veri
  const employeesData = [
    {
      name: 'Employee A',
      verimPuanı: [85, 82, 88, 90, 87, 84, 86, 89, 91, 88, 85, 90], // 12 aylık verim puanı
      devamsızlık: [5, 4, 6, 3, 5, 4, 3, 2, 4, 5, 6, 3], // 12 aylık devamsızlık
      çalışmaYılı: 3,
    },
    {
      name: 'Employee B',
      verimPuanı: [78, 80, 82, 79, 81, 83, 85, 80, 78, 79, 81, 83], // 12 aylık verim puanı
      devamsızlık: [8, 7, 6, 5, 4, 3, 2, 3, 4, 5, 6, 7], // 12 aylık devamsızlık
      çalışmaYılı: 4,
    },
    {
      name: 'Employee C',
      verimPuanı: [92, 90, 88, 91, 89, 87, 85, 88, 90, 91, 89, 87], // 12 aylık verim puanı
      devamsızlık: [3, 4, 2, 3, 4, 5, 3, 2, 1, 3, 4, 5], // 12 aylık devamsızlık
      çalışmaYılı: 2,
    },
    {
      name: 'Employee D',
      verimPuanı: [79, 81, 80, 82, 78, 79, 81, 80, 82, 78, 79, 81], // 12 aylık verim puanı
      devamsızlık: [6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7], // 12 aylık devamsızlık
      çalışmaYılı: 5,
    },
    {
      name: 'Employee E',
      verimPuanı: [88, 85, 86, 89, 87, 84, 83, 85, 88, 85, 86, 89], // 12 aylık verim puanı
      devamsızlık: [4, 3, 5, 4, 3, 2, 1, 3, 4, 3, 5, 4], // 12 aylık devamsızlık
      çalışmaYılı: 3,
    },
  ];

  // 12 aylık veri seti oluşturma
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Verim Puanı',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: employeesData.map(employee => employee.verimPuanı.reduce((a, b) => a + b, 0) / 12), // Aylık ortalamaları al
      },
      {
        label: 'Devamsızlık',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        data: employeesData.map(employee => employee.devamsızlık.reduce((a, b) => a + b, 0) / 12), // Aylık ortalamaları al
      },
    ],
  };

  // Grafik ayarları
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="employees-container">
      {employeesData.map((employee, index) => (
        <div key={index} className="employee-card">
          <div className="employee-header">{employee.name} Average Data (12 Months)</div>
          <div className="employee-chart">
            <Bar data={monthlyData} options={options} />
          </div>
          <div className="employee-info">
            <p>Çalışma Yılı: {employee.çalışmaYılı}</p>
            <p>Ortalama Devamsızlık: {employee.devamsızlık.reduce((a, b) => a + b, 0) / 12}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
