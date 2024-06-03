import { Container } from './styles';

export function Order({data, Circle}) {

  return(
    <Container>
      <div className="code-status-date">
        <p>{data.code}</p>
        <div className='status'>
          {Circle}
          <p>{data.status}</p>
        </div>
        <p>{data.date}</p>
      </div>

      <p>{data.details}</p>
    </Container>
  );
};