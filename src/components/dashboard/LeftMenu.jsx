import './LeftMenu.css';

const LeftMenu = ({ onMenuClick }) => {
  const handleClick = (menu) => {
    onMenuClick(menu);
  };

  return (
    <div className="left-menu">
      <ul>
        <li onClick={() => handleClick('general')}>General Panel</li>
        <li onClick={() => handleClick('employees')}>Employees</li>
        <li onClick={() => handleClick('debts')}>Debts</li>
      </ul>
    </div>
  );
};

export default LeftMenu;
