import React from 'react';

class SearchInput extends React.Component{
 
 constructor(props){
     super(props)

     this.state={entry:''}   //it can even be entry:'hey..'
 
    
}
 
 onFormSubmit = (event) => {
     event.preventDefault();       //preventDefault helps prevent from from submit itself and refresh the page
    //  console.log(this.state.entry)   //here we get the typError as this.sate.entry is undefined i.e 'cannot read proprty'state' off undefined,
     //i.e here this->referneces undefined and not the current instance of the SearchInput
    //  this.onFormSubmit=this.onFormSubmit.bind(this) 
    this.props.onSearchSubmit(this.state.entry) 
}
    render(){
       return(
           <div className='ui segment'>
               <form onSubmit={this.onFormSubmit} className='ui form'>
               <div className='field'>
                <div className='ui massive icon input'>
                      <input 
                      type="text" 
                      placeholder='search...'
                      onChange={(event)=>this.setState({entry:event.target.value})}       //passing just the referernce to the function and not the whole function.
                      value={this.state.entry}
                      />
                      <i className='search icon'></i>
                </div> 
                </div>
               </form>
           </div>
       )
   }
}

export default SearchInput;

//other event handler as onSubmit,onClick
//to change/manipulate input i.e lets say to change it in capital :
//onChange={(event)=>this.setState({entry:event.target.value.toUppercase()})}

//methods to give correct refernce to this keyword is:
//1.bind in constructor.this.onFormSubmit=this.onFormSubmit.bind(this).
//2.convert the onFromSubmit func. into arrow func. instead.
// onFormSubmit=(event)=>{
//     event.preventDefault();       //preventDefault helps prevent from from submit itself and refresh the page
//     console.log(this.state.entry)   //here we get the typError as this.sate.entry is undefined i.e 'cannot read proprty'state' off undefined,
//     //i.e here this->referneces undefined and not the current instance of the SearchInput
//     this.onFormSubmit=this.onFormSubmit.bind(this) 
// }