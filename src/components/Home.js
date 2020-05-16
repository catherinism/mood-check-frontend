import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button, Icon } from 'semantic-ui-react'


const Home = () => {

    return (
        <div>
            <Container text>

            <h1>Hello, there!</h1>
            <Button icon labelPosition='right' as={Link} to='/moods/new'><Icon name='right arrow' />MOOD CHECK</Button>
            
            </Container>
        </div>
    )
}

export default Home