import axios from 'axios';
import React from 'react';
import SearchInput from './SearchInput'; 
import ImageList from './ImageList';
// const App=()=>{
//     return(
//         <div className='ui container' style={{marginTop:'30px' ,color:'black'}}>
//         <SearchInput />
//         </div>
//     )
// }

class App extends React.Component{
    constructor(props){
        super(props)
   
        this.state={images:[]}
         
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry){
         const response=await axios.get(`https://pixabay.com/api/?key=26190750-535273dc1aa8e2814867d177c&q=${entry}&image_type=photo`)                     //q is query that contains the what we want to search and so wee ,odify it according to our search entry
         console.log(response.data.hits)

         this.setState({images:response.data.hits})
    }

    render(){
        return(
         <div className='ui container' style={{marginTop:'50px'}}>
             <h1>Image Generator</h1>
             <SearchInput onSearchSubmit={this.onSearchSubmit}/>
           <ImageList images={this.state.images} />
         </div>
        )
    }
}

export default App;