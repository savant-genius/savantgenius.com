import {WorkContainer} from './WorkContainer';
import {IconDiagonal} from './IconDiagonal';
import {Link} from './Link';

export const Home = ({copy, contact, image, switchIndex, worksLinkText}) => {

  const handleClick = () => switchIndex(0);

  return (
    <WorkContainer>
      <div>
        <span className={'copy'}>{copy}</span>
        <Link href={`mailto:${contact}`} text={contact} />
      </div>
      <div className={'bottom'} onClick={handleClick}>
        <div style={{cursor: 'pointer'}}>
          <span style={{marginRight: '1rem'}}>{worksLinkText}</span>
          <IconDiagonal/>
        </div>
        <img src={image} alt={image}/>
      </div>
    </WorkContainer>
  );
};
