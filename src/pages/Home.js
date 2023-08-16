import React from 'react';
import '../stylesheet/Home.css'
import { useNavigate } from 'react-router-dom';
//import Editscreen from './Editscreen';
//import '../stylesheet/Arrow-left.css'

const Home = () => {
    const navigate = useNavigate();

    function handleClick(){
        navigate('/Addscreen')
    }

    return (
        <div className="content">
            <button onClick={handleClick}>Add Member</button>
        </div>
    );
}

export default Home;