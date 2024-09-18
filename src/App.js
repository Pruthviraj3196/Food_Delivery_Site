import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuConatiner from './Components/MenuConatiner';
import { useEffect } from 'react';
import BannerName from './Components/BannerName';

function App() {

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  },[]);

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
          <div className='menuCard'></div>
          <div className='rowContainer'></div>
          <div className='dishitenContainer'></div>
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

