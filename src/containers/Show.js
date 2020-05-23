import React from 'react';
import { Redirect } from "react-router"

import VizShow from '../d3/Viz'
import Viz from '../d3/Viz'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


const Show = (props) => {
    console.log(props)

    if (props.location.countryName) {
        return (
            <div> 
                <Row className="justify-content-md-center">
                    <Col xs="12" sm="12" md="10" lg="10" xl="9">
                    {/* <Col> */}
                    {/* <Col lg={9}> */}
                        <Card classname="show">
                            <Viz countryName={props.location.countryName} totalCases={props.location.totalCases} dailyData={props.location.dailyData} id={props.location.slug} slug={props.location.slug}/>
                        </Card>
                    </Col>

                    <Col xs="12" sm="12" md="2" lg="2" xl="3">
                    {/* <Card>Placeholder for Sidebar</Card> */}
                    </Col>
                </Row>
            </div>
        )

    } else {
        return <Redirect to='/' />
    }
}

export default Show