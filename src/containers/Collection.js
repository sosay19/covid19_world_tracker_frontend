import React from 'react';
import { Redirect } from "react-router"
import Country from '../components/Country'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


const Collection = (props) => {
    console.log(props.location.countryData)

    const caseType = () => {

    }

    if (props.location.countryData) {
        return (
            <div>
                <Row className="justify-content-md-center">
                    {/* <button onClick={event => DrawBar(event.target.value, event.target.innerText, countryResults)} className="cases block" value="cases">Total Cases</button> */}
                    <button className="cases tile" value="Confirmed">Total Cases</button>
                    <button className="activee tile" value="Active"> Active Cases</button>
                    <button className="recovered tile" value="Recovered">Recovered Cases</button>
                    <button className="deaths tile" value="Deaths">Deaths</button>


                </Row>

                <Row className="justify-content-md-center">

                    {props.location.countryData.map((country, index) => { 
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card>
                                    <Country key={index} id={index} country={country} caseType={caseType()}/> 
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    } else {
        return <Redirect to='/' />
    }
}

export default Collection
