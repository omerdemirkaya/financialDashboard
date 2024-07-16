import Employees from './Employees';
import Debts from './Debts';
import Content from './Content';
import "./ContentContainer.css";

const ContentContainer = ({ selectedMenu }) => {
  // Seçilen menü öğesine göre içeriği döndüren bir fonksiyon
  const renderContent = () => {
    switch (selectedMenu) {
      case 'general':
        return <Content />
      case 'employees':
        return <Employees />;
       case 'debts':
         return <Debts />;
      default:
        return null; 
    }
  };

  return (
    <div className="content-container-main">
      {renderContent()}
    </div>
  );
};

export default ContentContainer;
