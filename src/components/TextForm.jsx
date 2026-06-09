import React,{useState} from 'react' //rfc
import Form from 'react-bootstrap/Form';

export default function TextForm(props) {
    const [text,setText] = useState('');
    const [copied,setCopied] = useState(false);
    const [searchWord,setSearchWord] = useState('');
    const [searchResult,setSearchResult] = useState('Enter a word in Search tab');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearTextClick = ()=>{
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = async ()=>{
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(()=>{setCopied(false)},2000);
    }
    const handleSearchWordClick = async () =>{
        let arr = text.split(" ");
        for(let i=0;i<arr.length;i++){
          if(searchWord.trim().toLowerCase()==arr[i].toLowerCase()){
            return setSearchResult(`This word is at ${i+1} position`) ;
          }
        }
        setSearchResult("Not Found")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='light'? 'black':'white'}}>
    <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{props.heading}</Form.Label>
        <Form.Control value={text} onChange={handleOnChange} as="textarea" rows={8} style={{backgroundColor: props.mode==='light'? 'white':'#064273' , color: props.mode==='light'? 'black':'white'}}/>
      </Form.Group>
    </Form>
    <button className="btn btn-primary mx-2 mb-1"  onClick={handleUpClick}>Click to Uppercase</button>
    <button className="btn btn-primary mx-2 mb-1" onClick={handleLowClick}>Click to Lowercase</button>
    <button className="btn btn-primary mx-2 mb-1" onClick={handleClearTextClick}>Clear Text</button>
    <button className="btn btn-primary mx-2 mb-1" onClick={handleCopyClick}>{copied? "Copied ✓" : "Copy to Clipboard"}</button>
    <><button className="btn btn-primary mx-2 mb-1" onClick={handleSearchWordClick}>Search a word</button><input value={searchWord} style={{backgroundColor: props.mode==='light'? 'white':'#074679' , color: props.mode==='light'? 'black':'white', borderRadius: '5px', height:'35px',borderColor:'gray'}} onChange={(e) => setSearchWord(e.target.value)}/></>
    </div>
    <div className='container my-3' style={{color: props.mode==='light'? 'black':'white'}}>
      <h5>Your text summary</h5>
      <p>{text.split(/\s/).filter(value => value!="").length} words and {text.length} characters</p>
      <p>Search Word Result : {searchResult}</p>
      <h5 className='mt-2'>Preview</h5>
      <p>{text.trim().length>0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
