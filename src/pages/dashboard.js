import React from 'react';
import { Container, Header, Content, Navbar, Nav, } from 'rsuite';
import { Sidebar, Sidenav} from 'rsuite';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight'; 
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import AdminIcon from '@rsuite/icons/Admin';
import MagicIcon from '@rsuite/icons/legacy/Magic'; 
import Home from './contents/home';
import School from './contents/school';
import Location from './contents/location';
import Results from './contents/results';
import Reports from './contents/report';
 
  const NavToggle = ({ expand, onChange }) => {
    return (
      //<Navbar appearance="subtle" className="nav-toggle">  
        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            {expand ?  <AngleLeftIcon /> : <AngleRightIcon />}
          </Nav.Item>
        </Nav>
      //</Navbar>
    );
  };
  

const Dashboard = () => {
    const [expand, setExpand] = React.useState(true);
    const [page, setPage] = React.useState('home')

  return <div className="show-fake-browser navbar-page">
            <Container>
            <Header>
                <Navbar appearance="subtle" style={{boxShadow: '2px 2px 3px orange'}}>
                <Navbar.Brand>
                    <a></a>
                </Navbar.Brand>
                <Nav>
                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                    <Nav.Item>C4K Portal</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<AdminIcon />}>Admin User</Nav.Item>
                </Nav>
                </Navbar>
            </Header>
            <Content>
                <br/>
                <Container>
                    <Sidebar
                    style={{ display: 'flex', flexDirection: 'column', borderRight:'1px solid orange' }}
                    width={expand ? 260 : 56}
                    collapsible>
                    <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                    <Sidenav.Body>
                        <Nav>
                        <Nav.Item eventKey="1" active icon={<DashboardIcon />} onClick={()=> setPage("home")}>
                            Dashboard
                        </Nav.Item>
                        
                        <Nav.Menu
                            eventKey="3"
                            trigger="hover"
                            title="Setup"
                            icon={<MagicIcon />}
                            placement="rightStart"
                        >
                            <Nav.Item eventKey="3-1" onClick={()=> setPage("school")}>School</Nav.Item>
                            <Nav.Item eventKey="3-2" onClick={()=> setPage("location")}>Location</Nav.Item>
                            <Nav.Item eventKey="3-3" onClick={()=> setPage("results")}>Results</Nav.Item>
                        </Nav.Menu>
                        <Nav.Item ><p style={{fontSize:"9px", fontWeight: 'bold'}}>REPORTS</p></Nav.Item>
                        <Nav.Item eventKey="2" icon={<GroupIcon />} onClick={()=> setPage("reports")}>
                            Reports
                        </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                    </Sidenav>
                </Sidebar>
                <Container>
                    {page === "school"?<School/>
                    :page === "location"?<Location/>
                    :page === "results"?<Results/>
                    :page === "reports"?<Reports/>
                    :<Home/>}
                    <br/>
                    <center>© Copyright C4K Portal. All Rights Reserved<br/>
                    Designed by C4K Tutors
                    </center>
                </Container>
            </Container>
            </Content>
            </Container>
        </div>
};

export default Dashboard;

