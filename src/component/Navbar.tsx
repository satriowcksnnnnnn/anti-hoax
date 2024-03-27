
import Logo from '../assets/image/Critizn.png'

export default function Navbar() {
  return (
    <nav className="bg-primary pl-[97px] pr-[89px] pt-[34px] pb-[41px] flex justify-between items-center">
      <div>
        <img src={Logo} alt="logo" width={118} height={68}/>
      </div> 
      <div className='flex gap-14 items-center font-bold text-black text-2xl'>
        <p>About Us</p>
        <p>News</p>
        <p>Information</p>
        <p>Contact</p>
      </div>
      <button className='bg-secondary px-[35px] rounded-[9px] w-[161px] h-[55px] font-bold border border-black'>
        Aduan
      </button>
    </nav>
  )
}