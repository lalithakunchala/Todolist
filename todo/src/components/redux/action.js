import React from "react";
import { ADD, REMOVE, COMPLETE,EDIT,EDITNAME } from "./actionTypes";

export const add = item => ({
  type: ADD,
  item
});

export const remove = item => ({
  type: REMOVE,
  item
});
export const edit = item => ({
    type: EDIT,
    item

  });
  export const editname = item => ({
    type: EDITNAME,
    item

  });

export const complete = item => ({
  type: COMPLETE,
  item
});

// export const total = item => ({
//   type: TOTAL,
//   item
// });