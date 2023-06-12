import { VideoPlayer } from "../players/VideoPlayer"
import "./Players.css"

export const Players = () => {
  return (
    <div className="container">
      Video Player
      <VideoPlayer />
    </div>
  )
}
