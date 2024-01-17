import './Footer.css'
import Description from './Description';
import ProfileCard from './ProfileCard';
const Footer = () =>{
    return(
        <footer className='Footer'>
            <Description className="Description"/>
            <ProfileCard className="profile"/>
        </footer>
    );
}
export default Footer;