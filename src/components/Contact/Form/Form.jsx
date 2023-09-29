import React from 'react';
import './Form.css';
import Appointmentbtn from '../../Appointmentbtn';
import callimg from '../../../assets/call.png';

const Form = () => {
    return (
        <>
            <form>
                <div className="form">
                    <label for="">NAME</label><br></br>
                    <input type="text" name="name" placeholder="Enter your name..." />
                </div>
                <div className="form">
                    <label for="">EMAIL ADDRESS</label><br></br>
                    <input type="text" name="email" placeholder="Enter your email..." />
                </div>
                <div className="form">
                    <label for="">SERVICES</label>
                    <select>
                        <option>Teeth Whitening</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="form">
                    <label for="">DEPARTMENT</label>
                    <select className="second">
                        <option>Select Department</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>

                <div className="form-box">
                    <label for="">MESSAGE</label><br></br>
                    <textarea rows="10" placeholder="Enter your message..." />
                </div>

            </form>

            <div className="form-last">
                <div className="form-details">
                    <span><div><img src={callimg} alt="calling" /></div></span>

                    <div className="contact-info">
                        <h3>Dental 24H Emergency</h3>
                        <h3>03 482 394 123</h3>
                    </div>
                </div>

                <Appointmentbtn />
            </div>
        </>
    )
}

export default Form;
