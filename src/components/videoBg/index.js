import styled from 'styled-components';

const VideoWrapper = styled.div`
    

    > video {
        position: absolute;
        opacity: .25;
        height: 720px;
        width: auto;
        display: none;
    }
`

const Video = () => {
    return (
        <VideoWrapper>
            <video autoPlay muted loop>
                <source src="bg.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
        </VideoWrapper>
    )
}

export default Video;