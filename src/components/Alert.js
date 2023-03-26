import React, {useState} from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    const upLow = lower.charAt(0).toUpperCase() + lower.slice(1);
    return upLow;
  }

  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}
        {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span> 
        </button> */}

        
    </div>
  )
}
