import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
import {useParams} from 'react-router-dom'
//  setFind(res.data),
const Personid = () => {
    const {id} = useParams("")
    const [find, setFind] = useState([])
    function xyz() {
        axios.get(`http://localhost:2130/student/${id}`,)
            .then((res) =>setFind(res.data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        xyz()
    },[])
    return (
        <>
         <Container className="mt-5" >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>{find.name}</th>
                            <th>{find.contact}</th>
                            <th>{find.city}</th>
                            <th>{find.date}</th>
                        </tr>
                    </thead>
                </Table>
            </Container>
        </>
    )
}

export default Personid