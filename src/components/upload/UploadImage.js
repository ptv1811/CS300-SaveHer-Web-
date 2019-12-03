import React, {useState} from 'react';
import '../../assets/css/Upload.css';
import axios from 'axios';
function UploadImage(props) {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
 
 

  return (
    <div className="input-container">
      <input  id="input-btn" type="file" className="input" />
      <label htmlFor="input-btn">Choose Image</label>  
    </div>
  )
}

export default UploadImage;