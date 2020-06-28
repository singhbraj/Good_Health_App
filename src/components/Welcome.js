import React, { Component } from 'react'
import Hero from './Hero'
import Banner from './Banner'


class Welcome extends Component {
    render() {
        return (
            <>
            <Hero>
            <Banner title="Welcome" subtitle="You are Successfully loged In" >
                </Banner>
            </Hero>
            </>
        )
    }
}

export default Welcome
