import { useEffect, useState } from "react"
import axios from "axios"
import swal from 'sweetalert'
import { Alert, Col, Container, Form, Row } from "react-bootstrap"
import { Link,useParams,useNavigate } from 'react-router-dom'
// setData(res.data)
// this is logic for insert id and double fill data
const Edit = () => {
    const Nav = useNavigate("")
    const {id} = useParams("")
    const [data, setData] = useState([])
    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    function handleSubmit() {
        axios.get(`http://localhost:2130/student/${id}`,)
            .then((res) => setData(res.data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        handleSubmit()
    },[])
    const updatedata = async (e)=>{
        e.preventDefault()
        const response = await axios.patch(`http://localhost:2130/student/${id}`,data)
        const save =(response.data)
        if(!save){
            alert("Fill the data")
        }
        else{
            // swal("Profile Updated!", "You data successfully updated!", "success")
            // history('/')
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
        <Form onSubmit={updatedata} >
            <Row>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={data.name} name="name" onChange={handleChange} required  />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" placeholder="Enter Contact:" name="contact" value={data.contact} onChange={handleChange} required  />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City" value={data.city} name="city" onChange={handleChange} required  />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Date Of Brith</Form.Label>
                        <Form.Control type="date" name="date" value={data.date} onChange={handleChange}  required />
                    </Form.Group>
                </Col>

            </Row>
             <input type={'submit'} value='Update' className="btn btn-success"></input>
           </Form>
        {/* {isRegistrationSuccessful ? <Alert variant="success" className="mt-4">
            Registrtaion Success !
        </Alert> : null} */}

    </Container>
</>
   
  )
}

export default Edit