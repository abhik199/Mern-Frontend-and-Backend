import axios from "axios"
import { useState } from "react"
import { Alert, Col, Container, Form, Row } from "react-bootstrap"
import { Link,useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const Register = () => {
    const Nav = useNavigate("")
    const [data, setData] = useState({})

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('http://localhost:2130/student', data)
        const save =(res.data)
        if(!save){
            alert("Data is Not Store")
        }
        else{
            swal({
                title: "Registeration Successfully!",
                text: "Your Registeration Done Cheack Profile!",
                icon: "success",
                button: true,
              })
              .then((hii)=>{
                if(hii){
                    Nav('/')
                }
                else{
                    console.log("wrong")
                }
              })

        }
    }


    return (
        <>
            <Container className="mt-4">
                <Alert variant="success">Register student</Alert>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit} >
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" placeholder="Enter Contact:" name="contact" onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter City" name="city" onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Date Of Brith</Form.Label>
                                <Form.Control type="date" name="date" onChange={handleChange} required />
                            </Form.Group>
                        </Col>

                    </Row>
                    <input type={'submit'} value='Register' className="btn btn-success"></input>
                   
                    </Form>
                {/* {isRegistrationSuccessful ? <Alert variant="success" className="mt-4">
                    Registrtaion Success !
                </Alert> : null} */}

            </Container>
        </>
    )
}

export default Register