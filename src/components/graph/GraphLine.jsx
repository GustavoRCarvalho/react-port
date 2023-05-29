import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { graphData, renderCustomAxisTick } from "../common/GraphCommon"
import { GraphResponsiveContainer } from "./GraphResponsiveContainer"

export const GraphLine = () => (
  <GraphResponsiveContainer>
    <LineChart
      width={700}
      height={400}
      data={graphData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" tick={renderCustomAxisTick} />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  </GraphResponsiveContainer>
)
