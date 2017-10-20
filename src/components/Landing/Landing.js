import React, { Component } from 'react';
import Footer from './../Footer/Footer';
import './Landing.css';

export default class Landing extends Component {
    render() {
        return (

            <div>
                <div className="landing-container">

                    <section className="landing-header-container">
                        <div className="logo">
                            <img className="icon icons8-Maintenance" width="40" height="40" alt="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFhklEQVRoQ72aj3UNQRSHrwpQAalAUgEqQAWkAlIBKkAFpAJSASpABZIKUAHne2d+z801s3NndmPPeecl2d3Z+93/czfX7O/xxMzemtlrM3tpZj/duf/x4wMze2hmh+WjZ54Xed4tCXGtnBSErgXihZm9uWKCG2b21Mx4/u2FZ52Wa5qXAOIhTopW7pY70MaxmX26AiAAUBYwHBdm9qF8+Bvewfc3M7vX8xBAfpeFgMCtOLgRU94qvwMCEGBrD4R7X57BWp8LkJSFa30cgWARQBAe7bDQ/SDls/KQ6+XvwCz6aocSCIRE2F/FG7CCjikIgbA4mkZYQKIbcR7hCUa0h7Vmjy8FouYuxAjn0+7khVCwo/lXBeigIqXOE/z8PHNojZbPYymUlIqJKIBA+DtWISZ8rOh6gvJ5yWKzIN9LZqpZnecQq7gblhlO/R4EbaAVFsEqfjHyOwHKMRMnCAcImamVZpV0jszsa9LkxBQKPvMg3Et8kHqJCRaTvxKQPk2PwkhJSzGmpIMCsVoPxieGrxFEmosKkeCzMBkQnokCHxdvWILxEDtZIwh/Q1g+0gip2bvULIxc52YnBnowHoKY2pWGGki0Rk3wGRjckxSeccsWTKwzJCFi9yIDIivRMqyxjODJjrUUHxUYYTgfKz5JCLk+Z0G2gvlREkjGKj5mPKSvM4I9GQFZC4PmsApHq5bUsi7uQ+0iFijI/K7SIMUcjYLMwniIrDV6pUSuioUOZ0BGYQhQeigfXz0hM+fVKewUMwsyAkNtotjhz77TzQjbukYt075TWAMyAiOB6Bqo7msOb+F9rK0FycJwHd01LQ+BSmMa9zUqvGxrW02jryOXOvEtQDIwsgDW0Db6kXM1nwyoM0Ceue4CBdC6aGv8T8+2FUgLRnneB7qyjYTRPoVryEB3On6HxbjnktW2BIkwQKhu+JSLdsn/u7RZriEZIBz3kBzQPN+yHmtjIa6rDkK2AuGhGkzE0VKsGzqfbddTiWELEAmGxuh9eg0lFkGruBAwXI+bDe8KPeFaEC8000lcItNPeRjJg0XJZlO1Zg2Ih9AkMLuBQnhg8Hncko9maFMtzCxIDUKaxUVo8BBIexDcruc6PnsNw2RAlDnIMOwa+dZEsjaTjcEOIPdRhXswvfhqBn4LBFMznSB4NZuNiywNlrkPDXMva2GhGgzXEfgecAqmBkIr4WdX5HseJGsgHC5DYGcOLIiwwCizcZ9GTDXAYRgPEofL9DK40OzgmpaC7hQICe1bC5+5VsN4EPU7TCbIPr250pI1tJYE15gp7tc3g4kvemoQuAbTD+D49DJKazfYGsluAiMQ7bZiR9oK9hbM0pZ2aey6GgYQPUBNnA9EftabJHwdFyEZ+G5WLqZdW+2crlkK4lUwgOxHKq4+aA6rtsPHQ0sYYor+qTbNz9yvaq8+bCgBAKLBtR/RyNVak3FfheWeUoh3z1ZC2NwyCCGhmf4RkMowBH6rGNbSqVyrZsUa0KYwgMglpP24g6sJUXO9UZC4EYsJZCRmDrxrySUyL3X0LtC7Y81FM5V/jWX0zFNAaq/VWotTU2gi1TT6gqp9iFw0AzGazaLbattwjiCaE8VXbh4Gcq7zMeP7pkvjyxECd23PMnpV7pfX/n//fsS/csNXa5qKNUU7ORYjYfA9MpweTQC16/fDOrkGmYqg14bID89U3YGNDaT/B4C17+AzbhZhVAYuvQz1ps38hxDwvC1CK1R/vnsbp6zXZdp47wnHcT/iF0AoDZ41r0V4qremJQhGa8Pvs+1+pmjixgS63jTTxKJsYHaeUNtYaSvrh2Oth7E4C25lifgcFMv6+l+YeB4IlPhzac+uKaBSroIdzevfkba2Qk1hmjySajVpIWMiwz6W/wCRnwZryAle+QAAAABJRU5ErkJggg==" />
                            <h4>Maintenance<span>Minder</span></h4>
                        </div>
                        <button className="start-free-button" href={process.env.REACT_APP_LOGIN}>START FREE NOW</button>
                    </section>


                    <section className="hero-container">
                        <div className="banner">
                            <div className="banner-logo">
                                <span className="title1">Maintenance<span className="minder-title">Minder</span></span>
                                <span className="title2"><span>YOU LIVE YOUR LIFE.</span>  &nbsp; <u>WE WILL MIND THE MAINTENANCE.</u></span>
                            </div>
                            <button className="register-button" href={process.env.REACT_APP_LOGIN} >LOGIN</button>
                        </div>
                    </section>
                </div>


                <section className="about-section">
                    <div className="about-title">

                        <div className="about-header">
                            <h3 className="about-font">MANAGE ALL YOUR ASSETS</h3>

                            <div className="car-container">

                                <div className="car-pic"></div>
                                <div className="about-text">
                                    <p>Smart Application to manage data regarding your assets</p>
                                    <p>for insurance and maintenance to save money</p>
                                    <p>and improve value and to get organized</p>
                                    <button className="start-free-button2" href={process.env.REACT_APP_LOGIN}>START FREE NOW</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                <section className="phone-app-section">
                    <div className="phone-app-bgcolor">

                    
                    </div>
                </section>

                <section className="footer">
                    <Footer />
                </section>

            </div>

        );
    }
}