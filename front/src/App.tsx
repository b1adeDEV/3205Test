import { Button } from 'antd';
import './App.css';
import { CreateForm } from './components/createForm';
import { useState } from 'react';
import { DeleteForm } from './components/deleteForm';
import { InfoForm } from './components/infoForm';


function App() {

  const [state, setState] = useState("create")

  return (
    <>
      <div className="Form">
        <div className="mainForm">

          {
            state === "create" ?
              <CreateForm /> :
              state === "info" ?
                <InfoForm/> :
                state === "delete" ?
                  <DeleteForm/> :
                  ""
          }
          <div className='btnGroup'>
            {
              state !== "info" ?
                <Button onClick={() => setState("info")} >
                  Получить информацию
                </Button> : <Button onClick={() => setState("create")} >
                  Создать ссылку
                </Button>
            }
            {state !== "delete" ?
              <Button onClick={() => setState("delete")} color="danger" variant="solid">
                Удалить
              </Button> :
              <Button onClick={() => setState("create")} >
                Создать ссылку
              </Button>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App;
