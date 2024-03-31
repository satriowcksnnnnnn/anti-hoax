
import Logo from '../assets/image/Critizn.png'

export default function Navbar() {
  return (
    <nav className="bg-primary pl-[97px] pr-[89px] pt-[34px] pb-[41px] flex justify-between items-center">
      <div>
        <img src={Logo} alt="logo" width={118} height={68}/>
      </div> 
        <ul className='flex gap-14 items-center font-bold text-black text-2xl'>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/information">Information</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      <button className='bg-secondary px-[35px] rounded-[9px] w-[161px] h-[55px] font-bold border border-black'>
        Aduan
      </button>
    </nav>
  )
}

