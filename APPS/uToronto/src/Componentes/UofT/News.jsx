import React from 'react'
import "../../Styles/UofT/Body.css";
import uTogue from '../../images/UofT/utoguether.png';
import in1 from '../../images/UofT/news1.jpg';
import in2 from '../../images/UofT/news2.png';
import Noticia from './Noticia';

const News = () => {
    return (
        <div className = "News">
            <div className = "NewsTitle">
                <p><img src = {uTogue} alt="Corrupto"></img></p>
                <p>From President Meric Gertler: An update on our planning for Fall 2021</p>
            </div>
            <div className = "Newscol">
                <h2 className = "NT">Latest news</h2>
                <img src={in1} alt = "Corrupto"></img>
                <Noticia encabezado = "Researchers seek to improve representation with Canadian Black Scientists Network" fecha = "March 30, 2021"/>
                <hr/>
                <Noticia encabezado = "U of T researchers to help form national Coronavirus Variants Rapid Response Network" fecha = "March 29, 2021"/>
                <hr/>
                <Noticia encabezado = "Rapid COVID-19 screening project led by Creative Destruction Lab expands to U.S.: New York Times" fecha = "March 27, 2021"/>
                <button className="btn1">MORE U OF NEWS</button>
            </div>
            <div className = "Newscol">
                <h2 className = "NT">Upcoming virtual events</h2>
                <img src={in2} alt = "Corrupto"></img>
                <Noticia encabezado = "Shared Unity, Shared Action: Dismantling Anti-Asian Racism" fecha = "March 31, 2021"/>
                <hr/>
                <Noticia encabezado = "Purposeful Resilience: Restoration through Dialogue and Meditation" fecha = "March 31, 2021"/>
                <hr/>
                <Noticia encabezado = "Exam Prep and Test Anxiety Workshop" fecha = "March 31, 2021"/>
                <button className="btn1">MORE EVENTS</button>
            </div>
        </div>
    )
}

export default News
