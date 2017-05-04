import React, { Component } from 'react'
import { Sidebar, Button, Menu, Icon, Segment, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class SidebarLeft extends Component {
  state = {}
  componentWillUpdate(nextProps, nextState) {
    // when the menu becomes visible, setup some handlers so we can close the menu easily
    if (nextProps.visible == true) {
      document.addEventListener('keydown', this.handleKeyPress);
      document.querySelector('.pusher').addEventListener('click', this.handleClick);
    }
    else {
      document.removeEventListener('keydown', this.handleKeyPress);
      document.querySelector('.pusher').removeEventListener('click', this.handleClick);
    }
    
  }
  handleClick = () => {
    if (this.props.visible) {
      this.props.toggleVisibility()
    }
  }
  handleKeyPress = (e) => {
    if(e.keyCode === 27 && this.props.visible) {
      this.props.toggleVisibility()
    }
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    // this.props.toggleVisibility()
  }
  render() {
    const { visible } = this.props
    const { activeItem } = this.state

    return (
      <div>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='overlay'  visible={this.props.visible} vertical inverted>
            <Menu.Item as='div' name='home'>
              <Header as='h2' color='teal'>
                <Icon name='home' />
                baseweight
              </Header>
            </Menu.Item>
              <Menu.Item  name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick}>
                <Icon name='add user' />
                Register
              </Menu.Item>
              <Menu.Item as='div' name='Sign In' active={activeItem === 'Sign In'} onClick={this.handleItemClick}>
                <Icon name='sign in' />
                Sign In
              </Menu.Item>
              <Menu.Item as='div' name='New List' active={activeItem === 'New List'} onClick={this.handleItemClick}>
                <Icon name='plus' />
                New List
              </Menu.Item>
            <Menu.Item as='div'>
              Lists

              <Menu.Menu>
                  <Menu.Item as='div' name='My Lists' active={activeItem === 'My Lists'} onClick={this.handleItemClick}>
                    My Lists
                  </Menu.Item>
                  <Menu.Item as='div' name='Starred' active={activeItem === 'Starred'} onClick={this.handleItemClick}>
                    Starred
                  </Menu.Item>
                  <Menu.Item as='div' name='Popular' active={activeItem === 'Popular'} onClick={this.handleItemClick}>
                    Popular
                  </Menu.Item>
                  <Menu.Item as='div' name='All' active={activeItem === 'All'} onClick={this.handleItemClick}>
                    All
                  </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item as='div'>
              Account

              <Menu.Menu>
                <Menu.Item as='div' name='Settings' active={activeItem === 'Settings'} onClick={this.handleItemClick}>
                  Settings
                </Menu.Item>
                <Menu.Item as='div' name='Change Email' active={activeItem === 'Change Email'} onClick={this.handleItemClick}>
                  Change Email
                </Menu.Item>
                <Menu.Item as='div' name='Change Password' active={activeItem === 'Change Password'} onClick={this.handleItemClick}>
                  Change Password
                </Menu.Item>
                <Menu.Item as='div' name='Sign Out' active={activeItem === 'Sign Out'} onClick={this.handleItemClick}>
                  Sign Out
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
            <Menu.Item as='div' name='Forgot Password' active={activeItem === 'Forgot Password'} onClick={this.handleItemClick}>
              <Icon name='mail outline' />
              Forgot Password
            </Menu.Item>
            <Menu.Item as='div' name='Github' active={activeItem === 'Github'} onClick={this.handleItemClick}>
              <Icon name='github' />
              Github
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={this.props.visible}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
