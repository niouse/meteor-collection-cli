function getDataService(singName, majSingName){

    var dataService = `

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {${singName}sMongo} from "./../${singName}s.js"

var containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}

export default function ${majSingName}sDataService(){

    return (WrappedComponent)=>{

         class _${majSingName}sComponentDataService0 extends Component {

            constructor(props){
                super(props);
            }

            getLoading(){
                 if (Loading){
                     return <Loading />
                 }
                 else return <p>loading</p>
             }


            render (){
                return (
                    this.props.isReady ?
                    <WrappedComponent
                        {...this.props}
                        ${singName} = {this.props.${singName}}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

        const _${majSingName}sDataService1 = createContainer((props) => {

          let ${singName}Sub = Meteor.subscribe("${singName}s")
          return {
            ...props,
            ${singName} : ${singName}sMongo.find({_id : props.${singName}Id}).fetch()[0],
            isReady : ${singName}Sub.ready()
          };
        }, _${majSingName}sComponentDataService0);

        return _${majSingName}sDataService1
    }
}
    `  
        return dataService
    
}

module.exports = getDataService