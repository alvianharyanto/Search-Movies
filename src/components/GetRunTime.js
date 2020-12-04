import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

function GetRunTime({runtime}) {

    const time = runtime/60
    const timeString = String(time)
    // change runtime format
    function hour () {
        if (runtime !== undefined ) {
            return timeString.substring(0, 1)
        }
    }
    function  minute () {
        if (runtime !== undefined ) {
            return timeString.substring(2, 4)
        }
    }

    return (
        <>
            <FontAwesomeIcon className="icon" icon={ faClock } />
            {minute() !== "" ? hour() + "h " + minute() + "m" : hour() + "h " }
        </>
    )
}

export default GetRunTime
