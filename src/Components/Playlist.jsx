import React, { Component } from "react";
import { Button } from 'reactstrap'
import { connect } from "react-redux";

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return{
    canzoni:()=>dispatch({type:'ADD_ITEM_TO_PLAYLIST'})
  }
}


class canzoni extends Component {
  state = {  }
  render() { 
    console.log(this.props.playlist.songs)
  return ( 

<div>
  <div>
{this.props.playlist && this.props.playlist.songs.map((song,index)=> 
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
         
       {song}
      
        </div>
        )}
        </div>
        
        </div>
        );
  }
}
 


export default connect(
  mapStateToProps,
  mapDispatchToProps

)(canzoni);