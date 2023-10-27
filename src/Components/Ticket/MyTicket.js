import React, { useEffect, useState } from 'react'
import "./Ticket.css"
import NavBar from '../NavBar'
import Footer from '../Footer'
import { saveAs } from 'file-saver';
import authContext from '../../context/authContext';
import { useContext } from 'react';

function MyTicket() {
    const [tickets, setTicket] = useState([])
    const [event, setEvent] = useState({})
  const [nbre,setNbre]=useState()
  const { auth, setAuth, logged, setLogged } = useContext(authContext);


    async function printMyTicket(ticketId) {
      try {
        const response = await fetch(`http://localhost:8085/api/v1/tickets/pdf/generate/${ticketId}`, {
          method: "GET",
          responseType: 'blob' // Set responseType to 'blob'
        });
    
        if (response.ok) {
          const blob = await response.blob();
          const pdfFilename = 'my-ticket.pdf'; // Define the filename
    
          // Use FileSaver.js to save the PDF
          saveAs(blob, pdfFilename);
        } else {
          console.log(`Failed to fetch PDF. Status: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
      
  useEffect(() => {
    async function fetchTickets() {
      const response = await fetch(`http://localhost:8085/api/v1/tickets/myTickets/${auth._id}`);
      const data = await response.json();
      console.log(data);
      setTicket(data);

    }

    fetchTickets();
  }, []);
  function formatDateAndTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${amOrPm}`;
    return formattedTime;
  }
  return (
    <div>
        <NavBar></NavBar>
 <div>
      
      <section class="container">
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <h1>Tickets</h1>
        <div className="row">
          {tickets.map((ticket) => {
            return (
    

        
              <article className="card fl-left">
                        Total tickets booked: {ticket.ticket.participants.length}

                <section className="date">
                  <time datetime="23th feb">
                    <span>{ticket.ticket.price}</span><span>DNT</span>
                  </time>
                  
                </section>
                
                <section className="card-cont">
                
                  <span>{ticket.ticket.type}</span>
                  <h3>{ticket.event.eventName}</h3>
                  <div class="even-date">
                    <i class="fa fa-calendar"></i>
                    <time>

                      <span>{new Date(ticket.event.startDate).toLocaleDateString()}</span>
                      <span>                        {formatDateAndTime(ticket.event.startDate)} to {formatDateAndTime(ticket.event.endDate)}
                      </span>
                    </time>
                  </div>
                  
                  <div className="even-info">
                    <i className="fa fa-map-marker"></i>
                    <p>
                    {" "}     {ticket.event.place}

                    </p>
                  </div>
                  
                  <button className="btn btn-primary" disabled={ticket.ticket.status === true}
                    onClick={() => printMyTicket(ticket.ticket.id)} // Pass a function reference
                    href="#">Print my ticket</button>



                </section>
                
                
          
              </article>
              
            )
          })}

        </div>
      </section>
      <Footer />
    </div>
    </div>
  )
}

export default MyTicket