import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import {Select} from "../Select";

export function Order({data, Circle, CurrentOption, OptionsToSelect, onSelect}) {
  const {user} = useAuth();

  const isAdmin = user.role == "admin";

  return(
    <Container>
      <div className="code-status-date">
        <p>{data.code}</p>

        { isAdmin == false &&
          <div className='status'>
            {Circle}
            <p>{data.status}</p>
          </div>
        }

        <p>{data.date}</p>
      </div>

      <p>{data.details}</p>

      { isAdmin == true &&
        <Select className="select" 
          onSelect={onSelect} Circle={Circle}
          CurrentOption={CurrentOption} OptionsToSelect={OptionsToSelect} 
        /> 
      }
    </Container>
  );
};