import React, { Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component{
    render(){
        return(
            <div>test</div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);