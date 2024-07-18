import React, { useRef, useEffect } from 'react';

const VideoStream: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  return <video ref={videoRef} autoPlay />;
};

export default VideoStream;
