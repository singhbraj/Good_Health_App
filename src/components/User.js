import React, { Component } from 'react'
import Hero from './Hero'
import Banner from './Banner'


class User extends Component {
    render() {
        return (
            <>
            <Hero>
            <Banner title="You Successfully Sing Up" subtitle="User Successfully added in database" >
                </Banner>
            </Hero>
            </>
        )
    }
}

export default User
