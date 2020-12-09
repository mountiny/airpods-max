import Nav from '../components/nav'
import Image from 'next/image'
import React, { useState, useEffect } from "react"
import Head from 'next/head';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const AIRPODS = ["black", "white", "pink", "blue", "green"]


const Index = () => {

  const [detailOpen, setDetailOpen] = useState(false)
  const [current, setCurrent] = useState(`/assets/images/black_1.jpg`)

  useEffect(() =>{
    if (detailOpen) {
      disableBodyScroll(document.querySelector(".detail-img"))
    } else {
      console.log('Enabled')
      enableBodyScroll(document.querySelector(".detail-img"))
    }
  }, [detailOpen])


  return (
    <div className={`${detailOpen && "overflow-hidden"}`}>
      <Head>
        <title>Airpods Max Variants</title>
        <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="container mx-auto px-16 font-sans pt-12">
        <header className="pb-16 flex justify-between">
          <div>
            <h1 className="text-4xl font-black pb-8">Airpods Max Variants</h1>
            <h4 className="text-lg">
              Explore all the Airpods Max color combinations right here!
            </h4>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="https://twitter.com/vitHoracek" target="_blank" className={`block transform hover:scale-105 transition-transform cursor-pointer`}>
              <Image
                src="/assets/images/mountiny.png"
                alt="Mountiny"
                className=""
                width={50}
                height={50}
              />
            </a>
          </div>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:grid-cols-4 xl:grid-cols-5">

        {
          AIRPODS.map(pod => {

            let row = []

            for (const i in [...Array(5).keys()]) {

              row.push(
                <div
                className={`transform hover:scale-105 transition-transform cursor-pointer`}
                onClick={()=> {
                  setDetailOpen(!detailOpen) 
                  setCurrent(`/assets/images/${pod}_${parseInt(i)+1}.jpg`)
                }}
                onMouseOver={()=> {
                  setCurrent(`/assets/images/${pod}_${parseInt(i)+1}.jpg`)
                }}
                key={`${pod}_${parseInt(i)+1}.jpg`}
                >
                  <Image 
                    src={`/assets/images/${pod}_${parseInt(i)+1}.jpg`}
                    alt={`${pod.toLowerCase()} variant`}
                    layout="responsive"
                    width="250"
                    height="296"
                    />
                </div>
                )

            }

            return row
          })
        }

        </main>

        <div className={`fixed bg-white z-60 w-full h-screen top-0 left-0 ${!detailOpen && 'hidden'}`}>

          <div className="container mx-auto px-16 pt-12">
            <div className="top-0 font-bold flex justify-end">
              <div className="cursor-pointer" onClick={()=>setDetailOpen(!detailOpen)}>
                CLOSE
              </div>
            </div>

            <div className="w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto relative">
              <Image 
                src={current}
                className="detail-img"
                alt={``}
                layout="responsive"
                width="540"
                height="640"

                />
            </div>
          </div>
        </div>

        <footer className="pb-16 pt-32">
          Made by <a className="font-bold" href="https://twitter.com/vitHoracek" target="_blank">@vitHoracek</a> / <a className="font-bold" href="https://www.mountiny.com/" target="_blank">mountiny</a>
        </footer>
      </div>
    </div>
  )
}

export default Index