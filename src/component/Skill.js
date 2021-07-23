import { FaJava } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import {GrHtml5} from 'react-icons/gr'
import {FaReact} from 'react-icons/fa'
import {BsBootstrap} from 'react-icons/bs'
const Skill = ()=> {
    return(
        <div className='skill'>
            <h1 className='pl'>Language</h1>
            <div className='programming-language'>
                
                <figure className='icon'>
                    <FaJava size='auto'></FaJava>
                </figure>
                <figure className='icon'>
                    <DiJavascript size='auto'></DiJavascript>
                </figure>
                <figure className='icon'>
                    <DiCss3 size='auto'></DiCss3>
                </figure>
                <figure className='icon'>
                    <GrHtml5 size='auto'></GrHtml5>
                </figure>
            </div>
            <h1 className='pl'>Framework / Library</h1>
            <div className='fw-lib'>
                
                <figure className='icon'>
                    <FaReact size='auto'></FaReact>
                </figure>
                <figure className='icon'>
                    <BsBootstrap size='auto'></BsBootstrap>
                </figure>
               
            </div>
        </div>
    )
}
export default Skill