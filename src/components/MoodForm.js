import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMood} from '../actions/addMood'
import { List, Form, TextArea, Button, Icon } from 'semantic-ui-react'


class MoodForm extends Component {

    state = {
        feeling:'',
        date:'',
        note:'',
        weather:''
    }

    handleChange = (event) => {
        // debugger;
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleItemClick = (e, data) => 
    this.setState({ 
        [data.name]: data.value 
    });

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMood(this.state, this.props.history)
    }
    

    render() {

        return (
           
            <div>

                <Form widths='equal' size="big" onSubmit={this.handleSubmit}>
                <Form.Group><Form.Field required>

                <Form.Input 
                label='Today is' 
                type='text' 
                name="date" 
                placeholder="May 1, 2020"
                value={this.state.date} 
                required
                onChange={this.handleChange}/>
                
                <br></br><br></br>

                <label>I am feeling</label>
                
                <List horizontal relaxed size='large' selection>
                    
                    <List.Item  
                    name="feeling"
                    value="fa-smile"
                    active={this.state.feeling === "fa-smile" ? true : false}
                    onClick={this.handleItemClick}>
                    <label><i className="far fa-2x fa-smile"></i></label>
                    <List.Content><List.Header as='a'>Happy</List.Header></List.Content>
                    </List.Item>
                    
                    <List.Item
                    name="feeling"
                    value="fa-laugh-beam"
                    active={this.state.feeling === "fa-laugh-beam"}
                    onClick={this.handleItemClick}>
                    <label><i className="far fa-2x fa-laugh-beam"></i></label>
                    <List.Content><List.Header as='a'>Excited</List.Header></List.Content>
                    </List.Item>

                    <List.Item
                    name="feeling"
                    value="fa-smile-wink"
                    active={this.state.feeling === "fa-smile-wink"}
                    onClick={this.handleItemClick}>
                    <label><i className="far fa-2x fa-smile-wink"></i></label>
                    <List.Content><List.Header as='a'>Relaxed</List.Header></List.Content>
                    </List.Item>

                    <List.Item
                    name="feeling"
                    value="fa-frown"
                    active={this.state.feeling === "fa-frown"}
                    onClick={this.handleItemClick}>
                    <label><i className="far fa-2x fa-frown"></i></label>
                    <List.Content><List.Header as='a'>Sad</List.Header>
                    </List.Content>
                    </List.Item>

                    <List.Item
                    name="feeling"
                    value="fa-sad-cry"
                    active={this.state.mood === "fa-sad-cry"}
                    onClick={this.handleItemClick}>
                    <label><i className="far fa-2x fa-sad-cry"></i></label>
                    <List.Content><List.Header as='a'>Worried</List.Header></List.Content>
                    </List.Item>

                    <List.Item
                    name="feeling"
                    value="fa-angry"
                    active={this.state.mood === "fa-angry"}
                    onClick={this.handleItemClick}>
                    <label><i className="far fa-2x fa-angry"></i></label>
                    <List.Content><List.Header as='a'>Angry</List.Header>
                    </List.Content>
                    </List.Item>
                    
                    </List>

                    <br></br><br></br>
                    <label>The weather is</label>
                    
                    <List horizontal relaxed size='large' selection>
                        
                        <List.Item  
                        name="weather"
                        value="fa-sun"
                        active={this.state.weather === "fa-sun" ? true : false}
                        onClick={this.handleItemClick}>
                        <label><i className="fas fa-sun"></i></label>
                        <List.Content><List.Header as='a'>Sunny</List.Header></List.Content>
                        </List.Item>
                
                        <List.Item
                        name="weather"
                        value="fa-cloud"
                        active={this.state.weather === "fa-cloud"}
                        onClick={this.handleItemClick}>
                        <label><i className="fas fa-cloud"></i></label>
                        <List.Content><List.Header as='a'>Cloudy</List.Header></List.Content>
                        </List.Item>

                        <List.Item
                        name="weather"
                        value="fa-umbrella"
                        active={this.state.weather === "fa-umbrella"}
                        onClick={this.handleItemClick}>
                        <label><i className="fas fa-umbrella"></i></label>
                        <List.Content><List.Header as='a'>Rainy</List.Header></List.Content>
                        </List.Item>

                        <List.Item
                        name="weather"
                        value="fa-snowflake"
                        active={this.state.weather === "fa-snowflake"}
                        onClick={this.handleItemClick}>
                        <label><i className="fas fa-snowflake"></i></label>
                        <List.Content><List.Header as='a'>Snowing</List.Header>
                        </List.Content>
                        </List.Item>

                        <List.Item
                        name="weather"
                        value="fa-temperature-low"
                        active={this.state.weather === "fa-temperature-low"}
                        onClick={this.handleItemClick}>
                        <label><i className="fas fa-temperature-low"></i></label>
                        <List.Content><List.Header as='a'>Cold</List.Header></List.Content>
                        </List.Item>

                        <List.Item
                        name="weather"
                        value="fa-thermometer-full"
                        active={this.state.weather === "fa-thermometer-full"}
                        onClick={this.handleItemClick}>
                        <label><i className="fas fa-thermometer-full"></i></label>
                        <List.Content><List.Header as='a'>Humid</List.Header>
                        </List.Content>
                        </List.Item>
                        
                        </List>

                        <br></br><br></br>
                    

                        <label>Notes</label>
                        <TextArea rows={2}
                        name="note" 
                        placeholder='Today, I had a lovely dinner with my husband.'
                        
                        value={this.state.note} 
                        onChange={this.handleChange}/>
                    
                        <br></br><br></br>
                        
                        </Form.Field>
                        </Form.Group>
                        <Button icon labelPosition='right' type="submit"><Icon name='save' />SAVE MOOD</Button>
                        
                        </Form> 
                        
                        </div>
                        )
                    }
                }

export default connect(null, {addMood})(MoodForm)