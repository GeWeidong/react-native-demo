import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';


export default class Storage extends Component {
	constructor(props){
		super(props);
		this.state = {}
	}

	// 增
    static save(key,value) {
        try {
            return AsyncStorage.setItem(key, JSON.stringify(value), ()=>{
                console.log("save success with key:value => ",key, value);
            });
        } catch(e) {
            console.log(e);
        }
    }

    // 删
    static remove(key) {
        try {
            return AsyncStorage.removeItem(key, ()=>{
                console.log("remove value for key: ",key);
            });
        } catch(e) {
            console.log(e);
        }
    }

    // 查
    static getValueForKey(key) {
        try {
            return AsyncStorage.getItem(key, ()=>{
                console.log("trying to get value with key :", key);
            }).then((value)=>{
                return JSON.parse(value);
            },
            (e) => {
                console.log(e);
            });
        } catch(e) {
            console.log(e);
        }
    }

    // 取消点赞
    static update(key,value){
    	try {
    		return AsyncStorage.getItem(key,()=>{

    		}).then((item) => {
    			let arry = JSON.parse(item);
    			let index = arry.indexOf(value);

			    if (index > -1) {
			      arry.splice(index, 1);
			    }

    			return AsyncStorage.setItem(key, JSON.stringify(arry), ()=>{
	                console.log("update success with key:value => ",key, arry);
	            });
    		})
    	} catch(e){

    	}
    }

	render() {
	   return null;
	}
}


