import React, { useEffect, useState } from 'react'

const ProgressBar = ({ value }) => {
    const [percent, setPercent] = useState(value);
    useEffect(() => {
        setPercent(Math.min(Math.max(value, 0), 100));
    }, [value])
    return (
        <div className='progress'>
            <span style={{ color: percent > 49 ? "white" : "black" }}>{percent}%</span>
            <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}
                style={{ width: `${percent}%` }}
            ></div>
        </div>
    )
}

export default ProgressBar