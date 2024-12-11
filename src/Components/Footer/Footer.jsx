import { useMediaQuery } from 'react-responsive';
import phone from '../../assets/images/phone_icon.png';
import mail from '../../assets/images/mail_icon.png';
import logo from '../../assets/images/logo2.png';
import social from '../../assets/images/socials.png';
import map from '../../assets/images/map_icon.png';

const Footer = () => {
  // Media queries for responsiveness
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <div
      className={`footer-container bg-black w-full items-center flex justify-center ${isMobile ? 'h-[582px]' : 'h-[283px]'}`}
    >
      <div></div>
      <div className={`footer-contents ${isMobile ? 'flex-col' : 'flex'} gap-[15px] ${isTablet ? 'flex-wrap' : ''} justify-center`}>

        {/* box1 */}
        <div
          className={`w-[373px] h-[134px] border border-white flex flex-col items-center justify-center rounded-[10px] ${
            isMobile ? 'mb-4' : ''
          }`}
        >
          <p className="text-[#0796EF] text-[16px] font-medium leading-[23.71px] tracking-[0.03em] text-left">
            Connect with us
          </p>
          <p className="flex items-center mt-[17px] gap-2">
            <img src={phone} className="w-[18px] h-[16px]" alt="" />
            <span className="text-[#857878] text-[16px]">+91 9567843340</span>
          </p>
          <p className="flex items-center gap-2">
            <img src={mail} className="w-[18px] h-[16px]" alt="" />
            <span className="text-[#857878] text-[16px]">info@deepnetsoft.com</span>
          </p>
        </div>

        {/* box2 */}
        <div className="relative flex flex-col items-center w-[373px] h-[134px] border border-white rounded-[10px]">
          <img src={logo} alt="" className="absolute top-[-38px] z-1" />
          <p className="text-[35px] font-oswald mt-10">
            <span className="text-[#0796EF]">DEEP</span> <span className="text-[#ffffff]">NET</span>{' '}
            <span className="text-[#857878]">SOFT</span>
          </p>
          <img src={social} alt="" className={  isMobile ? 'mt-4' : ''}/>
        </div>

        {/* box3 */}
        <div
          className={`w-[373px] h-[134px] border border-white flex flex-col items-center justify-center rounded-[10px] ${
            isMobile ? 'mt-4' : ''
          }`}
        >
          <p className="text-[#0796EF] text-[16px] font-medium leading-[23.71px] tracking-[0.03em] text-left">
            FIND US
          </p>
          <p className="flex items-start mt-[17px] gap-2">
            <img src={map} alt="" className="mt-2" />
            <span className="text-[#857878]">
              First floor, Geo infopark,
              <br /> Infopark EXPY, Kakkanad
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
