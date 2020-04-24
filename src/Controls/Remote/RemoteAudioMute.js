import React, { useState, useContext } from 'react'
import RtcContext from '../../RtcContext'
import BtnTemplate from '../BtnTemplate'
import styles from '../../Style'
import PropsContext from '../../PropsContext'

function RemoteAudioMute(props) {

    const { RtcEngine, dispatch } = useContext(RtcContext);
    const { styleProps } = useContext(PropsContext);
    const { remoteBtnStyles } = styleProps;
    const { muteRemoteAudio } = remoteBtnStyles || {};

    return (
        (props.user.uid !== 'local') ?
            <BtnTemplate
                name={props.user.audio ? 'mic' : 'micOff'}
                style={{ ...styles.leftRemoteBtn, ...muteRemoteAudio }}
                onPress={
                    () => {
                        RtcEngine.muteRemoteAudioStream(props.user.uid, props.user.audio);
                        dispatch({ type: 'onUserMuteRemoteAudio', value: { user: props.user, muted: props.user.audio } });
                    }
                }
            /> : <></>
    )
}

export default RemoteAudioMute;
