import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>for x in range (0, &infin;):</span>

                <Outlet />

                <span className='tags bottom-tags'>
                    validity = True
                    <br />
                    <span className='bottom-tag-validity'>return validity</span>
                </span>
            </div>
        </div>
    )
}

export default Layout