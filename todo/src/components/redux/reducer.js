import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD, REMOVE, COMPLETE,EDIT,EDITNAME } from "./actionTypes";

const initState = {
  todo: [],
  editname:""
};

export default (state = initState, {type,item}) => {
  console.log(type);
  
  switch (type) {
    case ADD:
        var product = {
          name: item,
          status: true,
          id: uuidv4()
        };
      return {
          ...state,
        todo: [...state.todo, product]
      };

    case REMOVE:
      console.log(state.todo);
      console.log(item);
      let arr = state.todo.filter(ele => {
        return item !== ele.id;
      });
      console.log(arr);
      return {
          ...state,
        todo: arr
      };

      case EDIT:
      console.log("edit");
      let arr1 = state.todo.map(ele => {
        return item !== ele.id? ele : {...ele,name:state.editname}
      });
      console.log(arr1);
      return {
          ...state,
        todo: arr1
      };

    case COMPLETE:
      console.log(state.todo);
      console.log(item);
      let comp = state.todo.map(ele => {
        return item !== ele.id ? ele : { ...ele, status: !ele.status };
      });
      return {
        todo: comp
      };
      case EDITNAME:
        console.log(item)
        return {
          ...state,
          editname:item
        };
  

    default:
      return state;
  }

};