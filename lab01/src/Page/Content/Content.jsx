/* eslint-disable react/jsx-key */
import "./Content.scss";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { getAllFlower } from "../../Components/api/api";

export default function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flower, setFlower] = useState([]);
  const [allFlower, setAllFlower] = useState([]);
  const [special, setSpecial] = useState(false);

  useEffect(() => {
    getAllFlower().then((data) => {
      if (data) {
        setAllFlower(data);
        console.log(flower);
      }
    });
  });

  const showModal = (flow) => {
    setFlower(flow);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h1 className="content__header">Welcome to The's Flowers</h1>
      <div className="content__divider"></div>

      <div className="content">
        <h2>Feature Products</h2>
        <div className="row content__flower">
          {allFlower.map((orichild) => (
            <div className="col-md-3 text-center flower" key={orichild.Id}>
              <img
                src={orichild.Image}
                alt=""
                onClick={() => showModal(orichild)}
                style={{ cursor: "pointer" }}
              />
              <br />
              <br />
              <h3>{orichild.Name}</h3>
              <h6>{orichild.Origin}</h6>
              {orichild.IsSpecial == true && <p>special</p>}
              <Link to={`/Detail/${orichild.Id}`}>Detail</Link>
              <br />
              <br />
            </div>
          ))}
        </div>
        <Modal
          title="Information of Flower"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="modal__img">
            <img src={flower.Image} alt="" />
          </div>
          <p>
            {" "}
            <strong>Id: {flower.Id}</strong>{" "}
          </p>
          <p>
            {" "}
            <strong>Name: {flower.Name}</strong>{" "}
          </p>
          <p>
            {" "}
            <strong>Rating: {flower.Rating}</strong>{" "}
          </p>
          <p>
            {" "}
            <strong>
              Special:{" "}
              {flower.IsSpecial ? (
                <i className="bi bi-check-circle-fill"></i>
              ) : (
                <i className="bi bi-x-lg"></i>
              )}
            </strong>{" "}
          </p>
          <p>
            {" "}
            <strong>Origin: {flower.Origin}</strong>{" "}
          </p>
          <p>
            {" "}
            <strong>Category: {flower.Category}</strong>{" "}
          </p>
        </Modal>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
