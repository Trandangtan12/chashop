import { Link } from 'react-router-dom'
import Video from '../../../audio/bannervideo.mp4'
const Banner = () => {
    return (
        <div>
            <div className="relative">
             <video className=" h-[620px] object-cover w-full" src={Video} autoPlay loop muted></video>
             <div className="absolute w-full opacity-40 bg-black top-0 left-0 right-0 bottom-0"></div>
             <div className="absolute left-[4%] bottom-[14%]">
                 <p className="text-white text-6xl mb-4 font-bold ">CHẢ FASHION </p>
                 <p className="text-white w-[600px] font-TimesNewRoman text-xl"><i> “Thời trang là thứ mà các nhà thiết kế đem lại cho bạn 4 lần mỗi năm. Và phong cách là thứ mà bạn lựa chọn”</i>
                 – Lauren Hutton</p>
                <Link to="/products"><button className="pt-2 pr-4 pl-4 pb-2 bg-white mt-4 shadow-xl">Khám phá ngay <i class="fas fa-arrow-right"></i></button></Link> 
             </div>
             </div>
             {/* <img src="https://theme.hstatic.net/200000182297/1000658038/14/ms_banner_img1.jpg?v=1392" alt=""/> */}
        </div>
    )
}

export default Banner
