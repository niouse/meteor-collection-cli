function getOneDataService(singName, majSingName){

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

export default function ${majSingName}sOneDataService(){

    return (WrappedComponent)=>{

         class _${majSingName}sComponentOneDataService0 extends Component {

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
                        ${singName}sList = {this.props.${singName}sList}
                        getOne${majSingName} = {this.props.getOne${majSingName}}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

        const _${majSingName}sOneDataService1 = createContainer((props) => {

          let ${singName}SubOne = Meteor.subscribe("one${majSingName}s", props.${singName}Id)  
          return {
            ...props,
            ${singName} : ${singName}sMongo.find({_id : props.${singName}Id}).fetch()[0],
            isReady : ${singName}SubOne.ready()
          };
        }, _${majSingName}sComponentOneDataService0);


        return class _${majSingName}sOneDataService2 extends Component {

            constructor(props){
                super(props);
                this.state = {
                    ${singName}Id : null
                }
            }

            getOne${majSingName}(id){
                this.setState({
                    ${singName}Id : id
                })
            }

            render (){
                return (
                    <_${majSingName}sOneDataService1
                        {...this.props}
                        ${singName}Id = {this.state.${singName}Id}
                        getOne${majSingName}={(id)=>this.getOne${majSingName}(id)}
                    /> 
                )
            }
        }

    }
}

    `  
        return dataService
    
}

module.exports = getOneDataService