import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Validation = () => {
    // const form = useRef();
    const [data, setdata] = useState(null)
    const [pass, setpass] = useState("")
    const [Cpass, setCpass] = useState("")
    const [user, setuser] = useState("")
    const [usermail, setusermail] = useState("")
    const [usermassage, setusermassage] = useState("")

    const sendEmail = (e) => {
        let inputpass = document.getElementById("inputpass");
        e.preventDefault();

        emailjs
            .sendForm('service_fqgmqux', 'template_6tu3a19', data, {
                publicKey: 'wuROyrGItTlO5AiJm',
            })
            .then(
                () => {
                    if (pass === Cpass) {
                        setpass("");
                        setCpass("");
                        console.log('SUCCESS!');
                    }
                },
                (error) => {
                   if (pass != Cpass) {
                       console.log('FAILED...', error.text);
                   }
                },
            );
        if (pass === Cpass) {
            console.log(inputpass.value);
            setpass("");
            setCpass("");
            setuser("");
            setusermail("");
            setusermassage("");
            document.getElementById("Cpass").classList.add("black");
        } else if (pass != Cpass) {
            console.log("confirm password is incorrect");
            document.getElementById("Cpass").classList.add("red");
        }
    };
    return (
        <div>
            <form ref={setdata} onSubmit={sendEmail} className='d-flex align-items-center justify-content-center flex-column gap-4 my-5'>
                <input placeholder='UserName' className='w-100' type="text" name="username" value={user} onChange={(e) => setuser(e.target.value)} required title='Use first Uppercase Letter and not valid blank space and 1 to 10 alphbhet use' pattern='[A-Z][A-Za-z]{1,10}' />
                <input placeholder='Email' className='w-100' type="email" name="email" value={usermail} onChange={(e) => setusermail(e.target.value)} required/>
                <input className='w-100' id="inputpass" name="password" type="password" value={pass} placeholder='password'  onChange={(e) => setpass(e.target.value)} required />
                <input className='w-100' id="Cpass" type="password" value={Cpass} placeholder='confirm password' onChange={(e) => setCpass(e.target.value)} required />
                <div className='w-100'>
                    <textarea name="message" placeholder='Massage' value={usermassage} onChange={(e) => setusermassage(e.target.value)} required className='resize-none w-100' />
                </div>
                <input type="submit" className='send' value="Send" />
            </form>
        </div>
    )
}

export default Validation
