import React, {Component} from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'

class User extends Component{
    constructor(props)
    {
        super(props);
        this.state={data: []}
    }

    componentDidMount() {
        fetch('/api/users')
            .then((response) => response.json())
            .then((data) => {
                this.setState({data: data.users})
        })
    }

    render() {
        return (
            <Layout>
                <Header/>
                <div className="container">
                    {
                        this.state.data.map((user, key) => {
                            return (<h2 key={key} className="text-center mt-5 mb-3">{user.name}</h2>)
                        }
                    )}
                </div>
            </Layout>
        );
    }
}

export default User;
