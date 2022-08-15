import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "./LoadingSpinner";


function CollaborationModal (props){
    toast.configure();

    const [isModalDisplayed, setModalDisplay] = useState(props.display);
    const [userText, setText] = useState({name:"", email:"", collabTopic:""});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setModalDisplay(props.display);
    }, [props.display]);

    function UpdateHandler(event){
        const {value, name} = event.target;

        setText(prevValue => {
          return {...prevValue, [name]:value};
        })
    }


    const AddUser = async (event) => {

        event.preventDefault();
        setLoading(true);

        console.log(userText);
        const res = await fetch('/api/user/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userText),
          });
          const data = await res.json();
          
          if(data){
            console.log("inside if");
                
            toast.success('🙏 اطلاعات شما با موفقیت ذخیره شد', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
                });
        
          }

        setText({name:"", email:"", collabTopic:""});
        
        props.closeModal();
        console.log("befor notify");
        
        setLoading(false);
    };

    return(
        <div>
            <ToastContainer/>
            <div style={{display: isModalDisplayed ? "block" : "none"}} id="collaboration-modal" className="modal">
            <div className="modal-content">
                <div className="close-btn">
                    <span className="modal-close" onClick={() => props.closeModal()}>&times;</span>
                </div>
                <div className="modal-body">
                    <h1 className="modal-h1 nastaligh-font">همکاری با ما</h1>
                    <h3 className="modal-h3 add-space markazi-font">برای ارتباط با ما، اطلاعات خود و نحوه ی همکاری را وارد کنید.</h3>
                    <form className="" action="/" method="post">
                        <div className="form-group add-space">
                            <label className="form-lable">نام و نام خانوادگی</label>
                            <input className="form-control markazi-font" type="text" name="name" placeholder="" 
                            onChange={UpdateHandler} value={userText.name} required></input>
                        </div>
                        <div className="form-group add-space">
                            <label className="form-lable">ایمیل</label>
                            <input className="form-control markazi-font" type="email" name="email" placeholder="user@mail.com" 
                            onChange={UpdateHandler} value={userText.email} required></input>
                        </div>
                        <div className="form-group add-space">
                            <label className="form-lable">نحوه ی همکاری</label>
                            <textarea className="form-control markazi-font" name="collabTopic" rows="2" 
                            onChange={UpdateHandler} value={userText.collabTopic} required></textarea>
                        </div>
                        {!isLoading && <button className="btn btn-dark add-space nastaligh-font" id="sendBtn" type="submit" name="sendBtn"
                        onClick={AddUser} disabled={isLoading} >ارسال</button>}
                        {isLoading && <LoadingSpinner />}
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default CollaborationModal;