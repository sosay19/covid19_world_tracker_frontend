import React, { useEffect } from 'react';
import DisplayHistogramMap from './DisplayHistogramMap'

const VizHistogramMap = ( mapData) => {
    useEffect( () => {

      DisplayHistogramMap(mapData)
    })

    return (
        <div className={"vizHistogramMap"} ></div>
    )
}

export default VizHistogramMap