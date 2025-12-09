import LinkenIn from '../assets/InBug-White.png';
import Whatsapp from '../assets/whatsapp.png';
import Discord from '../assets/discord.png';
function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="flex flex-row justify-between bg-black/75 h-20 rounded-t-lg">
            <div className=''>
            <p className="md:ml-5 md:text-md text-sm text-center font-body text-white mt-6">&copy; {currentYear} Hami Minimarket. All rights reserved.</p>

            </div>
            <div className='flex flex-row md:gap-8 gap-1'>
                
                <a href="https://www.linkedin.com/company/hamiskills/" target="_blank" rel="noopener noreferrer"><img src={LinkenIn} alt="LinkedIn" className="w-4 h-4 md:w-8 md:h-8 mt-8 mr-6 md:mt-6 cursor-pointer" /></a>

                <a href = "https://wa.me/+252687200733" target='blank' rel='noopener noreferer'><img src={Whatsapp} alt="" className='w-4 h-4 md:w-8 md:h-8 mt-8 mr-6 md:mt-6 cursor-pointer'/></a>
                
                <a href = "https://discord.com/invite/jPSBdqc6Au" target='blank' rel='noopener noreferer'><img src={Discord} alt="" className='w-4 h-4 md:w-8 md:h-8 mt-8 mr-6 md:mt-6 cursor-pointer' /></a>
                
            </div>
        </footer>
    )
}

export default Footer


