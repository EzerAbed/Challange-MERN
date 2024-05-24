import Navbar from "./Navbar"
import Footer from "./Footer"
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"
import './Contactus.css'

export default function Contactus(){
    const [name , setName]=useState('');
    const [phone , setPhone]=useState('');
    const [mail , setMail]=useState('');
    const [message , setMessage]=useState('');

    function createMessage(e){
        e.preventDefault()
        
        let newMessage = {name,phone,mail,message}
        fetch("http://localhost:8000/contact/message",{
            method:"POST",
            headers: {
                "content-type":"application/json",
            },
            body : JSON.stringify(newMessage)
            
        })
        .then(res=>res.json())
            .then(data=>{
                if(data.message){
                    toast.error(data.message)
                }else{
                    toast.success("Message sent")
                    setName("")
                    setMail("")
                    setPhone("")
                    setMessage("")
                }
            })
        
    }

    return(
        <div className="contactus-page">
            {/* <ToastContainer /> */}
            <Navbar></Navbar>
            <h1 className="contact-title">Contact us</h1>
            <div className="contact-container">
                <div className="left-side-contact">
                    <div className="leftsection1 inpsec">
                        <h2>Call To Us</h2>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <div className="lertsection2 inpsec">
                        <h2>Write To US</h2>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: <a href="mailto:customer@exclusive.com">customer@exclusive.com</a>, <a href="mailto:support@exclusive.com">support@exclusive.com</a></p>
                    </div>
                    
                    

                </div>
            
                <div className="right-side-contact">
                    <form className="contact-form">
                        <div className="contact-infos">
                            <input type="text" required 
                                className="conatct-input"
                                value={name}
                                placeholder="Your Name"
                                onChange={(e)=>setName(e.target.value)}
                            /> 
                            <input type="tel" required 
                                className="conatct-input"
                                value={phone}
                                placeholder="Your Phone Number"
                                onChange={(e)=>setPhone(e.target.value)}

                            />
                            <input type="email" required 
                                className="conatct-input"
                                value={mail}
                                placeholder="You Email"
                                onChange={(e)=>setMail(e.target.value)}

                            />
                        </div>
                        
                        <textarea required
                                className="conatct-input"
                                value={message}
                                placeholder="Your message"
                                onChange={(e)=>setMessage(e.target.value)}
                                rows={8}
                        />
                        
                        <br />
                        <div className="constat-btn-container">
                            <button type="submit" onClick={createMessage()} className="contact-send-btn">Send Massage</button>

                        </div>
                    </form>
                </div>
            </div>

            <Footer></Footer>
           
        </div>
    )
}