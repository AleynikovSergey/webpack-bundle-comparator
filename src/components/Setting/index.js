import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme } from 'src/state/ducks/ui';

const Setting = () => {
  const [visable, setVisable] = useState(false);

  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme(theme));
  }, [theme]);

  return (
    <div
      className={classnames('setting', {
        'shadow-lg show': visable,
      })}
    >
      <span
        onClick={() => setVisable(!visable)}
        className="setting-btn shadow-lg bg-violet text-white"
      >
        <FontAwesomeIcon icon={faCogs} />
      </span>
      <ul className="color-plate">
        <li
          className="bg-default"
          onClick={() => dispatch(toggleTheme('default'))}
        ></li>
        <li
          className="bg-green"
          onClick={() => dispatch(toggleTheme('green'))}
        ></li>
        <li
          className="bg-violet"
          onClick={() => dispatch(toggleTheme('violet'))}
        ></li>
      </ul>
    </div>
  );
};

export default Setting;
