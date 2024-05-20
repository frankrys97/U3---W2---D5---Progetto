import video from "../assets/PAESAGGI SPETTACOLARI (4K) (online-video-cutter.com).mp4";

const MyVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      controls={false}
      style={{
        position: "fixed",
        width: "100%",
        left: "0",
        top: "0",
        height: "100%",
        objectFit: "cover",
        zIndex: "-1",
      }}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default MyVideo;
