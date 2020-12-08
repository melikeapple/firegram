import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForms = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ['image/png','image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        console.log('selected',selected);
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError("");
        }else {
            setFile(null)
            setError('Please choose and image file(png or jpeg)')
        }
    }

    return(
        <form>
            <input type="file" onChange={handleChange} />
            <div className="output">
                { error && <div className="error">{ error }</div>}
                {file && <div> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForms;