import React, {Fragment} from "react";

const CardWindow = ({id, info, img, classProp, windowOption}) => {

  if (windowOption) {
    return (
    <Fragment>
      <div className={classProp}>
        <img src={img} alt={id} />
        <div className="card-phrase">{info}</div>
      </div>
    </Fragment>
    );
  } else {
    return (
    <Fragment>
      <div className={classProp}>
        <img src={img} alt={id} />
      </div>
    </Fragment>);
  }
  
}

export default CardWindow;