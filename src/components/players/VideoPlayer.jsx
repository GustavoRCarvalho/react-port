import { TextField } from "@mui/material"
import { useState } from "react"
import ReactPlayer from "react-player"

export const VideoPlayer = () => {
  const [Url, setUrl] = useState()

  function handleUrl(event) {
    let text = event.target.value
    setUrl(text)
  }

  return (
    <div>
      <TextField
        label="URL"
        margin="normal"
        variant="outlined"
        value={Url}
        onChange={handleUrl}
      />
      <ReactPlayer url={Url} controls={true} />
    </div>
  )
}
