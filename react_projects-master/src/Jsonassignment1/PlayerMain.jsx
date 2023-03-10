import React from 'react'
import JSON from "./Player.json"
import Playerchild from "./Playerchild"
import Player from "./Player.css"

const PlayerMain = () => {
  return (
    <>
    <div>IPL PLAYERS</div>
    <playerchild data={JSON}/>

    </>
  )
}

export default PlayerMain