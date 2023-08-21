import React from 'react';
import {useState, useEffect,useParams} from 'react';
import Button from './Button';



const EditTask = ({taskId,onUpdate}) => {
    //states

    
    const [firstname, setFirstname] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const [image, setImage] = useState('');
    const [urlfile, setUrlfile] = useState('');
   
    
    /*
    useEffect(() =>{
    const fetchTask = async() =>{
        try{
            const res = await fetch(`http://localhost:5001/tasks/${id}`);
            const data = await res.json();
            
            setFirstname(data.firstname);
            setJobtitle(data.jobtitle);
            setImage(data.image);

        }catch(error){
            console.error('Could not fetch data from database');
            throw error;
        }
    };
    fetchTask();
    }, [id]);
    

   

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const taskToUpdate ={
            id: taskId,
            firstname,
            jobtitle,
            urlImage:urlfile,
        };

        onUpdate(id,taskToUpdate);

    };
*/
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




    return ( 
        <section>
            <form className='image-container' >

                
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