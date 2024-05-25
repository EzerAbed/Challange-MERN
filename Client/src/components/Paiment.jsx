import './Paiment.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'



export default function Paiment(){
    const [fullname , setFullName]=useState('');
    const [phonenbr , setPhoneNbr]=useState('');
    const [adress , setAdress]=useState('');
    // const [message , setMessage]=useState('');
    const [city , setCity]=useState('');
    const [governorate , setGovernorate]=useState('');
    const[paimentMethod,setPaimentMethod]=useState('');
    function createorder(e){
        e.preventDefault()
        let newOrder={fullname,phonenbr,adress,city,governorate,paimentMethod}
        console.log(newOrder)
        setFullName('')
        setAdress('')
        setPhoneNbr('')
        setCity('')
        setGovernorate('')
        setPaimentMethod('')

    }
    function handleRadioChange(e){
        let method = e.target.value;
        if(method==='bank' || method==='on-delivery'){
            setPaimentMethod(method)
        }else{
            console.log('erreur radio should be checked')
        }
    }
    return (
        <>
        <Navbar></Navbar>
        <div className="paiment">
            
            <h2 className='paiment-title'>Billing Details</h2>

            <div className="paiment-container">
                <div className="personal-informations">
                    <label htmlFor="">FullName : </label><br />
                    <input type="text" value={fullname} onChange={(e)=>setFullName(e.target.value)}/><br />
                    <label htmlFor="">Address : </label><br />
                    <input type="text" value={adress} onChange={(e)=>setAdress(e.target.value)}/><br />
                    <label htmlFor="">Town/City : </label><br />
                    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} /><br />
                    <label htmlFor="">Governorate : </label><br />
                    <input type="text" value={governorate} onChange={(e)=>setGovernorate(e.target.value)}/><br />
                    <label htmlFor="">Phone Number : </label><br />
                    <input type="text" value={phonenbr} onChange={(e)=>setPhoneNbr(e.target.value)}/>

                </div>
                <div className="product-informations">
                    <div className='products pp'>

                    </div>
                    <div className="total-informations pp">
                        <div className="under-cart-element">
                            <span>Subtotal:</span>
                            <span></span>
                        </div>
                        <hr />
                        <div className="under-cart-element">
                            <span>Shipping:</span>
                            <span></span>
                        </div>
                        <hr />
                        <div className="under-cart-element">
                            <span>Total</span>
                            <span></span>
                        </div>
                    </div>
                    <div className="paiment-informations pp">
                        <div className='bank '>
                            <div>
                                <input type="radio" name='paiment-method' value='bank' checked={paimentMethod==='bank'} onChange={handleRadioChange}/>
                                <label htmlFor=""> Bank</label>
                            </div>
                            <span>
                                <img src="https://help.zazzle.com/hc/article_attachments/360010513393" alt="" />
                            </span>
                        </div>
                        <div>
                            <input type="radio" name='paiment-method' value='on-delivery' checked={paimentMethod==='on-delivery'} onChange={handleRadioChange}/>
                            <label htmlFor="">Cash on delivery</label>
                        </div>
                    </div>
                    <div className="payment-button-container pp">
                        <button className="payment-button" onClick={(e)=>createorder(e)} type='submit'>
                            Place Order
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <Footer></Footer>
        </>
    )
}