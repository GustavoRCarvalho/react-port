import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import { useState } from "react"
import { Graph } from "./Graph"
import { Forms } from "./Forms"
import { Players } from "./Players"

export function Menu() {
  const [value, setValue] = useState("Players")
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Home" value="Home" />
          <Tab label="Formulários" value="Formulários" />
          <Tab label="Gráfico" value="Gráfico" />
          <Tab label="Players" value="Players" />
        </TabList>
      </Box>
      <TabPanel value="Home">Home</TabPanel>
      <TabPanel value="Formulários">
        <Forms />
      </TabPanel>
      <TabPanel value="Gráfico">
        <Graph />
      </TabPanel>
      <TabPanel value="Players">
        <Players />
      </TabPanel>
    </TabContext>
  )
}
