import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong} from '../redux/features/playerSlice';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const dispatch = useDispatch();
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartQuery();
  const divRef = useRef(null);

  useEffect(() => { 
    divRef.current.scrollIntoView({ behavior: 'smooth' }); 
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6">

    </div>
  )
};

export default TopPlay;
