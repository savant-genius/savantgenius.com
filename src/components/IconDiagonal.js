export const IconDiagonal = ({handleClick}) => {
  return (
    <span className={'icon'} onClick={handleClick}>
      <svg viewBox="0 0 16 16"><g
        fill="none"><path
        d="M7.5 3a.5.5 0 0 1 0-1h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V3.707L2.854 13.854a.5.5 0 0 1-.708-.708L12.293 3H7.5z"
        fill="currentColor"></path></g></svg>
    </span>
  );
};
