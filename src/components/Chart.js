import ChartBar from "./ChartBar";
import './Chart.css';
function Chart(props)
{
    let valuesArray=props.dataPoints.map((dataPoint)=>dataPoint.value);
    let totalMax=Math.max(...valuesArray);
    return(
        <div className="chart">
        {props.dataPoints.map((dataPoint)=> (
            <ChartBar  key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
        ))}
        </div>
    );
}

export default Chart;