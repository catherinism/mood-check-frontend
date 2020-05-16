import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <div>
        <Menu icon='labeled' vertical tabular='right' fixed='top'>
            
            <Menu.Item>
            <Icon name='home'/>
              <Link to = '/'>Home</Link>
              </Menu.Item>

              <Menu.Item>
              <Icon name='smile' />
                  <Link to = '/moods'>All Moods</Link>
              </Menu.Item>

              <Menu.Item>
              <Icon name='calendar alternate' />
              <Link to = '/moods'>Happenings</Link>
              </Menu.Item>
              
              <Menu.Item>
              <Icon name='lightbulb' />
              <Link to = '/about'>About</Link>
              </Menu.Item>
              
              </Menu>
        </div>
    )
}

export default NavBar
