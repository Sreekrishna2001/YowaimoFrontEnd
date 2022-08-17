import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../NetworkCalls/api'
import { Link } from 'react-router-dom';
import AnimeCard from '../NewAnimeCard/AnimeCard'
import Loader from '../Loader/Loader'
import './Home.css'

export default function Home({route}) {
  let [homepage, sethomepage] = useState([])
  useEffect(() => {
    sethomepage([])
    const fetchDataa = async () => {
      sethomepage(route==='/'?await makeRequest('GET', route):await makeRequest('GET', route))
    }
    fetchDataa()
    // window.scroll(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route])

  const PageLoader = () => {
    const length = homepage.length;
    return (
      <div className='mt-3'>
        {length === 0 ? <Loader /> : ""}
      </div>
    )
  }

  return (
    <>
      <section className="first-section">
        <div className="section-main-title">
            <h1>The World&apos;s Largest <br /> Anime Collection</h1>
            <a href="#watchanime" className="view-anime">Watch Now...!</a>
        </div>
        <div className="section-features">
            <div className="each-feature">
                <div className="feature-logo">
                    <span className="material-icons"> schedule </span>
                </div>
                <div className="feature-text">
                    Watch new episodes one hour after they air in Japan
                </div>
            </div>
            <div className="each-feature">
                <div className="feature-logo">
                    <span className="material-icons"> priority_high </span>
                </div>
                <div className="feature-text">
                    Enjoy access to unlimited ad-free anime
                </div>
            </div>
            <div className="each-feature">
                <div className="feature-logo">
                    <span className="material-icons"> description </span>
                </div>
                <div className="feature-text">
                    Read hundreds of chapters across dozens of manga titles
                </div>
            </div>
            <div className="each-feature">
                <div className="feature-logo">
                    <span className="material-icons"> store </span>
                </div>
                <div className="feature-text">
                    Fun with exclusive Yowai Mo E-Store content
                </div>
            </div>
        </div>
      </section>
      <br />
      < PageLoader />
      <section className="grid lg:grid-cols-5 justify-items-center gap-10 m-8 grid-cols-3 " id="watchanime">
        {route==='/'?homepage.map(anime => 
          <Link to={`anime/${anime.anime}`} key={anime.anime}>
            <AnimeCard key={anime.anime} cover={anime.cover} name={anime.anime} />
          </Link>
        )
        :homepage.map(anime => <div className="col-md-3 col-lg-2 col-6 mb-1" key={anime.drama}> <Link to={`${anime.drama}`}><AnimeCard key={anime.drama} cover={anime.cover} name={anime.drama} /></Link> </div>)}
      </section>
    </>
  )
}
