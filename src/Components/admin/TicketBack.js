import React from 'react'
import NavBar from '../NavBar'
import { useEffect, useState } from 'react'
import { Button, Col, Container, InputGroup, Row, Card } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form'
import UpdateTicketModal from '../../Modals/UpdateTicketModal';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';



function TicketBack() {
  const [showEdit, setShowEdit] = useState(false);
  const [ticket, setTicket] = useState([])
  const [id, setId] = useState()
  const [tickets, setTickets] = useState([])
  const [events,setEvent]=useState([])
const [eventId,setEventId]=useState()
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShowEdit = async (id) => {
    setShowEdit(true);

    await fetch(`http://localhost:8085/api/v1/tickets/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to fetch event. Status: ${response.status}`);
        }
      })
      .then((data) => {
        setTicket(data)
        setId(id);
        console.log(data)

        console.log(id);
        console.log(ticket)
      })
      .catch((error) => {
        console.log(error);
      });


  };

  const onSubmit = async (data) => {
    try {
      data.eventId = eventId;
            const response = await fetch("http://localhost:8085/api/v1/tickets", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

     
        toast.success("Ticket added successfully!");

     

    } catch (error) {
      console.error(error);
    }
  };



  const deleteTicket = async (id) => {
    try {
      const response = await fetch(`http://localhost:8085/api/v1/tickets/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // You can adjust this header if needed
        },
      });

      if (response.ok) {
        console.log("Deleted successfully!");
        toast.success("Ticket deleted successfully!");

        // You can handle further actions here, like refreshing the page
        
      } else {
        // Handle errors here, for example:
        console.log(`Failed to delete ticket. Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchTickets() {
      const response = await fetch(`http://localhost:8085/api/v1/tickets`);
      const data = await response.json();
      //console.log(data);
      setTickets(data);
    }

    fetchTickets();
  }, [tickets]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch(`http://localhost:8085/api/v1/tickets/events`);
      const data = await response.json();
      setEvent(data);
      console.log(data)
    }
    fetchEvents()
  },[])

  return (
    <div>
             <ToastContainer />

      <NavBar/>
      <br></br>
      <br></br>
      <br></br>

      <div className="cart-section mt-150 mb-150">
        <div className="container">
        <div className="row">
  <div className="col-lg-8 offset-lg-2 text-center">
    <div className="section-title">
      <h3>
        <span className="orange-text">Our</span> Tickets{' '}
        <Button  variant="warning"
                        onClick={handleShow}
                          className=" my-btn">+</Button>
      </h3>
    </div>
  </div>
</div>

          <div className="">
           
            <div className="cart-table-wrap">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="table-head-row">
                    <th className="product-remove" />
                    <th className="product-name">Type</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Nombre</th>
                    <th className="product-total">Status</th>
                    <th className="product-total">Actions</th>

                  </tr>
                </thead>
                <tbody>
                  {tickets?.map((ticket) => {
                    return (
                      <tr className="table-body-row">
                        <td className="product-remove">
                          <a href="#">
                            <i className="far fa-window-close" onClick={() => deleteTicket(ticket.id)} />
                          </a>
                        </td>

                        <td className="product-name">{ticket.type}</td>
                        <td className="product-price">{ticket.price}DNT</td>
                        <td className="product-quantity">
                          {ticket.nombre}
                        </td>
                        <td className="product-total">
                          {ticket.status === false && (
                            <p>Available</p>
                          )}
                          {
                            ticket.status === true && (
                              <p>Sold out</p>
                            )
                          }
                        </td>
                        <td>
                          <Button
                           variant="warning"
                        
                           className=" my-btn"
                            onClick={() => handleShowEdit(ticket.id)}
                          >Update</Button>
                        </td>
                      </tr>

                    )
                  })}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title>Add a new ticket </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg">
            <Container className="bg">
                
                  <Card className="register-card" >
                    <Card.Body>
                      <Form
                        className="register-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridTitle">
                            <InputGroup>
                              <Form.Control hidden
                              style={{ width:"400px", height: "40px" }}
                                placeholder="price"
                                type="number"
                                {...register("price", {
                                  required: true,

                                })}
                                isInvalid={!!errors.price}
                              />
                            </InputGroup>
                            {errors.title && (
                              <small className="text-danger">
                                Please enter the title
                              </small>
                            )}
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">

                          <Form.Group as={Col} controlId="formGridTitle">
                            <InputGroup>
                              <Form.Control
                              style={{ width:"400px", height: "40px" }}
                                placeholder="Nombre tickets"
                                type="number"
                                {...register("nombre", {
                                  required: true,

                                })}
                                isInvalid={!!errors.price}
                              />
                            </InputGroup>
                            {errors.title && (
                              <small className="text-danger">
                                Please enter the title
                              </small>
                            )}
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">

                          <Form.Group as={Col} controlId="formGridTitle" >
                            <InputGroup>
                              <Form.Control style={{ width:"400px", height: "40px" }}
                                placeholder="Type"
                                type="text"
                                {...register("type", {
                                  required: true,

                                })}
                                isInvalid={!!errors.type}
                              />
                            </InputGroup>
                            {errors.title && (
                              <small className="text-danger">
                                Please enter the title
                              </small>
                            )}
                          </Form.Group>

                        </Row>
                        <Row className="mb-3">

<Form.Group as={Col} controlId="formGridTitle" >
  <InputGroup>
  
<select
style={{ width:"400px", height: "40px" }}                            value={eventId}
                            onChange={(e) => {
                              setEventId(e.target.value);
                            }}
                          >
                            {events.map((event) => {
                              return (
                                <option value={event.id}>{event.eventName}</option>
                              );
                            })}
                          </select>
                          
                          </InputGroup>
                          </Form.Group>
                        </Row>

<br/>






                        <Button
                          variant="warning"
                          type="submit"
                          className="w-100 my-btn"
                          onClick={handleClose}
                        >
                          Register
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                
            </Container>
          </div>
        </Modal.Body>
      </Modal>
      <UpdateTicketModal
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        id={id}
        ticket={ticket}
      />

    </div>
  )
}

export default TicketBack