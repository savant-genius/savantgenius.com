export const IconDown = ({handleClick}) => {
  return (
    <span className={'icon'} onClick={handleClick}>
      <svg viewBox="0 0 16 16">
        <g fill="none">
          <path
            d="M7.146 13.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8 12.293V2.5a.5.5 0 0 0-1 0v9.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
            fill="currentColor"></path>
        </g>
      </svg>
    </span>
  );
};
