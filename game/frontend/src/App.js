import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import About from './components/About';
import GameplayComponent from './components/Gameplay';
import Control from './components/Control';
import Contacts from './components/Contacts';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
    <BrowserRouter>
    <div class="bg">
    </div>
    <Header
        style={{
          display: 'contents',
          alignItems: 'center',
        }}
      >
      <RootLayout />
    </Header>
    <Content
      style={{
        backgroundColor: "transparent",
        color: "white",
        position: "absolute",
        top: 0,
        zIndex: 0,
        margin: "160px 40px 40px 50px",
        padding: 20,
      }}
    >
    <Routes>
        <Route path="about" element={<About />} />
        <Route path="gameplay" element={<GameplayComponent />} />
        <Route path="control" element={<Control />} />
        <Route path="contact" element={<Contacts />} />
    </Routes>
    </Content>
  </BrowserRouter>
  </>
  );
}

export default App;
