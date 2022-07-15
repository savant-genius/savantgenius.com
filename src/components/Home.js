import {WorkContainer} from './WorkContainer';
import {IconDiagonal} from './IconDiagonal';
import {Link} from './Link';

export const Home = ({copy, contact, image, switchIndex, worksLinkText}) => {

  const handleClick = () => switchIndex(0);

  return (
    <WorkContainer>
      <div className={'copy'}>
        <span>{copy}</span>
        <Link href={`mailto:${contact}`} text={contact}/>
      </div>
      <div className={'bottom'} onClick={handleClick}>
        <div style={{cursor: 'pointer'}}>
          <span style={{marginRight: '1rem'}}>{worksLinkText}</span>
          <IconDiagonal/>
        </div>
        <img
          style={{width: '100%', marginTop: '10px'}}
          src={image}
          alt={image}
        />
      </div>
    </WorkContainer>
  );
};
