import {  Header, Content,  Panel, Input, SelectPicker, Button} from 'rsuite';
export default function Location (){
    const data = ['SOS HGS'].map(
        item => ({ label: item, value: item })
      );
    return ( <>
        <Header  style={{margin: '3em 2em 0em 2em'}}>
            <h4>Location</h4>
        </Header>
        <Content>
            <center>
                <div style={{display: 'flex', width:'70%', textAlign: 'left', margin: '3em 0em'}}>
            <Panel shaded bordered bodyFill style={{width: '100%', padding: '1em'}}>
                <SelectPicker data={data} placeholder="Choose School" block />
                <br/>
                <br/>
                <Input placeholder="Name of Location" />
                <br/>
                <Button appearance='primary' block>Add Location</Button>
                <br/>
            </Panel>
            </div>
            </center>

        </Content></>
    );
}