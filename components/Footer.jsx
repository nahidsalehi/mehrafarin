import { List } from 'semantic-ui-react';

function Footer(){
    return (  
    <footer className="colored-section" id="footer">

        <hr className='footer-hr' />

        <div className="row">
          <div className="col-lg-4 col-md-4 footer-rightSection">
            <h3 className="footer-heading">لینک ها</h3>
            <List>
              <List.Item>
                  <List.Icon className='listItem-img' name='leaf' />
                  <List.Content><a className="footer-link" href="#features">نحوه ی فعالیت مِهرآفرین</a></List.Content>
              </List.Item>
              <List.Item>
                  <List.Icon className='listItem-img' name='leaf' />
                  <List.Content><a className="footer-link" href="#events">پویش های برگزار شده</a></List.Content>
              </List.Item>
              <List.Item>
                  <List.Icon className='listItem-img' name='leaf' />
                  <List.Content><a className="footer-link" href="#payment-section">واریز کمک نقدی برای نیازمندان</a></List.Content>
              </List.Item>
            </List>
  
          </div>
          <div className="col-lg-4 col-md-4 middle-column">
           
          </div>
          <div className="col-lg-4 col-md-4 footer-leftSection">
            <h3 className="footer-heading contact-heading">نحوه ی ارتباط با ما</h3>
            <List>
              <List.Item>
                  <List.Icon className='listItem-img' name='instagram' />
                  <List.Content><a className="contact-link" href="http://instagram.com/mehr.afariin99">mehr.afariin99</a></List.Content>
              </List.Item>
              <List.Item>
                  <List.Icon className='listItem-img' name='mail' />
                  <List.Content><a className="contact-link" href="mailto:mehrafarin99@gmail.com">mehrafarin99@gmail.com</a></List.Content>
              </List.Item>
            </List>
          </div>
        </div>

        <p className="footer-p"> © تمامی حقوق برای سازمان مردم نهاد مِهرآفرینان دیار نون محفوظ است.</p>
    </footer>

  );
}

export default Footer;