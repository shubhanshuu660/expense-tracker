import React from "react";
import Bar from "../Bar";

interface IChart {
	dataPoints: any;
}

const Chart: React.FC<IChart> = ({ dataPoints }) => {
	const dataPointValues = dataPoints.map((dataPoint: any) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<>
			{dataPoints.map((dataPoint: any, i: number) => (
				<Bar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</>
	);
};

export default Chart;
