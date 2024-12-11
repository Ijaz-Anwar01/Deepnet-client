import { useState, useEffect } from 'react';
import { menuService } from '../../services/apiservices';
import bg2 from '../../assets/images/bg2.png';
import bg3 from '../../assets/images/bg3.png';
import frame1 from '../../assets/images/Frame1.png';
import frame2 from '../../assets/images/Frame2.png';
import drink1 from '../../assets/images/drink.png';
import drink2 from '../../assets/images/cocktail1.png';
import { useMediaQuery } from 'react-responsive';

const CategoriesAndItems = () => {
  const [menus, setMenus] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const data = await menuService.getAllMenus();
      setMenus(data);
      if (data.length > 0) {
        setActiveMenu(data[0]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  // Define breakpoints using react-responsive
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="categories-container">
        <div
          className="categories w-full h-[79px] bg-cover bg-center flex justify-center items-center flex-col"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="category-buttons flex justify-center items-center gap-4">
            {menus.map((menu) => (
              <button
                key={menu._id}
                onClick={() => setActiveMenu(menu)}
                style={{
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                  textShadow: '1.3px 0.97px 0px #800020',
                }}
                className="w-[114.25px] h-[49.98px] opacity-100 flex justify-center items-center hover:opacity-90 transition border-[0.5px] border-[#0796EF] font-oswald text-[16px] font-semibold text-[#ffffff] leading-[23.71px] tracking-[0.03em] text-left hover:cursor-pointer transform hover:scale-105 hover:bg-[border: 0.32px solid #0796EF]"
              >
                {menu.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="items-container flex justify-center items-center">
        <div
          className="relative items w-full h-[672px] bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${bg3})` }}
        >
          {/* Hide frames on mobile and tablet */}
          {!isMobile && !isTablet && (
            <>
              <img src={frame1} alt="Frame 1" className="absolute left-0 h-full" />
              <img src={frame2} alt="Frame 2" className="absolute right-0 h-full" />
            </>
          )}

          {/* Adjust drink images for different screen sizes */}
          <img
            src={drink1}
            alt="Drink 1"
            className={`absolute ${isMobile ? 'w-[76px] h-[111px] left-[15px] top-[60px]' : isTablet ? 'w-[130px] h-[190px] left-[30px] top-[80px]' : 'w-[190px] h-[281px] left-[140px] top-[-60px]'} z-20`}
          />
          <img
            src={drink2}
            alt="Drink 2"
            className={`absolute ${isMobile ? 'w-[74px] h-[106px] right-[15px] bottom-20' : isTablet ? 'w-[140px] h-[200px] right-[30px]' : 'w-[192px] h-[207px] right-[190px] bottom-20'} z-20`}
          />

          <div
            className={`relative ${isMobile || isTablet ? 'px-4' : 'px-20'} w-[1140px] h-[484px] border-white border-[1px] flex flex-col items-center`}
            style={{ marginLeft: isMobile || isTablet ? '16px' : '0', marginRight: isMobile || isTablet ? '16px' : '0' }}
          >
            <div className="flex items-center gap-5 mt-10 mb-16">
              <div className="w-[68px] h-[3px] bg-[#857878]"></div>
              <h1
                className={`text-[50px] text-white font-oswald font-semibold tracking-[0.03em] text-center ${
                  isMobile ? 'text-[36px]' : isTablet ? 'text-[42px]' : ''
                }`}
                style={{ textShadow: '4px 3px 0px #800020' }}
              >
                {activeMenu?.name.toUpperCase()} MENU
              </h1>
              <div className="w-[68px] h-[3px] bg-[#857878]"></div>
            </div>

            <div className="w-full space-y-8 relative top-[-48px]">
              <div className={`grid ${isMobile || isTablet ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
                {activeMenu?.items.map((item, index) => (
                  <div key={index} className="flex flex-col justify-between items-start">
                    <div className="flex items-center w-full mb-4">
                      <h2
                        className={`text-white font-oswald ${isMobile || isTablet ? 'text-[16px]' : 'text-2xl'} tracking-[0.03em]`}
                      >
                        {item.name}
                      </h2>
                      <div className="flex-1 relative top-[-10px]">
                        <div className="border-b-4 border-dotted border-white mx-4"></div>
                      </div>
                      <span
                        className={`text-white font-oswald ${isMobile || isTablet ? 'text-[16px]' : 'text-2xl'}`}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className={`text-white/60 font-['Kelly_Slab'] mt-2 leading-[22px] ${
                        isMobile || isTablet ? 'text-[14px]' : 'text-lg'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesAndItems;
