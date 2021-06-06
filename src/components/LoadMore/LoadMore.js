import React from 'react'
import './styles.scss'
import Button from './../forms/Button/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const LoadMore = ({ 
  onLoadMoreEvt = () => { },
}) => {
  return (
    <div className="loadmore" onClick={() => onLoadMoreEvt()}>
      <p>
      Load More 
      </p>
      {/* <div className="drop">
       <ExpandMoreIcon />
        </div>  */}
    </div>
  );
};

export default LoadMore;