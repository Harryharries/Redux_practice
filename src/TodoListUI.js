import React, { Component } from 'react';
import "antd/dist/antd.css";
import {Input, Button, List} from 'antd'

class TodoListUI extends Component {
    render() { 
        return ( 
<div style ={{margin:'30px'}}>
            <div>
    {/* <h1>{this.state.inputValue}</h1> */}
            <Input 
            placeholder={this.props.inputValue}
            style={{width: '250px', marginRight:'10px'}}
            onChange={this.props.changeInputValue}
            value = {this.props.inputValue}
            />

            <Button data-testid="button"
            type="primary"
            onClick={this.props.clickBtn}> add </Button>
            </div>
            
            <div style={{margin:'10px',width:'300ox'}}>
                <List
                bordered
                dataSource={this.props.list}
                renderItem={(item,index)=>(
                <List.Item onClick={()=>(this.props.deleteItem(index))}>{item}</List.Item>
                )}></List>
            </div>
            </div> 
         );
    }
}
 
export default TodoListUI;