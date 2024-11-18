import React, { useState } from 'react'
import './Origin.scss'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Orichild } from '../../Share/listOfOrichids';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

function Origin() {


    const search = Orichild.filter(obj => obj.IsSpecial === true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [flower,setFlower]=useState([]);
    
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
    <Header/>
    <h3 className='OriginPage__tiltle'>Flower of Origin</h3>
    <div className='row OriginPage'>
            {search.map(orichild=>(
                <div  className='col-md-3 text-center flower' key={orichild.Id}>
                  <img src={orichild.Image} alt="" onClick={()=>showModal(orichild)} style={{ cursor: 'pointer' }}/>
                  <br /><br />
                  {/* <p>Special</p> */}
                  <h3>{orichild.Name}</h3>
                  <h6>{orichild.Origin}</h6>
                  <h6>{orichild.Rating} star</h6>
                  <Link to={`/Detail/${orichild.Id}`}>Detail</Link>
                  <br /><br />
            </div>
            ))}

    </div>
    <Modal
              title="Information of Flower"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}           
              >
                  <div className='modal__img'>
                  <img  src={flower.Image} alt="" />
                  </div>
                  <p> <strong>Id: {flower.Id}</strong> </p>
                  <p> <strong>Name: {flower.Name}</strong> </p>
                  <p> <strong>Rating: {flower.Rating}</strong> </p>
                  <p> <strong>IsSpecial: {flower.IsSpecial ? true : false}</strong> </p>
                  <p> <strong>Origin: {flower.Origin}</strong> </p>
                  <p> <strong>Category: {flower.Category}</strong> </p>

            </Modal>
    <Footer/>
    </>
  )
}

export default Origin;