import { Content,  Panel, Nav, Navbar, Input, InputGroup, Uploader, Button} from 'rsuite';
import React from 'react';

export default function Results(){
    const [active, setActive] = React.useState('home');
    return ( <>
        <Content>
            <center>
                <div style={{display: 'flex', width:'70%', margin: '3em 0em'}}>
            <Panel shaded bordered bodyFill style={{width: '100%', padding: '1em'}}>
                
                <div>Export | Import</div>
                <br/>
                <Navbar appearance="tabs"><Nav style={{textAlign: 'left'}}>
                            <Nav.Item active={active}  onSelect={setActive}>Export</Nav.Item>
                            <Nav.Item onSelect={setActive}>Import</Nav.Item>
                        </Nav>
                </Navbar>
                {setActive?<>
                 <h4> Import Report</h4>
                 <br/>
                 <br/>
                 <Uploader action="//jsonplaceholder.typicode.com/posts/" />
                
                </>:<>
                <p>Click button to export empty spreadsheet for students report list.</p>
                <Button appearance='primary'>Export</Button>
                </>
                }
            </Panel>
            </div>
            </center></Content></>)
            }