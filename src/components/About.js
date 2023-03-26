import React, { useState } from 'react'

export default function About() {

const [myStyle, setMyStyle] = useState(
    {
        color: 'black',
        backgroundColor:'white'
    }
)

const [btnText, setBtnText] = useState('Enable Dark Mode')
    
const toggleStyle = ()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                //borderWidth:'thin'
                
            })
            setBtnText('Enable Light Mode')
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                //borderWidth:'thin'
            })
            setBtnText('Enable Dark Mode')
        }
    }

  return (
    <>
    <div className="container my-2">
        <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" onClick={toggleStyle} id="customSwitch1"/>
            <label className="custom-control-label" for="customSwitch1">{btnText}</label>
        </div>
    </div>
    <div className="container my-2" style={myStyle}>
        <h1>About</h1>
        <div className="accordion" id="accordionExample">
        <div className="card">
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                    </button>
                </h2>
            </div>

        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="card-body" style={myStyle}>
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
        </div>
        </div>
        </div>
        <div className="card">
        <div className="card-header" id="headingTwo">
        <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
        </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div className="card-body" style={myStyle}>
        Some placeholder content for the second accordion panel. This panel is hidden by default.
        </div>
        </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingThree">
            <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
                </button>
            </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body" style={myStyle}>
                And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
            </div>
            </div>
        </div>
        </div>

    </div>
    </>
  )
}
