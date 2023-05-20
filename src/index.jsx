import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({text, onSelectItem}) => {

  const handleClick = () => {
    onSelectItem(text);
  }

  return (
    <a
      href="#"
      className="menu-item"
      onClick={handleClick}
    >
      {text}
    </a>
  );
};






const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleSelectItem = (title) => {
    setMenuOpened(false);
    setPageTitle(title);
  }

  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
          <button
            className="menu__btn"
            onClick={()=>{setMenuOpened(!menuOpened)}}
          ></button>
          <div className="menu__items">
            <MenuItem onSelectItem={handleSelectItem} text="Domů" />
            <MenuItem onSelectItem={handleSelectItem} text="Naše nabídka" />
            <MenuItem onSelectItem={handleSelectItem} text="Náš tým" />
            <MenuItem onSelectItem={handleSelectItem} text="Blog" />
            <MenuItem onSelectItem={handleSelectItem} text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
