// import React from "react";

// class Github extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             user:null,
//             loading: false
//         }
//     }

//     componentDidMount(){
//         // const url = 'https://api.github.com/users/HassanHaroon321';

//         const promise  = fetch(url)
//         promise.then( function(res) {
//             console.log(res);
//             const json = res.json();
//             json.then(function(data){
//                 console.log(data);
//             })
//         })

        
//         promise.catch(function(err){
//             console.log(err);
//         });
//     }

//     fetchUserProfile = () => {
//         // const url = "https://api.github.com/users/MohammadArsalan";
//         this.setState({
//             loading:true
//         })
//         const promise = fetch(url)
//             promise.then( (res) =>{
//                 console.log(res);//json
//                 const json = res.json()
//                 json.then( (data) =>{
//                     this.setState({
//                         user:data,
//                         loading:false
//                     })
//                 } )
//             })

//         promise.catch(function(err){
//             console.log(err);
//         })

//     }

//     renderContent = ()=>{
//         if(this.state.loading === true){
//             return "Loading..."
//         }else if(this.state.user === null){
//             return "Click button to get Gihub User Profile"
//         }else{
//             return this.state.user.login;
//         }
//     }






//     render(){
//         return(
//             <div>
//                 <h1>Github User Profile</h1>
//                 <h4>{this.renderContent()}</h4>
//                 <button onClick={this.fetchUserProfile()}>Fetch Github User</button>
//             </div>
//         )
//     }
// }

// export default Github;