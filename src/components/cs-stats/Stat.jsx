import React from "react"
import "./stat.scss"

export default function Stat(props) {
  const getClassName = (rankValue) => {
    const rank = parseInt(rankValue.replace(".", ""), 10)

    if (rank <= 4999) {
      return "common"
    } else if (rank <= 9000) {
      return "uncommon"
    } else if (rank <= 14999) {
      return "rare"
    } else if (rank <= 19999) {
      return "mythical"
    } else if (rank <= 24999) {
      return "legendary"
    } else if (rank <= 29999) {
      return "ancient"
    } else {
      return "divine"
    }
  }

  const className = `cs2rating ${getClassName(props.rank)} sm`

  return (
    <>
      <div className={className}>
        <span className="ml-2">{props.rank}</span>
      </div>
    </>
  )
}
