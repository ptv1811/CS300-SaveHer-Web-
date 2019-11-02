import React from 'react'

function MemberInfo (props) { 
    return (
        <div id='member-info'>
            <img id='member-info-avatar' src={props.memberAvatar} alt='Avatar'/>
            <div id='member-info-detail'>
                <div id='member-info-name'>{props.memberName}</div>
                <div id='member-info-id'>{props.memberId}</div>
                <div id='member-info-position'>{props.memberPosition}</div>
            </div>
        </div>    
    )
}

export default MemberInfo