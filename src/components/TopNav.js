import React from 'react'
import { Menu, Icon, Dropdown, Header } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import './TopNav.css'
import { auth } from '../firebase'

const TopNav = ({ history, user }) => {

  const handleItemClick = (e, { name }) => {
    history.push(name)
  }

  return (
    <Menu className="TopNav" stackable>
      <Menu.Item name='/' onClick={handleItemClick}>
        <Header as='h4'>
          <Icon name='home' />
          <Header.Content>
            baseweight
          </Header.Content>
        </Header>
      </Menu.Item>
      <Menu.Item
          name='/new-list'
          onClick={handleItemClick}
        >
          New List
        </Menu.Item>
      <Dropdown item text='Lists'>
        <Dropdown.Menu>
          <Dropdown.Item name='/lists/saved' onClick={handleItemClick}>Saved</Dropdown.Item>
          <Dropdown.Item name='/lists/starred' onClick={handleItemClick}>Starred</Dropdown.Item>
          <Dropdown.Item name='/lists/popular' onClick={handleItemClick}>Popular</Dropdown.Item>
          <Dropdown.Item name='/lists/all' onClick={handleItemClick}>All</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      { user.authRequestMade && 
        <Menu.Menu position='right'>
          { !user.uid && 
            <Menu.Item
              name='/sign-in/new'
              onClick={handleItemClick}
            >
              Sign Up
            </Menu.Item> 
          }
          { !user.uid && 
            <Menu.Item
              name='/sign-in'
              onClick={handleItemClick}
            >
              Sign In
            </Menu.Item>
          }
          { user.uid && 
            <Dropdown item text='Account'>
              <Dropdown.Menu>
                <Dropdown.Item name='/account/settings' onClick={handleItemClick} >Settings</Dropdown.Item>
                <Dropdown.Item name='/account/change-password' onClick={handleItemClick} >Change Password</Dropdown.Item>
                <Dropdown.Item name='/account/change-email' onClick={handleItemClick} >Change Email</Dropdown.Item>
                <Dropdown.Item name='/account/sign-out' onClick={() => auth.signOut().then(() => history.push('/'))} >Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          }
        </Menu.Menu>
      }
    </Menu>
  )

}

export default withRouter(TopNav)