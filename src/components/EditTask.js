import React from 'react';
import {useState, useEffect,useParams} from 'react';
import Button from './Button';
import { BsArrowLeft } from 'react-icons/bs'



const EditTask = ({taskId,onUpdate}) => {
    //states declaration
    const [firstname, setFirstname] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const [image, setImage] = useState('');
    const [urlfile, setUrlfile] = useState('');
   
    
    
    //Function: Fetches the task/member based on the id
    const fetchTask = async(id) =>{
        try{
            const res = await fetch(`http://localhost:5001/tasks/${id}`);
            const data = await res.json();
            return data

        }catch(error){
            console.error('Could not fetch data from database');
            throw error;
        }
        
    };
    //Set image when page loads
    useEffect(() =>{
        if(image){
            setUrlfile(image);
        }
    },[image]);
    //Sets task/member when a page loads
    useEffect(() =>{
        fetchTask(taskId).then(myInfo => {
            setFirstname(myInfo.firstname);
            setJobtitle(myInfo.jobtitle);
            setImage(myInfo.urlImage);
        })
        .catch(error =>{
            console.error('Task could not be fetched',error);
        });
    },[taskId]);
    
    

   
    //Function: handles edit when the button edit is clicked
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const taskToUpdate ={
            id: taskId,
            firstname,
            jobtitle,
            urlImage:urlfile,
        }

        onUpdate(taskToUpdate);

    };
    //Function: handles image
    const handleImage = (e) =>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = (e) =>{
                const dataUrl = e.target.result;
                setUrlfile(dataUrl);
            };
            reader.readAsDataURL(file);
        }
    };
    //Function: for navigating to the home component when back arrow is clicked
    const homeNavigation = () => {
        window.location.href = 'http://localhost:3000/';
    };

    //Below is displayed to the used
    return ( 
        <section>
            <BsArrowLeft style={{color: "blue", fontSize: "50"}} onClick={homeNavigation} />
            <form className='image-container' onSubmit={handleSubmit}>

                
                <div className="imageicon">
                    <img src={urlfile} alt="Preview" className='img-display-after'/>
                    <input type="file" onChange={handleImage} accept="image/*"/>
                </div>
            

                <input type="text"
                    required
                    placeholder='Full Names'
                    id='name-field'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder='Job Title'
                    id='job-field'
                    value={jobtitle}
                    onChange={(e) => setJobtitle(e.target.value)}
                />
            <Button  text='Edit Member'/>


            </form>
        </section>

     );
}
 
export default EditTask;