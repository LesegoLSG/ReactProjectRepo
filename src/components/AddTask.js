import Imageicon from '../Icons/Imageicon.png';
import { useRef, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Task from  './Task'
import Button from '../components/Button'
import '../stylesheet/Screenadd.css'



const AddTask = ({ onAdd }) => {
    /*state for image*/
    //const inputRef = useRef(null);
    //const [image, setImage] = useState("");
    const backpicture = Imageicon;
    const [urlfile,setUrlfile] = useState(backpicture);

    /*state for inputs */
    const [firstname, setFirstname] = useState('');
    const [jobtitle, setJobtitle] = useState('');

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
    }

    /*
    const handleImageClick = () => {
        inputRef.current.click();
    };
    

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };
    */

    const onSubmit = (e) => {
        /*prevent page refresh, in html: href="#"*/
        e.preventDefault()
        console.log(firstname,jobtitle)
        if (!firstname) {
            alert('Please add a task')
            return
        }
         onAdd({firstname,jobtitle, urlImage:urlfile})

        setFirstname('')
        setJobtitle('')
    }


    return (

        <section>
            <form className='image-container' onSubmit={onSubmit}>

                
                <div className="imageicon">
                    <img src={urlfile} alt="Preview" className='img-display-after'/>
                    <input type="file" onChange={handleImage} accept="image/*"/>
                </div>
            
        <div className='input-container'>
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
            <Button onClick={onAdd} text='Add Member(AddPage)' id='submitbtn'/>
            </div>

            </form>
        </section>

    );
}

export default AddTask;