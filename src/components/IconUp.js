export const IconUp = ({handleClick}) => {
  return (
    <span className={'icon'} onClick={handleClick}>
      <svg viewBox="0 0 16 16">
        <g fill="none">
          <path
            d="M7.146 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707V13.5a.5.5 0 0 1-1 0V3.707L4.854 5.854a.5.5 0 1 1-.708-.708l3-3z"
            fill="currentColor"></path>
        </g>
      </svg>
    </span>
  );
};
