import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updatedForm} from '../actions/moodFormData'
import {createMood} from '../actions/addMood'
import { List, Form, TextArea, Button, Icon } from 'semantic-ui-react'

class MoodForm extends Component {

    // state = {
    //     feeling:'',
    //     date:'',
    //     note:'',
    //     weather:''
    // }

    handleChange = (event) => {
        // debugger;
        const {name, value} = event.target
        const currentFormData = Object.assign({}, this.props.moodFormData, {
            [name]: value
        })
        this.props.updatedForm(currentFormData)
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }
    
    // handleItemClick = (e, data) => 
    //     // console.log(data)
    // // this.setState({ 
    // //     [data.name]: data.value 
    // // })


     handleSubmit = (event) => {
        event.preventDefault()

        const {createMood, moodFormData, history} = this.props
        createMood(moodFormData, history)
    }

    render() {
        const { feeling, date, weather, note } = this.props.moodFormData;
       
        return (
           
            <div>

                <Form widths='equal' size="big" onSubmit={this.handleSubmit}>
                <Form.Group><Form.Field>

                <Form.Input
                label='Today is' 
                type='text' 
                name="date" 
                placeholder="May 1, 2020"
                value={date} 
                onChange={this.handleChange}/>
                
                <br></br><br></br>

                <label>I am feeling</label>
               
                <List horizontal relaxed size='large' selection>

                    <List.Item>
                    <input className="ui radio checkbox space"
                    type="radio"
                    name="feeling"
                    value="fa-smile"
                    checked={feeling === "fa-smile" ? true : false}
                    onChange={this.handleChange}/>
                    <label><i className="far fa-2x fa-smile"></i></label>
                    <List.Content><List.Header as='a'>Happy</List.Header></List.Content>
                    </List.Item>
                    
                    <List.Item>
                    <input className="ui radio checkbox space"
                    type="radio"
                    name="feeling"
                    value="fa-laugh-beam"
                    checked={feeling === "fa-laugh-beam"}
                    onChange={this.handleChange}/>
                    <label><i className="far fa-2x fa-laugh-beam"></i></label>
                    <List.Content><List.Header as='a'>Excited</List.Header></List.Content>
                    </List.Item>

                    <List.Item>
                    <input className="ui radio checkbox space"
                    type="radio"
                    name="feeling"
                    value="fa-smile-wink"
                    checked={feeling === "fa-smile-wink"}
                    onChange={this.handleChange}/>
                    <label><i className="far fa-2x fa-smile-wink"></i></label>
                    <List.Content><List.Header as='a'>Relaxed</List.Header></List.Content>
                    </List.Item>

                    <List.Item>
                    <input className="ui radio checkbox space"
                    type="radio"
                    name="feeling"
                    value="fa-frown"
                    checked={feeling === "fa-frown"}
                    onChange={this.handleChange}/>
                    <label><i className="far fa-2x fa-frown"></i></label>
                    <List.Content><List.Header as='a'>Sad</List.Header>
                    </List.Content>
                    </List.Item>

                    <List.Item>
                    <input className="ui radio checkbox space"
                    type="radio"
                    name="feeling"
                    value="fa-sad-cry"
                    checked={feeling === "fa-sad-cry"}
                    onChange={this.handleChange}/>
                    <label><i className="far fa-2x fa-sad-cry"></i></label>
                    <List.Content><List.Header as='a'>Worried</List.Header></List.Content>
                    </List.Item>

                    <List.Item>
                    <input className="ui radio checkbox space"
                    type="radio"
                    name="feeling"
                    value="fa-angry"
                    checked={feeling === "fa-angry"}
                    onChange={this.handleChange}/>
                    <label><i className="far fa-2x fa-angry"></i></label>
                    <List.Content><List.Header as='a'>Angry</List.Header>
                    </List.Content>
                    </List.Item>
                    
                    </List>

                    <br></br><br></br>
                    <label>The weather is</label>
                    
                    <List horizontal relaxed size='large' selection>
                        
                        <List.Item>
                        <input className="ui radio checkbox space"
                        type="radio" 
                        name="weather"
                        value="fa-sun"
                        checked={weather === "fa-sun" ? true : false}
                        onChange={this.handleChange}/>
                        <label><i className="fas fa-2x fa-sun"></i></label>
                        <List.Content><List.Header as='a'>Sunny</List.Header></List.Content>
                        </List.Item>
                
                        <List.Item>
                        <input className="ui radio checkbox space"
                        type="radio"
                        name="weather"
                        value="fa-cloud"
                        checked={weather === "fa-cloud"}
                        onChange={this.handleChange}/>
                        <label><i className="fas fa-2x fa-cloud"></i></label>
                        <List.Content><List.Header as='a'>Cloudy</List.Header></List.Content>
                        </List.Item>

                        <List.Item>
                        <input className="ui radio checkbox space"
                        type="radio"
                        name="weather"
                        value="fa-umbrella"
                        checked={weather === "fa-umbrella"}
                        onChange={this.handleChange}/>
                        <label><i className="fas fa-2x fa-umbrella"></i></label>
                        <List.Content><List.Header as='a'>Rainy</List.Header></List.Content>
                        </List.Item>

                        <List.Item>
                        <input className="ui radio checkbox space"
                        type="radio"
                        name="weather"
                        value="fa-snowflake"
                        checked={weather === "fa-snowflake"}
                        onChange={this.handleChange}/>
                        <label><i className="fas fa-2x fa-snowflake"></i></label>
                        <List.Content><List.Header as='a'>Snowing</List.Header>
                        </List.Content>
                        </List.Item>

                        <List.Item>
                        <input className="ui radio checkbox space"
                        type="radio"
                        name="weather"
                        value="fa-temperature-low"
                        checked={weather === "fa-temperature-low"}
                        onChange={this.handleChange}/>
                        <label><i className="fas fa-2x fa-temperature-low"></i></label>
                        <List.Content><List.Header as='a'>Cold</List.Header></List.Content>
                        </List.Item>

                        <List.Item>
                        <input className="ui radio checkbox space"
                        type="radio"
                        name="weather"
                        value="fa-thermometer-full"
                        checked={weather === "fa-thermometer-full"}
                        onChange={this.handleChange}/>
                        <label><i className="fas fa-2x fa-thermometer-full"></i></label>
                        <List.Content><List.Header as='a'>Humid</List.Header>
                        </List.Content>
                        </List.Item>
                        
                        </List>

                        <br></br><br></br>
                    

                        <label>Notes</label>
                        <TextArea rows={2}
                        name="note" 
                        placeholder='Today, I had a lovely dinner with my husband.'
                        
                        value={note} 
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

const mapStateToProps = state => {
    // console.log(state.formsReducer)
    return ({
        moodFormData: state.formsReducer

    })
}                 

export default connect(mapStateToProps, {createMood, updatedForm})(MoodForm)



