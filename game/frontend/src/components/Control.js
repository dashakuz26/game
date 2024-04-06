import '../App.css';
import {
    CaretDownOutlined,
    CaretRightOutlined,
    CaretUpOutlined,
    CaretLeftOutlined,
    EnterOutlined, CloseOutlined, ExpandAltOutlined
} from "@ant-design/icons";

const Control = () => {
  return (
    <>
    <div className='title'>
        <h1>Управление</h1>
    </div>
    <div className='content' style={{fontSize:20}}>
        <ul>
            <li>
                Ходить по стрелочкам <CaretUpOutlined /> <CaretRightOutlined /> <CaretDownOutlined /> <CaretLeftOutlined />
            </li>
            <li>
            Взаимодействовать с вещами enter <EnterOutlined />
            </li>
            <li>
            Открыть статистику esc <CloseOutlined />
            </li>
            <li>
             Cделать игру во весь экран alt + enter <ExpandAltOutlined />
            </li>
        </ul>
    </div>
    </>
  );
};

export default Control;
