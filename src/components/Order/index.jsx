import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import {Select} from "../Select";

export function Order({data, Circle, CurrentOption, OptionsToSelect, onSelect}) {
  const {user} = useAuth();

  const isAdmin = user.role == "admin";

  return(
    <Container>
      <div className="code-status-date">
        <p>{data.id}</p>

        { isAdmin == false &&
          <div className='status'>
            {Circle}
            <p>{CurrentOption}</p>
          </div>
        }

        <p>{data.created_at}</p>
      </div>

      <p>{data.description}</p>

      { isAdmin == true &&
        <Select className="select" 
          onSelect={onSelect} Id={data.id} Circle={Circle}
          CurrentOption={CurrentOption} OptionsToSelect={OptionsToSelect} 
        /> 
      }
    </Container>
  );
};