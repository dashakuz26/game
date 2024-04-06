import '../App.css';
import { QuestionCircleOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
const items = [
    {
        label: <Link to={"/about"}>Описание</Link>,
        key: 'about',
        icon: <QuestionCircleOutlined />,
    },
    {
        label: <Link to={"/gameplay"}>Геймплей</Link>,
        key: 'gameplay',
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link to={"/control"}>Управление</Link>,
        key: 'control',
        icon: <SettingOutlined />,
    },
    {
        label: <Link to={"/contact"}>Контакты</Link>,
        key: 'contact',
        icon: <MailOutlined />,
    },
];
  
const RootLayout = () => {
  const [current, setCurrent] = useState('mail');
  const location = useLocation()

  useEffect(() => {
      setCurrent(location.pathname.substring(1))
  }, [location])

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const centerStyle = {
    justifyContent: 'center',
    position: "absolute",
    height: 60,
    width: '100%',
    backgroundColor: "transparent",
  };
  return (
    <>
    <div>
    <header>
          <h1>LaLaLa Game</h1>
          <Menu style={centerStyle} defaultOpenKeys={["about"]} defaultSelectedKeys={["about"]} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
      </header>
      </div>
</>
  );
}

export default RootLayout;
