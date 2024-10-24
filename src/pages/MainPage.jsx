import '../styles/mainpage.css';
import { useState, useEffect } from 'react/cjs/react.development'
import { useRef } from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import Tilt from 'react-vanilla-tilt'

import logo from './../../src/images/logo.png'
import dog1 from './../../src/images/dog3.png'

import postData from './database/posts.json'
import shelterData from './database/shelters.json'

const fs = require('fs')

const MainPage = (props) => {
    const [width, setWidth] = useState(window.innerWidth); // Изначально берем текущую ширину экрана

  useEffect(() => {
    // Функция для обновления ширины
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Подписываемся на событие изменения размера окна
    window.addEventListener("resize", handleResize);

    // Чистим подписку на событие при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <div className = 'main12345'>
            <div className = 'welcome-box'>
                <div className='sub-welcome'>
                    <div className='sub1'>
                        <h1 className = 'main-title'>Привет! Мы - </h1>
                        <img className='logo' src={logo}></img>
                    </div>
                    <p className='welcome-sub-text'>Добро пожаловать! Здесь, вы можете найти нового друга или помочь животным, нуждающихся в заботе. Вместе, мы сделаем мир добрее!</p>
                    <div className='circle circl3'>
                        <img className='dog1' src={dog1}></img>
                    </div>
                </div>
            </div>

            {/*<div>
                <h1>Current Screen Width: {width}px</h1>
            </div>*/}

            <div className='whyus'>
                <div className='whyus-title'>
                    <h1>Почему именно мы?</h1>
                </div>
                <div className='whyus-content'>
                    <div className='whyus1'>
                        <div className='us-block1 ublock'>
                           <i className="fas fa-solid fa-dog"></i>
                           <p className='ublock-text ub1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        
                        <div className='us-block1 ublock'>
                           <i className="fas fa-solid fa-dog"></i>
                           <p className='ublock-text ub1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        
                        <div className='us-block1 ublock'>
                           <i className="fas fa-solid fa-dog"></i>
                           <p className='ublock-text ub1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        
                        <div className='us-block1 ublock'>
                           <i className="fas fa-solid fa-dog"></i>
                           <p className='ublock-text ub1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        
                        <div className='us-block1 ublock'>
                           <i className="fas fa-solid fa-dog"></i>
                           <p className='ublock-text ub1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                        
                        <div className='us-block1 ublock'>
                           <i className="fas fa-solid fa-dog"></i>
                           <p className='ublock-text ub1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stats'>
                <h1>Наша статистика</h1>
                <div className='stat-list'>
                    <div className='stat-line'>
                        <div className='stat'>
                            <i className="fas fas2 fa-solid fa-store-alt"></i>
                            <p className='stat-header'>Сотрудничаем с питомниками</p>
                            <p className='stat-quantity' data-content={'0'}>0</p>
                        </div>
                        <div className='stat'>
                            <i className="fas fas2 fa-solid fa-dog"></i>
                            <p className='stat-header'>Спасено животных</p>
                            <p className='stat-quantity' data-content={'0'}>0</p>
                        </div>
                        <div className='stat'>
                            <i className="fas fas2 fa-solid fa-home"></i>
                            <p className='stat-header'>Животные нашедшие дом</p>
                            <p className='stat-quantity' data-content={'0'}>0</p>
                        </div>
                        <div className='stat'>
                            <i className="fas fas2 fa-solid fa-user"></i>
                            <p className='stat-header'>Наша команда</p>
                            <p className='stat-quantity' data-content={'50'}>5</p>
                        </div>
                    </div>
                    <div className='stat-line'>
                        <div className='stat'>
                            <i className="fas fas2 fa-solid fa-users"></i>
                            <p className='stat-header'>Наши волонтеры</p>
                            <p className='stat-quantity' data-content={'0'}>0</p>
                        </div>
                        <div className='stat'>
                            <i className="fas fas2 fa-solid fa-hand-holding-usd"></i>
                            <p className='stat-header'>Получено пожертвований</p>
                            <p className='stat-quantity' data-content={'0'}>0</p>
                        </div>
                        <div className='stat'>
                            <i className="fas fas2 fa-solid fa-signal"></i>
                            <p className='stat-header'>Посты и пользователи</p>
                            <p className='stat-quantity' data-content={'0'}>0</p>
                        </div>
                    </div>
                    <div className='running-bg-ph bgph1'>
                        <div className='running-bg'>
                            <div className='stat-line-bg statbg1' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                            <div className='stat-line-bg statbg2' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                        </div>
                    </div>

                    <div className='running-bg-ph bgph2'>
                        <div className='running-bg'>
                            <div className='stat-line-bg statbg1' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                            <div className='stat-line-bg statbg2' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                        </div>
                    </div>

                    <div className='running-bg-ph bgph3'>
                        <div className='running-bg'>
                            <div className='stat-line-bg statbg1' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                            <div className='stat-line-bg statbg2' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                        </div>
                    </div>

                    <div className='running-bg-ph bgph4'>
                        <div className='running-bg'>
                            <div className='stat-line-bg statbg1' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                            <div className='stat-line-bg statbg2' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                        </div>
                    </div>

                    <div className='running-bg-ph bgph5'>
                        <div className='running-bg'>
                            <div className='stat-line-bg statbg1' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                            <div className='stat-line-bg statbg2' style={{'--t': '150s'}}>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                                <span className='ittaboo-logo2'>it.taboo</span>                            
                                <span className='ittaboo-logo2'>it.taboo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='serverpart'>
                {/* <pre>{JSON.stringify(jsonData.posts[0], null, 2)}</pre> */}
                <div className='serverdiv'>
                    <div className='shelters'>
                        <h1 className='shelter-title'>Приюти их уже сейчас!</h1>
                        <div className='lost-animals'>
                            <div className='lostxx'>
                                <p className='lostxx1'>{JSON.stringify(postData.posts[0].name, null, 2).replace(/["']/g, '')}</p>
                                <p className='lostxx2 xx1'>{JSON.stringify(postData.posts[0].desc, null, 2).replace(/["']/g, '')}</p>
                            </div>

                            <div className='lostxx'>
                                <p className='lostxx1'>{JSON.stringify(postData.posts[1].name, null, 2).replace(/["']/g, '')}</p>
                                <p className='lostxx2 xx2'>{JSON.stringify(postData.posts[1].desc, null, 2).replace(/["']/g, '')}</p>
                            </div>

                            <div className='lostxx'>
                                <p className='lostxx1'>{JSON.stringify(postData.posts[2].name, null, 2).replace(/["']/g, '')}</p>
                                <p className='lostxx2 xx1'>{JSON.stringify(postData.posts[2].desc, null, 2).replace(/["']/g, '')}</p>
                            </div>
                        </div>
                        <Link className='post-redirect' to='/calculator'>Есть ещё животные, нуждающиеся в вашей помощи!</Link>
                        <div className='shelters-available'>
                            <h1 className='shelter-title2'>Приюты, которым вы можете помочь</h1>
                            <div className='shellist'>
                                <div className='shelter'>
                                    <p className='lostxx1'>{JSON.stringify(shelterData.shelters[0].name, null, 2).replace(/["']/g, '')}</p>
                                    <p className='lostxx2 xx1'>{JSON.stringify(shelterData.shelters[0].desc, null, 2).replace(/["']/g, '')}</p>
                                </div>

                                <div className='shelter'>
                                    <p className='lostxx1'>{JSON.stringify(shelterData.shelters[1].name, null, 2).replace(/["']/g, '')}</p>
                                    <p className='lostxx2 xx2'>{JSON.stringify(shelterData.shelters[1].desc, null, 2).replace(/["']/g, '')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='agitation'>
                        <h1 className='agitation-title'>Как вы можете им помочь?</h1>
                        <p className='agitation-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;