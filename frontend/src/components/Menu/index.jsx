import './style.scss';

const Menu = ({ onChangeImage, cardsCount }) => {
 
  return (
    <div className="menu noprint">
      <span className="menu__note note">Vygenerováno {cardsCount} kartiček</span>

      <div className="menu__buttons">
        <input type="file" id="image-input" onChange={(event) => onChangeImage(event.target.files[0])} hidden/>
        <label htmlFor="image-input" className="btn btn--outlined btn-image">Nahrát obrázek</label>
        <button className="btn btn--outlined btn-print" type="button" onClick={() => window.print()}>Vytisknout</button>
      </div>
    </div>
  )
};

export default Menu;