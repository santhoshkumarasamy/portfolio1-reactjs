import './navbar.css'
import {BiHomeAlt,BiUser,BiBook} from'react-icons/bi'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {TbMessages} from 'react-icons/tb'

const Navbar = ({activeNav, setActiveNav}) => {
  
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={ activeNav === '#' ? 'active' :''}><BiHomeAlt /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={ activeNav === '#about' ? 'active' :''}><BiUser /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' :''}><BiBook /></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={ activeNav === '#services' ? 'active' :''}><MdOutlineHomeRepairService /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' :''}><TbMessages /></a>
    </nav>
  )
}

export default Navbar
