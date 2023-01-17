import './style.scss';
import Btn from '../Btn'; 

const Menu = ({ onChangeImage, cardsCount }) => {
 
  return (
    <div className="menu noprint">
      <span className="menu__note note">Vygenerováno {cardsCount} kartiček</span>

      <div className="menu__buttons">
        <input type="file" id="image-input" onChange={(event) => onChangeImage(event.target.files[0])} hidden/>
        <label htmlFor="image-input" className="btn btn--outlined btn-image">Nahrát obrázek</label>
        <Btn classValue="btn--outlined btn-print" type="button" value="Vytisknout" handleClick={() => window.print()}/>
      </div>
    </div>
  )
};

export default Menu;