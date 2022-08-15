
import Header from '../components/Header'
import CollaborationModal from '../components/CollaborationModal';
import { useState } from 'react';
import Link from 'next/link'


function TitleSection(){

    const [isModalDisplayed, setModalDisplay] = useState(false);

    function CollabBtnOnClick(){
        console.log(isModalDisplayed);
        setModalDisplay(true);
    }

    function CloseModal(){
        setModalDisplay(false);
    }

    return (
        <section className="colored-section" id="title-section">
            <div className="container-fluid">
        
                {/* Nav Bar  */}
                <Header />
                <CollaborationModal display={isModalDisplayed} closeModal={CloseModal}/>
                {/* Title */}
                <div className="row title-div">
                    <div className="col-lg-6">
                    <img src="images/kids2.png" className="title-img" alt="kids-img"></img>
                    </div>
                    <div className="col-lg-6 title-h1-div">
                        <h1 className='nastaligh-font h1-title'>لبخند کودکی</h1>
                        <br></br>
                        <h1 className='nastaligh-font h1-title'>در دستان توست ...</h1>
                        <div className="title-buttom-div">
                            <button type="button" className="btn btn-dark btn-lg title-buttom" id="collaboration-btn" 
                            onClick={CollabBtnOnClick}><span>همکاری با ما</span></button>
                            <Link href="#payment-section" passHref>
                                <button type="button" className="btn btn-outline-light btn-lg title-buttom" id="donation-btn" >
                                <span>واریز وجه</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img src="images/yellow-pallet3.png" className="title-y-color" alt="yellow-pallet-img"></img>
                <img src="images/red-pallet2.png" className="title-r-color" alt="red-pallet-img"></img>
            </div>
        </section>
    );
}

export default TitleSection;