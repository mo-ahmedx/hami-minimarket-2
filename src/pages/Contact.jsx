import Img from '../assets/hero-bg.png';
import {useState} from 'react'
import UP from '../assets/up-arrow.png';

function Contact() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [error, setError] = useState("");
        const [success, setSuccess] = useState("");

        const handleSubmit = () => {

            setError("");
            setSuccess("");

            if(!name.trim()){
                return setError("Please enter your name.");
            }

            if(!email.trim()){
                return setError("Please enter your email.");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)){
                return setError("Please enter valid email address.");
            }

            if(!message.trim()){
                return setError("Please write your message.");
            }

            setSuccess("Your message has been sent successfully..");
            setName("");
            setEmail("");
            setMessage("");
        };
    
    return (
        <>
            <h1 className="text-center font-heading mb-6 text-3xl">Contact Us</h1>
            <div className=' w-full flex flex-col md:flex-row justify-center items-center gap-10 px-6 mt-4'>
                <div>
                <img src={Img} alt="" className='w-[400px] h-[400px] object-cover shadow-xl rounded-xl mt-2'/>
                </div>
                <div className='w-full max-w-md bg-white/70 p-6 rounded-xl shadow sm:mt-3'>
                <h2 className='text-2xl font-heading mb-4'>Send us message</h2>
                {error && <p className='text-red-600 text-sm'>{error}</p>}
                {success&& <p className='text-green-600 text-sm'>{success}</p>}
                <div className='flex flex-col gap-4'>
                        <label htmlFor="name" className='font-body mb-1'>Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className='p-3 rounded-lg border border-gray-300 focus:outline-primaryBlue' placeholder='Enter your name'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-body mt-1 mb-1'>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' className='p-3 border border-gray-300 rounded-lg focus:outline-primaryBlue' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="message" className='font-body mt-1 mb-1'>Message</label>
                        <textarea value={message} onChange={(e) => setMessage (e.target.value)} name="message" id="message" placeholder='Write your message here....' className='p-3 border border-gray-300 rounded-xl focus:outline-primaryBlue'></textarea>
                    </div>
                    <button onClick={handleSubmit} className=' font-body p-3 mt-1 bg-primaryBlue rounded-lg text-white hover:bg-primaryYellow hover:text-black transition self-center w-full'>Send Message</button>
                </div>
            </div>
            
        </>
    );
}

export default Contact;
