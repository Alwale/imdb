import classes from './DesktopMenu.module.css'
import { ReactComponent as Logo } from '../../../../images/logo.svg';
import { ReactComponent as MenuIcon } from '../../../../images/menu_icon.svg';
import '../../../../styles/Buttons.css'
import { Link } from 'react-router-dom';

const DesktopMenu = (props) => {
  const { togglePopupMenu } = props
  
  return (
    <div className={classes.desktopMenu} >
      <Link to="/"><Logo /></Link>
      <div className={`${classes.menuButton} bButton`}  onClick={togglePopupMenu}>
        <MenuIcon id={classes.menuIcon} />
        <span>Menu</span>
      </div>
     
    </div>
  )
}
export default DesktopMenu