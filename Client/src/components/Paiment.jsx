import './Paiment.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Paiment(){
    const [fullname , setFullName]=useState('');
    const [phonenbr , setPhoneNbr]=useState('');
    const [adress , setAdress]=useState('');
    const [city , setCity]=useState('');
    const [governorate , setGovernorate]=useState('');
    const [paimentMethod,setPaimentMethod]=useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showCardFields, setShowCardFields] = useState(false);
    const location = useLocation();
    const { total } = location.state || { total: 0 };

    function createorder(e){
        e.preventDefault()
        let newOrder={fullname,phonenbr,adress,city,governorate,paimentMethod, cardNumber, password}
        console.log(newOrder)
        setFullName('')
        setAdress('')
        setPhoneNbr('')
        setCity('')
        setGovernorate('')
        setPaimentMethod('')
        setCardNumber('')
        setPassword('')
    }

    function handleRadioChange(e){
        let method = e.target.value;
        if(method==='bank' || method==='on-delivery'){
            setPaimentMethod(method)
            if(method==='bank'){
                setShowCardFields(true)
            }else{
                setShowCardFields(false)
            }
        }else{
            console.log('erreur radio should be checked')
        }
    }

    function createorder(e) {
        e.preventDefault();

        const newOrder = {
            fullname,
            phonenbr,
            adress,
            city,
            governorate,
            paimentMethod,
            cardNumber,
            password
        };

        // Sending POST request to backend
        fetch('http://localhost:8000/paiment/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to create payment');
        })
        .then(data => {
            // Handle successful response
            // Reset form fields
            setFullName('');
            setAdress('');
            setPhoneNbr('');
            setCity('');
            setGovernorate('');
            setPaimentMethod('');
            setCardNumber('');
            setPassword('');
            // Show success message
            toast.success('Payment created successfully');
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
            toast.error('Failed to create payment');
        });
    }
    

    return (
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
                    <input type="text" value={phonenbr} onChange={(e)=>setPhoneNbr(e.target.value)}/><br />
                    {showCardFields && (
                        <div>
                            <label htmlFor="">Card Number : </label><br />
                            <input type="text" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)}/><br />
                            <label htmlFor="">Password : </label><br />
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
                        </div>
                    )}
                </div>
                <div className="product-informations">
                    <div className='products pp'>

                    </div>
                    <div className="total-informations pp">
                        <div className="under-cart-element">
                            <span>Total :</span>
                            <br />
                            <span>{total}</span>
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
                        <button className="payment-button" onClick={createorder} type='submit'>
                            Place Order
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}
