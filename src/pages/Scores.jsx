import React from 'react'
import ScoreCard from '../components/ScoreCard'

function Scores() {
    return (
        <div className='container mx-auto flex px-5 pt-24  flex-col  '>
            <h2 className='font-medium  text-xl	mb-5'>Latest Scores</h2>
            <ScoreCard />
        </div>
    )
}

export default Scores