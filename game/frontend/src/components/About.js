import '../App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

const About = () => {
    const [description, setDescription] = useState("")
   useEffect(() => {
       axios.get(`/api/project-info`)
      .then(res => {
        setDescription(res.data.description)
      }).catch(err => {console.log(err)})
   }, [])

  return (
    <>
    <div className='title'>
        <h1>Описание</h1>
    </div>
    <div className='content'>
        <p>
            {description}
        </p>
    </div>
    </>
  );
};

export default About;
