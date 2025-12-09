import UP from '../assets/up-arrow.png';
function Back({ scrollTo, homeRef }){

    return(
        <div className='flex flex-row items-end justify-end'>
                <img src={UP} onClick={() => scrollTo(homeRef)} alt="" className='w-16 self-end ml-auto mr-4 mt-10 z-50 animate-bounce' />
        </div>
    )
}


export default Back