import React from 'react';
import {useState, useEffect,useParams} from 'react';
import Button from './Button';
import { BsArrowLeft } from 'react-icons/bs';
import '../stylesheet/Screenadd.css';
import Imageicon from '../Icons/Imageicon.png';


const EditTask = ({selectedTask,updateOurTask}) => {
    //states declaration
    
    const backpicture = Imageicon;
    const [urlfile, setUrlfile] = useState(selectedTask.urlImage);

    const [firstname, setFirstname] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const [image, setImage] = useState('');

    const [newEditState, setNewEditState] = useState({
        id:selectedTask.id,
        firstname:selectedTask.firstname,
        jobtitle:selectedTask.jobtitle,
        urlImage:selectedTask.urlImage,
    });

    const handleChange = (e) =>{
        setNewEditState({
            ...newEditState,
            [e.target.name] : e.target.value
        })
    }
   
  
   

   
    //Function: handles edit when the button edit is clicked
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("submit--task:", newEditState);
        updateOurTask(newEditState);
    };

    
    //Function: handles image
    const handleImage = (e) =>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = (e) =>{
                const dataUrl = e.target.result;
                setUrlfile(dataUrl);
                
                 //selectedTask.urlImage=dataUrl;
            };
            reader.readAsDataURL(file);
        }
        console.log("whole editpage task:", selectedTask);
    };
    
    //Function: for navigating to the home component when back arrow is clicked
    const homeNavigation = () => {
        window.location.href = 'http://localhost:3000/';
    };
    
    //Below is displayed to the used
    return ( 
        <section>
            <BsArrowLeft style={{color: "blue", fontSize: "50"}} onClick={homeNavigation} />
            <form className='image-container' >

                
                <div className="imageicon">
                    <img  src={urlfile} alt="Preview" className='img-display-after'/>
                    <input type="file"  onChange={handleImage}  accept="image/*"/>
                </div>
            
                <div className='input-container'>
                <input type="text"
                    required
                    placeholder='Full Names'
                    id='name-field'
                    name= "firstname"
                    value={newEditState.firstname}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    required
                    placeholder='Job Title'
                    id='job-field'
                    name="jobtitle"
                    value={newEditState.jobtitle}
                    onChange={handleChange}
                />
            <Button  text='Edit Member' onClick={handleSubmit}/>
            </div>

            </form>
        </section>

     );
}
 
export default EditTask;