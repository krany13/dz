import React from 'react'
import s from './Message.module.css'
import {MessageType, MessageTypeProps} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType,
    id?: number
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src="../avatar.png" alt={"photo"}
                    //
                />
                <hr/>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        <p>Ivan</p>
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        <p>Hello, how are you, what did you do yesterday?</p>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                <p>09:00</p>
                {/**/}
            </div>
        </div>
    )
}

export default Message
