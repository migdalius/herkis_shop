import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const ClockContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const TimeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100px;
`;

const Counters = styled.p`
  font-weight: 600;
  font-size: 28px;
`;

const Days = styled.p``;

const Counter = () => {
  const [time, setTime] = useState(7 * 24 * 60 * 60 * 1000);
  // Timer

  let totalSeconds = parseInt(Math.floor(time / 1000));
  let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
  let totalHours = parseInt(Math.floor(totalMinutes / 60));
  let totalDays = parseInt(Math.floor(totalHours / 24));

  let seconds = parseInt(totalSeconds % 60);
  let minutes = parseInt(totalMinutes % 60);
  let hours = parseInt(totalHours % 24);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  return (
    <ClockContainer>
      <TimeWrap>
        <Counters>{totalDays}</Counters>
        <Days>Dni</Days>
      </TimeWrap>
      <TimeWrap>
        <Counters>{hours}</Counters>
        <Days>Godzin</Days>
      </TimeWrap>
      <TimeWrap>
        <Counters>{minutes}</Counters>
        <Days>Minut</Days>
      </TimeWrap>
      <TimeWrap>
        <Counters>{seconds}</Counters>
        <Days>Sekund</Days>
      </TimeWrap>
    </ClockContainer>
  );
};

export default Counter;
