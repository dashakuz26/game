import '../App.css';
import {MailOutlined, MessageOutlined, SendOutlined} from "@ant-design/icons";

const Contacts = () => {
  return (
    <>
    <div className='title'>
        <h1>Контакты</h1>
    </div>
    <div className='content' style={{fontSize:20}}>
        <div className={"contact"}>
            <MailOutlined /> Почта:
            <ul>
                <li>
                 alenalev2005@gmai.com
                </li>
                <li>
                 dasakuzmic7@gmail.com
                </li>
                <li>
                alenazuzina11@gmail.com
                </li>
            </ul>
        </div>
        <div className={"contact"}>
            <MessageOutlined /> VK:
            <ul>
                <li>
                 https://vk.com/salt_and__pepper
                </li>
                <li>
                 https://vk.com/second_mistake
                </li>
            </ul>
        </div>
        <div className={"contact"}>
            <SendOutlined /> TG:
            <ul>
                <li>
                   @secondmistakeofgod
                </li>
                <li>
                 @salt_and_pepper01
                </li>
                <li>
                @tranquility_31
                </li>
            </ul>
        </div>
    </div>
    </>
  );
};

export default Contacts;
