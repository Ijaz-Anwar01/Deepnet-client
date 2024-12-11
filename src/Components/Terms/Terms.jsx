import { useMediaQuery } from 'react-responsive';

const Terms = () => {
  // Define media queries for responsiveness
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={isMobile?'h-[75px] bg-[#222222]':"h-[45px] bg-[#222222]"}>
      <div
        className={`${
          isMobile ? 'text-center' : 'ml-[147px] mr-[150px]'
        } flex justify-between items-center ${isMobile ? 'flex-col' : 'flex-wrap'}`}
      >
        <p
          className={`${
            isMobile ? 'text-[14px]' : 'text-[16px]'
          } text-[#857878] cursor-pointer mt-[15px]`}
        >
          © 2024 Deepnetsoft Solutions. All rights reserved.
        </p>

        <p
          className={`${
            isMobile ? 'text-[14px]' : 'text-[16px]'
          } text-[#857878] cursor-pointer mt-[15px] ${isMobile ? '' : 'ml-6'}`}
        >
          Terms & Conditions <span className={`${isMobile ? '' : 'ml-6'}`}>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Terms;
