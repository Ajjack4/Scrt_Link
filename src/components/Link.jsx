/* eslint-disable react/prop-types */
import './Link.css'
import copy from '../assets/copy.png'

const Link = (props) => {

   const handleClick=()=>{
    navigator.clipboard.writeText(props.link);
    alert("Link copied to clipboard!");
    }
  return (
    <div className='display-Link'>
     <p>Share this link</p>
     <div className="linkref"><a href={props.link}>{props.link}</a></div>
     <div className="copybutton"><button onClick={handleClick}>Copy Link <img src={copy}/></button></div>

    </div>
  )
}

export default Link
