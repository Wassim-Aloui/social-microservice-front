
import React, { useEffect, useState } from "react";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {
    Button,
    Col,
    Form,
    InputGroup,
    Modal,
    Row,
    Card,
    Container,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { json, useParams } from "react-router-dom";
const UpdateTicketModal = ({ showEdit, setShowEdit, ticket,id }) => {
    const handleClose = () => setShowEdit(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [msg, setMsg] = useState("");

    const [tick, setTick] = useState();
  const formTemplate = {
    price: ticket.price,
    nombre: ticket.nombre,
    type: ticket.type,
  };
    const onSubmit = async (data) => {
        console.log(data)
        data.eventId=ticket.eventId
        try {
            const response = await fetch(`http://localhost:8085/api/v1/tickets/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // You can adjust this header if needed
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("Updated successfully!");
                toast.success("Ticket updated successfully!");

                // You can handle further actions here, like refreshing the page
            } else {
                // Handle errors here, for example:
                console.log(`Failed to update ticket. Status: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Modal show={showEdit} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title>Update the ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="bg">
                        <Container>
                            
                                    <Card className="register-card">
                                        <Card.Body>
                                            <Form
                                                className="register-form"
                                                onSubmit={handleSubmit(onSubmit)}
                                            >
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} controlId="formGridTitle">
                                                        <InputGroup>
                                                            <Form.Control
                                                            style={{ width:"400px", height: "40px" }}
                                                                placeholder="price"
                                                                type="number"
                                                                {...register("price", {
                                                                    required: true,
                                                                })}
                                                                isInvalid={!!errors.price}
                                                                defaultValue={ticket.price}
                                                            />
                                                        </InputGroup>
                                                        {errors.price && (
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
                                                                placeholder="nombre ticket"
                                                                type="number"
                                                                {...register("nombre", {
                                                                    required: true,
                                                                })}
                                                                isInvalid={!!errors.nombre}
                                                                defaultValue={ticket.nombre}
                                                            />
                                                        </InputGroup>
                                                        {errors.price && (
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
                                                                placeholder="type"
                                                                type="text"
                                                                {...register("type", {
                                                                    required: true,
                                                                })}
                                                                isInvalid={!!errors.type}
                                                                defaultValue={ticket.type}
                                                            />
                                                        </InputGroup>
                                                        {errors.price && (
                                                            <small className="text-danger">
                                                                Please enter the title
                                                            </small>
                                                        )}
                                                    </Form.Group>
                                                </Row>
<br/>


                                                <Button
                                                    variant="warning"
                                                    type="submit"
                                                    className="w-100 my-btn"
                                                    onClick={handleClose}
                                                >
                                                    Update
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                              
                        </Container>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default UpdateTicketModal;
