import React from 'react'
import Header from "@/components/Header";
import {dummyCards} from "@/constants";
import VideoCard from "@/components/VideoCard";

const Page = () => {
  return (
    <main className="wrapper page">
        <Header title="All Videos" subHeader="Public Library"/>
        <section className="video-grid">
            {dummyCards.map((card) => (
                <VideoCard key={card.id} {...card} />
            ))}
        </section>

    </main>
  )
}

export default Page