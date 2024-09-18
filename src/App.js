import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuConatiner from './Components/MenuConatiner';
import { useEffect, useState } from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {MenuItems, Items} from "./Components/Data";
import ItemCard from './Components/ItemCard';

function App() {
  
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    // Menu card active
    const menuCard = document
    .querySelector(".rowContainer")
    .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  },[isMainData]);
//  set main dish items on filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

  return (
    <div className="App">
     {/* Hearder Section*/}
      <Header/>
     {/* Main Container */}
     <main>
      <div className='mainContainer'>
        {/* Banner */}
        <div className='banner'>
          <BannerName name={"Pruthvi"} discount={"20"} link={"#"} />
          <img src='https://thumb.ac-illust.com/79/79d12b64ac271a9b94b86406d4ba21cd_t.jpeg'
           alt='Deliver.png'
           className='deliveryPic'
           />
        </div>
        {/* dishContainer */}
        <div className='dishContainer'>
          <div className='menuCard'>
            <SubMenuContainer name={"Menu Category"}/>
          </div>
          <div className='rowContainer'>

            {
              MenuItems && MenuItems.map(data => (

                <div key={data.id} onClick={() => setData(data.itemId)}>
                <MenuCard  imgSrc={data.imgSrc} 
                name={data.name} 
                isActive = {data.id === 1 ? true: false}
                />
              </div>
              
              ))
            }

          
          </div>
          <div className='dishItemContainer'>
           
           {
            isMainData && isMainData.map(data =>(
              <ItemCard 
              key={data.id}
              itemId = {data.id}
              imgSrc={data.imgSrc} 
              name={data.name} 
              ratings={data.ratings} 
              price={data.price} />
            ))
           }
          </div>
        </div>
      </div>
      <div className='rightMenu'></div>
     </main>
     {/* Bottom menu */}
     <div className='leftMenu'>
      <ul id='menu'>
        <MenuConatiner link={'#'} icon = {<HomeRounded />} isHome/>
        <MenuConatiner link={'#'} icon = {<Chat />} />
        <MenuConatiner link={'#'} icon = {<AccountBalanceWalletRounded />} />
        <MenuConatiner link={'#'} icon = {<Favorite />} />
        <MenuConatiner link={'#'} icon = {<SummarizeRounded />} />
        <MenuConatiner link={'#'} icon = {<Settings />} />

        <div className='indicator'>

        </div>
      </ul>
     </div>
    </div>
  );
}

export default App;

