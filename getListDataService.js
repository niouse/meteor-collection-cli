function getListDataService(singName, majSingName){

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

export default function ${majSingName}sListDataService(Loading){
    
    return (WrappedComponent)=>{

         class _${majSingName}sListComponentDataService0 extends Component {

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
                        ${singName}sList = {this.props.${singName}sList}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

         const _${majSingName}sListDataService1 = createContainer((props) => {
            
          let ${singName}SubList = Meteor.subscribe("${singName}sList")
          return {
            ...props,
            ${singName}sList : ${singName}sMongo.find({}, {fields : {name : 1}}).fetch(),
            isReady : ${singName}SubList.ready()
          };
        }, _${majSingName}sListComponentDataService0);
        
        return _${majSingName}sListDataService1 
    }
}



    `  
        return dataService
    
}

module.exports = getListDataService