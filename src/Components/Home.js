import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
// onClick={() => Deletes(s._id)}
import swal from 'sweetalert'

const Home = () => {
    const [find, setFind] = useState([])
    function xyz() {
        axios.get('http://localhost:2130/student',)
            .then((res) => setFind(res.data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        xyz()
    }, [])
    
const Deletes = async (id) => {
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",});
            const dataDelete = axios.delete(`http://localhost:2130/student/${id}`,)
            console.log(dataDelete);
              xyz();
        } else {
          swal("Your imaginary file is safe!");
        }
      });
        // const dataDelete = await axios.delete(`http://localhost:2130/student/${id}`,)
        // const save = await (dataDelete.data)
        // console.log(save)
        // if (!save) {
        //     alert("some error")
            
        // }
        // else {
        //     swal({
        //         title: "Successfully Delete !",
        //         text: "Your Data Delete Cheack Profile!",
        //         icon: "success",
        //         button: "Done",
        //       })
        //     xyz()
        // }
}
    return (
        <>
            <Container className="mt-5" >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Date of Brith</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            find.map((s) => {
                                return (
                                    <tr>
                                        <td>{s.name}</td>
                                        <td>{s.contact}</td>
                                        <td>{s.city}</td>
                                        <td>{s.date}</td>
                                        <div>

                                            <Link to={`view/${s._id}`}><Button className="mx-2" variant="primary">Views</Button></Link>
                                            <Link to={`edit/${s._id}`} ><Button className="mx-3" variant="primary">Update</Button></Link>
                                            <Link><Button onClick={() => Deletes(s._id)} variant="primary">Delete</Button></Link>
                                            {/* onClick={() => Deletes(s._id)} */}
                                        

                                        </div>

                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link to={'/register'} >
                    <Button variant="primary">Add Data</Button>
                </Link>

            </Container>
        </>

    )
}

export default Home