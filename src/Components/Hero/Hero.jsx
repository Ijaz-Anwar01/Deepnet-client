import bg from '../../assets/images/bg1.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div
        className="hero w-full h-[331px] bg-cover bg-center flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="menu-heading w-[177px] h-[111px]">
          <p
            className="text-[75px] text-[#ffff] font-oswald font-semibold leading-[111.15px] tracking-[0.03em] text-left"
            style={{
              textShadow: '4px 3px 0px #800020',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            MENU
          </p>
        </div>

        <p
          className="font-kelly text-[18px] font-normal leading-[21.82px] text-center text-[#BBBBBB]"
          style={{
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br /> place an order, use the "Order Online" button located below the menu.
        </p>
      </div>
    </div>
  );
};

export default Hero;
