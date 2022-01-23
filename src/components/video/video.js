import { Avatar } from "@material-ui/core";
import "./video.css";

const Video = ({
  thumbnail,
  logo,
  channelName,
  views,
  title,
  date,
  duration
}) => {
  return (
    <div className="video">
      <div className="thumbnail">
        <img src={thumbnail} />
        <span className="duration">{duration}</span>
      </div>
      <div className="channel__footer">
        <div className="channelLogo">
          <Avatar src={logo} />
        </div>
        <div className="channel__details">
          <p className="title">{title}</p>
          <p className="channelName">{channelName}</p>
          <span className="views">{views} views</span>
          <span className="date"> - {date} ago</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
