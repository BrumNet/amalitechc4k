
import {  Header, Content,  Panel, Input, SelectPicker, Button} from 'rsuite';
export default function School (){
   
    return ( <>
        <Header  style={{margin: '3em 2em 0em 2em'}}>
            <h4>School</h4>
        </Header>
        <Content>
            <center>
                <div style={{display: 'flex', width:'70%', textAlign: 'left', margin: '3em 0em'}}>
            <Panel shaded bordered bodyFill style={{width: '100%', padding: '1em'}}>
                
                <Input placeholder="Name of School" />
                <br/><br/>
                <Button appearance='primary' block>Add School</Button>
                <br/>
            </Panel>
            </div>
            </center>
        </Content></>
    );
}