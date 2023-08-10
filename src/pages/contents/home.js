
import {  Header, Content,  Panel,} from 'rsuite';
import amalitech from './assets/AmaliTech.webp'

export default function Home (){
    return ( <>
        <Header  style={{margin: '3em 2em 0em 2em'}}>
            <h4>Dashboard</h4>
        </Header>
        <Content>
            <center>
                <div style={{display: 'flex', flexWrap: 'no-wrap', width:'70%', textAlign: 'left', margin: '3em 0em'}}>
            <Panel shaded bordered bodyFill style={{width: 480, padding: '1em'}}>
                    <p>
                        <h6>Hello!</h6>

                        <h4>Admin User</h4>
                        <small>Welcome! to your dashboard and you're logged in as Admin!</small>
                    </p>
                
            </Panel>
            <Panel shaded bordered bodyFill style={{minWidth: 240}}>
                    <img src={amalitech} height="240" />
            </Panel>
            </div>
            </center>
        </Content></>
    );
}