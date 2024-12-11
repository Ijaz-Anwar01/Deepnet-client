import bg3 from '../../assets/images/bg3.png';
import frame1 from '../../assets/images/Frame1.png';
import frame2 from '../../assets/images/Frame2.png';
import drink1 from '../../assets/images/drink.png';
import drink2 from '../../assets/images/cocktail1.png';

const Items = () => {
  const menuItems = [
    {
      title: "CINNAMON TOAST CRUNCH",
      description: "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon",
      price: "$16"
    },
    {
      title: "BAR 42 MARY",
      description: "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
      price: "$14"
    },
    {
      title: "BAR 42 MARY",
      description: "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
      price: "$14"
    }
  ];

  return (
    <div className="items-container flex justify-center items-center">
      <div
        className="relative items w-full h-[672px] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        {/* Frame Images */}
        <img src={frame1} alt="Frame 1" className="absolute left-0 h-full" />
        <img src={frame2} alt="Frame 2" className="absolute right-0 h-full" />

        {/* Drink Images */}
        <img
          src={drink1}
          alt="Drink 1"
          className="absolute w-[190px] h-[281px] left-[140px] top-0 z-20 "
        />
        <img
          src={drink2}
          alt="Drink 2"
          className="absolute w-[192px] h-[207px] right-[190px] bottom-20"
        />

        {/* Content Box */}
        <div className="relative w-[1140px] h-[416px] border-white border-[1px] flex flex-col items-center px-20">
          {/* Title Section */}
          <div className="flex items-center gap-5 mt-10 mb-16">
            <div className="w-[68px] h-[3px] bg-[#857878]"></div>
            <h1
              className="text-[50px] text-white font-oswald font-semibold tracking-[0.03em] text-center"
              style={{
                textShadow: '4px 3px 0px #800020',
              }}
            >
              BRUNCH COCKTAILS
            </h1>
            <div className="w-[68px] h-[3px] bg-[#857878]"></div>
          </div>

          {/* Menu Items */}
          <div className="w-full space-y-8 relative top-[-48px]">
  <div className="grid grid-cols-2 gap-8">
    {menuItems.map((item, index) => (
      <div key={index} className="flex flex-col justify-between items-start">
        <div className="flex items-center w-full mb-4">
          <h2 className="text-white font-oswald text-2xl tracking-[0.03em]">
            {item.title}
          </h2>
          <div className="flex-1 relative top-[-10px]">
            <div className="border-b-4 border-dotted border-white mx-4"></div>
          </div>
          <span className="text-white font-oswald text-2xl">
            {item.price}
          </span>
        </div>
        <p className="text-white/60 font-['Kelly_Slab'] text-lg mt-2 leading-[22px]">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Items;