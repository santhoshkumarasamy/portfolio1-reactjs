import {AiFillInstagram,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header__socials">

        <a href="https://linkedin.in" target='_blank'><AiFillLinkedin /></a>
        <a href="https://github.com" target='_blank'><AiFillGithub /></a>
        <a href="https://instagram.com" target='_blank'><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials
