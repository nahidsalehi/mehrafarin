import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EventsData from '../public/eventsData';
 

 function Events(){
  // const router = useRouter();

  function CardClicked(e, id){
    // e.preventDefault();
    // router.push("https://youtu.be/RP2teAKjYFA");
    
  }

    return (
        <section className="" id="events">
          <h2 className="eventSection-title section-title white-color">پویش های برگذار شده</h2>
            <Row xs={2} sm={2} md={3} lg={3} className="g-4">
              {EventsData.slice(0).reverse().map((eventData, idx) => (
                <Col key={idx} className="card-event">
                  <Card onClick={() => {eventData.videoURL && window.open(eventData.videoURL)}}>
                    <Card.Img className="eventCard-img" variant="top" src={eventData.imgURL} />
                    <Card.Body>
                      <Card.Title className='card-title'>{eventData.title}</Card.Title>
                      <Card.Text className='card-content'>
                        {eventData.content}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col> 
              ))}
            </Row>
        </section>);
}
        
export default Events;