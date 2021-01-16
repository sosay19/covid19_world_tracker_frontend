// doesn't require redux

import React, { useEffect } from 'react';

import DrawMap from '../d3/DrawMap'
import MapInput from '../components/MapInput'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import DisplayHistogramMap from '../d3/DisplayHistogramMap'

const Home = () => {

  const mapData = useSelector(state => state.mapData);
  useEffect(() => {
    DrawMap();
  }, [])
  useEffect(() => {
    if (mapData.length > 0) {
      DisplayHistogramMap(mapData[0])
    }
    
  })
  return (
    <Row>
      <Col sm="12" md="3" lg="3" xl="3">
        <Card>
          <MapInput />
        </Card>
      </Col>
      <Col sm="12" md="9" lg="9" xl="9" >
        <Card className="mapviz">

        </Card>
        <Card className="vizHistogramMap">

        </Card>

      </Col>
    </Row>
  )
}

export default Home