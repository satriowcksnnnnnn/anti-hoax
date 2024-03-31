import image1 from "../../assets/image/1.png"
import image2 from "../../assets/image/2.png"
import image3 from "../../assets/image/3.png"
import image4 from "../../assets/image/nenek.png"
import image5 from "../../assets/image/4.png"
import image6 from "../../assets/image/5.png"
import image7 from "../../assets/image/6.png"
import image8 from "../../assets/image/7.png"

export default function Content() {
  return (
    <div className="ml-[91px] mt-[115px]">
      <h1 className="text-[40px] font-bold">Recently Post</h1>
      <div className="grid grid-cols-3 gap-16 mr-[98px]">
        <div className="shadow-md mb-10 w-[374px] h-[274px] rounded-md mt-[34px]">
            <img className="rounded-t-lg" src={image1} alt="" />
            <h1 className="ml-8 mt-[14px] font-extrabold">Apa bahaya Hoax</h1>
            <h1 className="ml-8 mt-[7px]">bahaya hoax <br/>adalah....</h1>
        </div>
        <div className="shadow-md mb-10 w-[374px] h-[274px] rounded-md mt-[34px]">
            <img className="rounded-t-lg" src={image2} alt="" />
            <h1 className="ml-8 mt-[14px] font-extrabold">Apa bahaya Hoax</h1>
            <h1 className="ml-8 mt-[7px]">bahaya hoax <br/>adalah....</h1>
        </div>
        <div className="shadow-md mb-10 w-[374px] h-[274px] rounded-md mt-[34px]">
            <img className="rounded-t-lg" src={image3} alt="" />
            <h1 className="ml-8 mt-[14px] font-extrabold">Apa bahaya Hoax</h1>
            <h1 className="ml-8 mt-[7px]">bahaya hoax <br/>adalah....</h1>
        </div>
      </div>
        <div className="flex gap-9">
            <img className="rounded-md"src={image4}/>
            <div className="grid grid-cols-2 gap-16 mr-[98px]">
              <div className="shadow-md w-full h-[215px] rounded-md ">
                <img className="rounded-t-lg" src={image5} alt="" />
                <h1 className="ml-8 mt-[14px] font-extrabold">Apa bahaya Hoax</h1>
                <h1 className="ml-8 mt-[7px]">bahaya hoax adalah....</h1>
              </div>  
              <div className="shadow-md w-full h-[215px] rounded-md ">
                <img className="rounded-t-lg w-full" src={image6} alt="" />
                <h1 className="ml-8 mt-[14px] font-extrabold">Apa bahaya Hoax</h1>
                <h1 className="ml-8 mt-[7px]">bahaya hoax adalah....</h1>
              </div>
              <div className="shadow-md w-[256px] h-[215px] rounded-md ">
                <img className="rounded-t-lg w-full" src={image7} alt="" />
                <h1 className="ml-8 mt-[14px] font-extrabold">Apa bahaya Hoax</h1>
                <h1 className="ml-8 mt-[7px]">bahaya hoax adalah....</h1>
              </div>
              <div className="shadow-md w-[258px] h-[215px] rounded-md ">
                <img className="rounded-t-lg w-full" src={image8} alt="" />
                <h1 className="ml-8 mt-[14px] font-extrabold">Apa bahaya Hoax</h1>
                <h1 className="ml-8 mt-[7px]">bahaya hoax adalah....</h1>
              </div>
            </div>
               
        </div>  
    </div>

  )
}


