import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Русский культурный центр г. Ашкелон</span>
        {/* <span className=" headerTitleSm" >
          " It's a place to post your thinking on any topic, and share new
          ideas."
        </span> */}
        <img
          className="headerImg"
          src="https://live.staticflickr.com/3047/2935905040_800b33926a_b.jpg"
          alt="headerImg"
        />
      </div>
    </div>
  );
}
