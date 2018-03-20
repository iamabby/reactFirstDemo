import React from "react";
import PropTypes from 'prop-types';


class Properties extends React.Component{
    render(){
        let txt=this.props.txt;
        let age=this.props.age;
        return <h3>{txt} {age}</h3>
    }
}
Properties.propTypes={
    txt:PropTypes.string,
    age:PropTypes.number.isRequired,
    fun:PropTypes.func,
    
}
export default Properties;