import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { Orichild } from "../../Share/listOfOrichids";
import "./Detail.scss";
import { Button } from "antd";
import { getFlowerById } from "../../Components/api/api";

export default function Detail() {
  const { id } = useParams();
  // const flower = Orichild.find(flo => flo.Id === String(id)); // Chuyển id thành chuỗi
  const [flower, setFlower] = useState([]);
  const [visible, setVisible] = useState(false);
  const [ifr, setIfr] = useState("");

  useEffect(() => {
    getFlowerById(id).then((data) => {
      if (data) {
        setFlower(data);
        console.log(flower);
      }
    });
  });

  const handleClick = () => {
    setIfr(flower.Iframe);
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <Header />

      <div className="DetailPage__bg">
        <div className="DetailPage">
          <div className="DetailPage__Card">
            <div className="DetailPage__infor">
              <img src={flower.Image} alt="" />
              <Button
                className="DetailPage__view"
                type="secondary"
                onClick={handleClick}
              >
                <p>{visible ? "Hide" : "View"}</p>
              </Button>
              {visible && (
                <iframe className="iframe" src={flower.Iframe}></iframe>
              )}
              <h3>{flower.Name}</h3>
              <p>{flower.Color}</p>
              <h5>{flower.Category}</h5>
              <h5>{flower.Origin}</h5>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
