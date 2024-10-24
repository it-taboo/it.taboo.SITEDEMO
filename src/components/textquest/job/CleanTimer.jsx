import React, { useState, useMemo, useEffect } from 'react'

const CleanTimer = (props) => {
  	return (
		<div className = 'clean-timer-bg' style = {{width: props.total}}>
			<p className = 'clean-timer-time' style = {{width: props.total}}>{props.num / 1000} сек.</p>
			<div style = {{width: props.width, transition: props.trans}}></div>
		</div>
	)
}

export default CleanTimer