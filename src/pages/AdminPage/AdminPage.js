import '../../style/mainStyleAdmin.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

import React from 'react'
import { Container } from 'react-bootstrap'
const AdminPage = () => {
    return (
        <section id='login'>

            <Container fluid className='background' >
                <Container className='layout'>
                    <NavBar />
                    <SideBar />

                </Container>
            </Container>
        </section>
    )

    //For render the menu
    // import React from 'react';
    // const Content = ({ selectedMenu }) => {
    //     return (
    //         <div className="content">
    //             {selectedMenu === 'dashboard' && <DashboardPage />}
    //             {selectedMenu === 'profile' && <ProfilePage />}
    //             {selectedMenu === 'settings' && <SettingsPage />}
    //         </div>
    //     );
    // };

    // export default Content;

}

export default AdminPage
