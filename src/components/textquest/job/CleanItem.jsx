import React, { useState, useEffect } from 'react'

const CleanItem = (props) => {
	return (
		<div className = 'item-to-clean' onClick = {() => {props.addActive(props.com)}}>
			<p>{props.com}</p>
			<div>
				<div></div>
			</div>
		</div>
	)
}

export default CleanItem