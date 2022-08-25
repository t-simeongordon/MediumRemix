import { Link, Outlet } from 'react-router-dom'
// import { ReactComponent as MainLogo } from '../../assets/icon.svg'
import logoImg from '../../assets/book.png'
import './navigation.styles.scss';

const navigation = () => {

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    {/* <MainLogo className='logo' /> */}
                    <img alt="logo" className='logo' src={logoImg}/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/home'>Home</Link>
                    <Link className='nav-link' to='/content'>Content</Link>
                    <Link className='nav-link' to='/team'>Team</Link>
                    <Link className='nav-link' to='/'>Onboarding</Link>
                </div>
            </div>
            <Outlet />
        </>
    ) 
}

export default navigation