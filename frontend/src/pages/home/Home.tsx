import React from 'react';
import { Topbar } from '../../components/topbar/Topbar.tsx';
import { Sidebar } from '../../components/sidebar/Sidebar.tsx';
import { TimeLine } from '../../components/timeline/TimeLine.tsx';
import { Rightbar } from '../../components/rightbar/Rightbar.tsx';

export default function Home () {
  return (
    <>
      <Topbar />
      <div className="home-container">
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </div>
    </>
  )
}
