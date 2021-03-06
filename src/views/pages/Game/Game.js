import React from 'react';
import { useSelector } from 'react-redux';

import { playerSelectors } from '../../../state/ducks/player';
import Board from '../../features/Board/Board';

import styles from './Game.module.css';

const Game = () => {
  const { selectNickname, selectPoints } = playerSelectors;

  const nickname = useSelector(selectNickname);
  const points = useSelector(selectPoints);

  return (
    <div className={styles.row}>
      <h1 className={styles.heading}>
        <span>Player: {nickname}</span> <span>{points}</span>
      </h1>

      <Board size={8} />
    </div>
  );
};

export default Game;
