import React from 'react';

class NewGithub extends React.Component{ 
    constructor() {
        super();

        this.state = {
            user: null,
            loading: false
        }
    }
    componentDidMount() {
        const url = 'https://api.github.com/users/hassanharoon321';

        const promise = fetch(url)
        promise.then(function(res) {
            console.log(res); // json
           const json = res.json()
           json.then(function(data) { console.log(data)})
        })

        promise.catch(function(err) { 
            console.log(err )
        })
    }

    fetchUserProfile = () => {
        const url = 'https://api.github.com/users/hassanharoon321';
        this.setState({
            loading: true
        })
        const promise = fetch(url)
        promise.then((res)=> {
            console.log(res); // json
           const json = res.json()
           json.then((data)=> { 
               this.setState({
                   user: data,
                   loading: false
               })
           })
        })

        promise.catch(function(err) { console.log(err )})
    }

    renderContent = () => {

        if(this.state.loading === true) {
            return "Loading..."
        } else if(this.state.user === null) {
            return 'Click button to get github user profile'
        } else {
            return(
                <div>
               UserName: {this.state.user.login} <br/>
               Id: {this.state.user.id}    <br/>
               Location: {this.state.user.location} <br/>
               Name: {this.state.user.name}<br/>
               Twitter Name: {this.state.user.twitter_username} <br/>
               Followers: {this.state.user.followers} <br/>
               Avatar: <a href="{this.state.user.avatar_url}">{this.state.user.avatar_url}</a>

                </div>
            )

            // return this.state.user.id;
            // return this.state.user.location;
            // return this.state.user.name;
            // return this.state.user.twitter_username;
            // return this.state.user.followers;
        }

    }

    render() {

        return (
            <div>
                <h1>Github User Profile</h1>
                <h4>{this.renderContent()}</h4>
                <button onClick={this.fetchUserProfile}> fetch Github User  </button>
            </div>
        )
    }
}

export default NewGithub;