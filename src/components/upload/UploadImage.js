import React, {useState} from 'react';
import '../../assets/css/Upload.css';
import axios from 'axios';
import { Alert } from 'reactstrap';
import classNames from 'classnames';

function UploadImage(props) {
  const [loaded, setLoaded] = useState(false);
  const id = setInterval(() => {
    if (loaded === true) setLoaded(false);
  }, 2000);
  if (loaded === false && id !== undefined) {
    clearInterval(id);
  }
      
  const uploadImg = async (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('upload_preset', 'phong19');
    await axios.post(
      'https://api.cloudinary.com/v1_1/dzsvq2oc7/image/upload',
      data,
      {
        headers: {'Content-Type':'multipart/form-data'}
      })
      .then(res => {
        setLoaded(true);
        console.log('done');
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="input-container">
      <input onChange={uploadImg} id="input-btn" type="file" className="input" />
      <label htmlFor="input-btn">Choose Image</label>  
      <Alert className={classNames('upload-success',{'appear':loaded===true? true:false})} color='primary'>Upload Success!!</Alert>
    </div>
  )
}

export default UploadImage;