import SideBar from "../../components/sidebar/SideBar";
import Singlepost from "../../components/singlePost/Singlepost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <Singlepost />
      <SideBar />
    </div>
  );
}
