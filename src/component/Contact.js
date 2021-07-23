// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {BiMessageRoundedCheck} from 'react-icons/bi'
import fb from '../facebook.png'
import ig from '../instagram.png'
import gm from '../gmail.png'
import gh from '../github.png'
const Contact = ()=> {
    const Style = {
        width:"400px",
        height:"400px",
        loading:"lazy"
    }
    return(
        <div className='location'>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.2095828109711!2d105.85302281523607!3d20.999116712928643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac0cd0cd0fe1%3A0x65a39673b48fd978!2zMTU2IEjhu5NuZyBNYWksIELhuqFjaCBNYWksIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1626972081349!5m2!1svi!2s" style={Style}  allowfullscreen=""></iframe>
            </div>
            <Form className='contact-me'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                
                <Button className='btn-sent'> Sent <BiMessageRoundedCheck></BiMessageRoundedCheck> </Button>
            </Form>
            <Navbar bg='dark' variant ='dark' fixed ='bottom'> 
                <div>
                    <p className='sns' >156 Hong Mai, HBT, Ha Noi</p>
                    <p className='sns' >0399513456</p>
                    <p className='sns' >ductcp@gmail.com</p>
                </div>
                <div className='mxh'>
                    <h3 className='abc'>Contact me on</h3>
                </div>
                <div className='icon-mxh'>
                    <a href="https://www.facebook.com/du.tran.5494/"><img src={fb}></img></a>
                    <a href="https://www.facebook.com/du.tran.5494/"><img src={ig}></img></a>
                    <a href="https://www.facebook.com/du.tran.5494/"><img src={gm}></img></a>
                    <a href="https://www.facebook.com/du.tran.5494/"><img src={gh}></img></a>
                </div>
            </Navbar>
        </div>
    )
}
export default Contact