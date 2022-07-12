import React, { useRef } from 'react';

function Refhook(props) {
    const Refname = useRef()
    const Refemail = useRef()
    const Refdate = useRef()

    const Refexample = () => {
        console.log(Refname.current.value);
        Refemail.current.style.backgroundColor = 'red';
        Refdate.current.focus();
    }
    return (
        <div className="container">
            <div className="col-md-6">
                <div>
                    <div className=" mb-4">
                        <input ref={Refname} id="name" name="name" type="text" placeholder="Name" className="form-control input-md" />
                    </div>
                    <div className="mb-4">
                        <input ref={Refemail} id="email" name="email" type="text" placeholder="E-Mail" className="form-control input-md" />
                    </div>
                    <div className="mb-4">
                        <input ref={Refdate} id="date" name="date" type="text" placeholder="Preferred Date" className="form-control input-md" />
                    </div>
                    <div className="">
                        <button id="singlebutton" name="singlebutton" className="btn btn-primary" onClick={() => { Refexample() }}>Make An Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Refhook;