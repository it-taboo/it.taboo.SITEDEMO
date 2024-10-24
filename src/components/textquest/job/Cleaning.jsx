import React, { useState, useEffect, useMemo } from 'react'
import CleanItem from './CleanItem'
import CleanTimer from './CleanTimer'

const Cleaning = (props) => {
	const actions = [
			'Убрать стол',
			'Протереть пыль',
			'Вымыть полы',
			'Протереть статую Султана',
			'Почистить диван',
			'Протереть стул',
			'Вымыть окна',
			'Навести порядок',
			'Срочно убрать грязь',
	]
    const locations = [
			'в гостиной',
			'в зале',
			'в аудитории',
			'в кабинете',
			'на балконе',
			'на лестнице',
			'в гареме',
			'в прачечной',
			'на кухне',
	]

    const [quests, setQuests] = useState([[actions[Math.floor(Math.random() * actions.length)] + ' ' + locations[Math.floor(Math.random() * locations.length)] + '.'], [actions[Math.floor(Math.random() * actions.length)] + ' ' + locations[Math.floor(Math.random() * locations.length)] + '.'], [actions[Math.floor(Math.random() * actions.length)] + ' ' + locations[Math.floor(Math.random() * locations.length)] + '.'], [actions[Math.floor(Math.random() * actions.length)] + ' ' + locations[Math.floor(Math.random() * locations.length)] + '.']])
	const [active, setActive] = useState([])
	const [done, setDone] = useState([])

	const [wait, setWait] = useState([])
	const [chances, setChances] = useState(['0', '0', '0', '1'])
	const [limit, setLimit] = useState(false)

	const [curTime, setCurTime] = useState(0)
	const [width, setWidth] = useState('400px')
	const [trans, setTrans] = useState(`all ${curTime}s`)

	const [curTime2, setCurTime2] = useState(240000)
	const [width2, setWidth2] = useState('600px')
	const [trans2, setTrans2] = useState(`all 240s`)

	let init = true

	useEffect(() => {
		if(init === true) {
			setWidth2('50px')
			init = false
		}
	}, [init])

	setTimeout(() => {
		console.log('Время вышло!')
	}, 240000)

	function addActive(act) {
		if(limit !== true) {
			setWidth('400px')
			setTrans(`all 0s`)
			setLimit(true)
			if(chances[Math.floor(Math.random() * chances.length)] === '0') {
				let index = quests.indexOf(act)
				let quest2 = quests
				quest2.splice(index, 1)
				setActive([...active, act[0]])

				let split = act[0].split('')
				setChances([...chances, '1', '1', '1'])

				setCurTime(split.length * 400)
				setTrans(`all ${split.length * 400 / 1000}s`)
				setWidth('50px')

				setTimeout(() => {
					let active2 = active
					let index2 = active.indexOf(act)
					active2.splice(index2, 1)
					setActive(active2)

					setDone([...done, act])
					setLimit(false)
					setTrans(`all 0s`)
					setWidth('400px')
					setCurTime(0)
				}, split.length * 400)
			} else {
				props.addState(true)
				setWidth('400px')
				setTrans(`all 0s`)
				setChances(['0', '0', '0', '1'])
				setWait([...wait, act[0]])

				let index = quests.indexOf(act)
				let quest2 = quests
				quest2.splice(index, 1)

				let split = act[0].split('')

				setCurTime(split.length * 600)
				setTrans(`all ${split.length * 600 / 1000}s`)
				setWidth('50px')

				setTimeout(() => {
					setActive([...active, act[0]])

					let wait2 = wait
					let index2 = wait.indexOf(act)
					wait2.splice(index2, 1)
					setWait(wait2)
				}, split.length * 200)

				setTimeout(() => {
					let active2 = active
					let index2 = active.indexOf(act)
					active2.splice(index2, 1)
					setActive(active2)

					setDone([...done, act])
					setLimit(false)
					setTrans(`all 0s`)
					setWidth('400px')
					setCurTime(0)
				}, split.length * 600)
			}
		} else {
			console.log('ЗАНЯТО!!!!!!')
		}
	}

    return (
		<div style = {{display: props.display}}>
			<div className = 'clean-time-wrap'>
				<div className = 'clean-time'>
					<p className = 'clean-timer-small' style = {{width: '400px'}}>Время уборки:</p>
					<CleanTimer width = {width} trans = {trans} num = {curTime} total = {'400px'}/>
				</div>
				<div className = 'clean-time'>
					<p className = 'clean-timer-small' style = {{width: '600px'}}>Времени осталось:</p>
					<CleanTimer width = {width2} trans = {trans2} num = {curTime2} total = {'600px'}/>
				</div>
			</div>
			<div className = 'clean-main'>
				<div className = 'clean-todo' onClick = {() => {}}>
					<h2 className = 'clean-h2'>Надо убрать</h2>
					{quests.map(i => <CleanItem com = {i} addActive = {addActive}/>)}
				</div>
				<div className = 'clean-doing'>
					<h2 className = 'clean-h2'>Убирается</h2>
					{active.map(i => <CleanItem com = {i} addActive = {addActive}/>)}
				</div>
				<div className = 'clean-done'>
					<h2 className = 'clean-h2'>Убрано</h2>
					{done.map(i => <CleanItem com = {i} addActive = {addActive}/>)}
				</div>
				<div className = 'clean-wait'>
					<h2 className = 'clean-h22'>Ожидание</h2>
					{wait.map(i => <CleanItem com = {i} addActive = {addActive}/>)}
				</div>
			</div>
		</div>
	)
}

export default Cleaning