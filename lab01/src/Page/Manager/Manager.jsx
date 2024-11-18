/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import "./Manager.scss";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import * as Yup from "yup";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { Star } from "lucide-react";
function Manager() {
  const [api, setApi] = useState([]);
  const baseURL = "https://66d8593537b1cadd80545af5.mockapi.io/Flower";
  const [show, setShow] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setIsSubmitting(false);
  };
  const fetchAPI = () => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          data.sort((a, b) => {
            if (Number(a.Id) > Number(b.Id)) return -1;
            if (Number(a.Id) < Number(b.Id)) return 1;
            return 0;
          });
          setApi(data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleDelete = (id) => {
    fetch(baseURL + "/" + id, { method: "DELETE" })
      .then(() => {
        toast.success("Delete successfully!");
        fetchAPI();
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (item) => {
    setCurrentEditId(item.Id);
    formik.setValues({
      Image: item.Image,
      Name: item.Name,
      Rating: item.Rating,
      IsSpecial: item.IsSpecial,
      Color: item.Color,
      Origin: item.Origin,
      Category: item.Category,
      Iframe: item.Iframe,
    });
    handleShow();
  };

  const cate = [
    { Id: "1", Name: "Cattleya" },
    { Id: "2", Name: "Phalaenopsis" },
    { Id: "3", Name: "Vanda" },
    { Id: "4", Name: "Cymbidium" },
    { Id: "5", Name: "Dendrobium" },
    { Id: "6", Name: "Paphiopedilum" },
    { Id: "7", Name: "Oncidium" },
    { Id: "8", Name: "Miltonia" },
  ];

  // const vali = yup.object({
  //   Image: yup.string().min(2, "Enter 2").required("Enter"),
  //   Name: yup.string().min(2, "Enter 2").required("Enter"),
  //   Rating: yup.string().min(2, "Enter 2").required("Enter"),
  //   IsSpecial: false,
  //   Color: yup.string().min(2, "Enter 2").required("Enter"),
  //   Origin: yup.string().min(2, "Enter 2").required("Enter"),
  //   iframe: yup.string().min(2, "Enter 2").required("Enter"),
  // });

  const formik = useFormik({
    initialValues: {
      Image: "",
      Name: "",
      Rating: "",
      IsSpecial: false,
      Color: "",
      Origin: "",
      Category: "",
      Iframe: "",
    },
    onSubmit: (values) => {
      setIsSubmitting(true);

      const method = currentEditId ? "PUT" : "POST";
      const url = currentEditId ? `${baseURL}/${currentEditId}` : baseURL;

      fetch(url, {
        method: method,
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then(() => {
          handleClose();
          toast.success(
            currentEditId ? "Update successfully!" : "Create successfully!"
          );
          fetchAPI();
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    // validationSchema: vali,
    validationSchema: Yup.object({
      Image: Yup.string()
        .required("Please enter information!")
        .min(2, "Must be 2 character or more!"),
      Name: Yup.string()
        .required("Please enter information!")
        .min(2, "Must be 2 character or more!"),
      Rating: Yup.string().required("Please enter information!"),
      Color: Yup.string()
        .required("Please enter information!")
        .min(2, "Must be 2 character or more!"),
      Origin: Yup.string()
        .required("Please enter information!")
        .min(2, "Must be 2 character or more!"),
      Iframe: Yup.string()
        .required("Please enter information!")
        .min(2, "Must be 2 character or more!"),
    }),
  });
  return (
    <>
      <Header />
      <br />
      <h1 className="Manager__h1">Manage Flower</h1>
      <ToastContainer />
      <Container>
        <Button onClick={handleShow} className="but">
          Add flower
        </Button>

        <Modal onHide={handleClose} show={show}>
          <Modal.Header>
            <Modal.Title>{currentEditId ? "Edit" : "Add"} Flower</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="Image"
                  value={formik.values.Image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.Image && !!formik.errors.Image}
                  placeholder="Enter Image"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Image}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  value={formik.values.Name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.Name && !!formik.errors.Name}
                  placeholder="Enter Name"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-6 h-6 cursor-pointer"
                      style={{
                        fill: star <= rating ? "#f59e0b" : "none",
                        stroke: star <= rating ? "#f59e0b" : "#d1d5db",
                        color: star <= rating ? "#f59e0b" : "#d1d5db",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setRating(star);
                        formik.setFieldValue("Rating", star);
                      }}
                    />
                  ))}
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  name="Color"
                  value={formik.values.Color}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.Color && !!formik.errors.Color}
                  placeholder="Enter Color"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Color}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Origin</Form.Label>
                <Form.Control
                  type="text"
                  name="Origin"
                  value={formik.values.Origin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.Origin && !!formik.errors.Origin}
                  placeholder="Enter Origin"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Origin}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Video</Form.Label>
                <Form.Control
                  type="text"
                  name="Iframe"
                  value={formik.values.Iframe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.Iframe && !!formik.errors.Iframe}
                  placeholder="Enter Video"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Iframe}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  type="switch"
                  id="IsSpecialSwitch"
                  label="IsSpecial"
                  name="IsSpecial"
                  checked={formik.values.IsSpecial}
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Select
                  aria-label=""
                  name="Category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.touched.Category && !!formik.errors.Category
                  }
                >
                  <option value="">Select Category</option>
                  {cate.map((c) => (
                    <option value={c.Name} key={c.Id}>
                      {c.Name}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Category}
                </Form.Control.Feedback>
              </Form.Group>

              <Modal.Footer>
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save changes"}
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
        <Row>
          <Col>
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>IsSpecial</th>
                  <th>Color</th>
                  <th>Origin</th>
                  <th>Category</th>
                  <th>Video</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {api.map((a) => (
                  <tr key={a.Id}>
                    <td>
                      <Image src={a.Image} width={80}></Image>
                    </td>
                    <td>{a.Name}</td>
                    <td>{a.Rating}</td>
                    <td>
                      {a.IsSpecial ? (
                        <i className="bi bi-balloon-heart-fill"></i>
                      ) : (
                        <i className="bi bi-arrow-through-heart-fill"></i>
                      )}
                    </td>
                    <td>{a.Color}</td>
                    <td>{a.Origin}</td>
                    <td>{a.Category}</td>
                    <td>
                      {a.Iframe ? (
                        <iframe
                          width="200"
                          height="150"
                          src={a.Iframe}
                          title={a.Name}
                          allowFullScreen
                        ></iframe>
                      ) : (
                        "No video"
                      )}
                    </td>

                    <td>
                      <i
                        className="bi bi-pen-fill"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleEdit(a)}
                      ></i>{" "}
                      |
                      <i
                        className="bi bi-archive-fill"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          if (confirm("Do you want to delete?"))
                            handleDelete(a.Id);
                        }}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Manager;
