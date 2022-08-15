

function PaymentMethod(){

    return (
      <section className="white-section" id="payment-section">
        <div className="row feature-row">
          <div className="col-lg-6 col-md-6 col-sm-12 payment-box-info">
            <h3 className="payment-title section-title black-color">واریز کمک های نقدی</h3>
            <div className="payment-details">
              <p className="section-p line-height">شماره حساب</p>
              <p className="section-p line-height">5029-0819-0478-2501</p>
              <p className="section-p line-height">بانک توسعه و تعاون - مهرنوش اسماعیلی</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 payment-box-img">
          
            <img className="payment-gif" src="images/handanim.gif" alt="payment-gif1"></img>
          
          </div>
        </div>
      </section>
    );
}

export default PaymentMethod;