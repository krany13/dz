import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

/*
* 1 - описать тип UserType СДЕЛАЛ!!!
* 2 - указать нужный тип в useState с users СДЕЛАЛ!!!
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами СДЕЛАЛ!!!
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов ВРОДЕ СДЕЛАЛ!!!
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error СДЕЛАЛ!!!
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback  СДЕЛАЛ!!!
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами СДЕЛАЛ!!
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) ТЕОРИТИЧЕСКИ СДЕЛАЛ!!!
* 9 - в файле Greeting.tsx дописать типизацию пропсов ВРОДЕ СДЕЛАЛ!!!!
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки  ???????????
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string// need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers: any, users: Array<UserType>) => { // need to fix any
    const user = {
        _id: v1(),
        name: name
        // need to fix
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (name: any) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
