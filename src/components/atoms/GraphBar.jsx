import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { graphData, renderCustomAxisTick } from "../common/GraphCommon"
import { GraphResponsiveContainer } from "./GraphResponsiveContainer"

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`Valor: ${value}`}</text>
  )
}

export const GraphBar = () => (
  <GraphResponsiveContainer>
    <BarChart
      width={700}
      height={400}
      data={graphData}
      margin={{ top: 30, right: 20, bottom: 5, left: 0 }}
    >
      <Bar
        dataKey="quantidade"
        barSize={30}
        fill="#8884d8"
        label={renderCustomBarLabel}
      />
      <XAxis dataKey="name" tick={renderCustomAxisTick} />
      <YAxis />
    </BarChart>
  </GraphResponsiveContainer>
)
