import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addHappening } from '../actions/addHappening'
import { List, Form, Button, Icon } from 'semantic-ui-react'


class HappeningForm extends Component {

    state = {
        name:'',
    }

    handleItemClick = (e, data) => 
    this.setState({ 
        [data.name]: data.value 
    });

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addHappening(this.state, this.props.mood.id)
        this.setState({
            name:'',
        })
    }

    render() {
        return (
            <div>
                
                <Form onSubmit={this.handleSubmit}>
                    
                    <List horizontal relaxed size='large' selection>
               
                    <List.Item  
                    name="name"
                    value="fa-laptop"
                    active={this.state.name === "fa-laptop" ? true : false}
                    onClick={this.handleItemClick}>
                    <label><i className="fas fa-laptop"></i></label>
                    <List.Content><List.Header as='a'>Work</List.Header></List.Content>
                    </List.Item>
                    
                    <List.Item
                    name="name"
                    value="fa-users"
                    active={this.state.name === "fa-users"}
                    onClick={this.handleItemClick}>
                    <label><i className="fas fa-users"></i></label>
                    <List.Content><List.Header as='a'>Friends</List.Header></List.Content>
                    </List.Item>

                    <List.Item
                    name="name"
                    value="fa-graduation-cap"
                    active={this.state.name === "fa-graduation-cap"}
                    onClick={this.handleItemClick}>
                    <label><i className="fas fa-graduation-cap"></i></label>
                    <List.Content><List.Header as='a'>School</List.Header></List.Content>
                    </List.Item>

                    <List.Item
                    name="name"
                    value="fa-utensils"
                    active={this.state.name === "fa-utensils"}
                    onClick={this.handleItemClick}>
                    <label><i className="fas fa-utensils"></i></label>
                    <List.Content><List.Header as='a'>Food</List.Header>
                    </List.Content>
                    </List.Item>

                    <List.Item
                    name="name"
                    value="fa-heart"
                    active={this.state.name === "fa-heart"}
                    onClick={this.handleItemClick}>
                    <label><i className="fas fa-heart"></i></label>
                    <List.Content><List.Header as='a'>Relationship</List.Header></List.Content>
                    </List.Item>

                    <List.Item
                    name="name"
                    value="fa-globe-europe"
                    active={this.state.name === "fa-globe-europe"}
                    onClick={this.handleItemClick}>
                    <label><i className="fas fa-globe-europe"></i></label>
                    <List.Content><List.Header as='a'>Travel</List.Header>
                    </List.Content>
                    </List.Item>
                    
                    </List>
                    
                    <br></br>
                    
                    <Button icon labelPosition='right' type="submit"><Icon name='save' />SAVE HAPPENING</Button>
                    
                    </Form>
                
            </div>
        )
    }
}

export default connect(null, {addHappening})(HappeningForm)