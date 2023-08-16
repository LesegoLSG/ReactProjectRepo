import Imageicon from '../Icons/Imageicon.png';
import { useRef, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';


const ImageComp = (props) => {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };

    return (

        <section>
            <form>
                <div className='image-container'>
                    <div className="imageicon">
                        <div onClick={handleImageClick}>

                            {image ? (
                                <img src={URL.createObjectURL(image)} alt="" className="img-display-after" />
                            ) : (
                                <img src={Imageicon} alt="" className="img-display-before" />
                            )}
                            {/*<FaPlusCircle className="icons" ref={inputRef} onChange={handleImageChange} />*/}
                            <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
                        </div>
                        {/*<button onChange={handleImageChange} className='image-upload-button'>Upload</button>*/}
                    </div>
                </div>
                
                <input type="text" required placeholder='Full Names' id='name-field' />
                <input type="text" required placeholder='Job Title'id='job-field'/>
                <button type='submit' id='submitbtn'>{props.btnName}</button>
                
                
            </form>
        </section>

    );
}

export default ImageComp;