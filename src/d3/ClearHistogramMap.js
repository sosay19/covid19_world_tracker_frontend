import { select } from 'd3'

const ClearHistogramMap = () => {
    const svg = select(".vizHistogramMap")
    svg.selectAll('*').remove();
}

export default ClearHistogramMap