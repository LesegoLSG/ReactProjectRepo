
import React from 'react';
//import Editscreen from './Editscreen';
//import '../stylesheet/Arrow-left.css'
import Arrow from '../components/Arrow';
import ImageComp from '../components/ImageComp';
import '../stylesheet/Home.css';
import '../stylesheet/Screenadd.css';


const Addscreen = () => {
  
    return (  
        <div>
           
        <Arrow nameurl="/"/>
        <ImageComp btnName="Add Member"/>
        
        </div>
      
    );
}
 
export default Addscreen;