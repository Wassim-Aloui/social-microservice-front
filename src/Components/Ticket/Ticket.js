import React, { useEffect, useState,useContext } from 'react'
import "./Ticket.css"
import NavBar from '../NavBar'
import Footer from '../Footer'
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import authContext from '../../context/authContext';
import 'react-toastify/dist/ReactToastify.css';

function Ticket() {
  const [tickets, setTicket] = useState([])
  const [event, setEvent] = useState({})
  const { auth, setAuth, logged, setLogged } = useContext(authContext);

  async function participate(ticketId) {
    try {

      const response = await fetch(`http://localhost:8085/api/v1/tickets/${ticketId}/participate/${auth._id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },

      });

      toast.success("Your ticket is booked successfully")
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchTickets() {
      const response = await fetch(`http://localhost:8085/api/v1/tickets/allWithEvents`);
      const data = await response.json();
      // console.log(data);
      setTicket(data);
    }

    fetchTickets();
  }, [tickets]);
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
             <ToastContainer />

      <NavBar></NavBar>
      <br/>
      <br />
        <br />
        <br/>
      <section class="container">
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <h1>Tickets</h1>
        <div className="row">
          {tickets?.map((ticket) => {
            return (

              <article className="card fl-left">
                <section className="date">
                  <time datetime="23th feb">
                    <span>{ticket.ticket.price}</span><span>DNT</span>
                  </time>
                  <br/>
                  <span>{ticket.ticket.nombre}</span>
                  <br/>
                  <span>Dispo</span>

                  
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
                    onClick={() => participate(ticket.ticket.id)} // Pass a function reference
                    href="#">Book</button>



                </section>
                
                
          
              </article>
            )
          })}

        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Ticket