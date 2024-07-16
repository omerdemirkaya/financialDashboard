import { useState } from 'react';
import Navbar from './Navbar';
import LeftMenu from './LeftMenu';
import './Dashboard.css';
import ContentContainer from './ContentContainer';

const Dashboard = () => {
    const [selectedMenu, setSelectedMenu] = useState('general'); // Varsayılan olarak genel paneli seçilmiş kabul edelim

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <>
            <Navbar />
            <div className="maintainer">
                <LeftMenu onMenuClick={handleMenuClick} />
                <ContentContainer selectedMenu={selectedMenu} />
            </div>
        </>
    );
};

export default Dashboard;
