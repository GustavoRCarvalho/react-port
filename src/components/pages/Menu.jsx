import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import { useState } from "react"

export function Menu() {
  const [value, setValue] = useState("1")
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Gráfico" value="Gráfico" />
        </TabList>
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="Gráfico">Gráfico</TabPanel>
    </TabContext>
  )
}
