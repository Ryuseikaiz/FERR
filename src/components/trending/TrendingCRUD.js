// TrendingCRUD.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending, createTrendingItem, updateTrendingItem, deleteTrendingItem } from '../../services/trendingServices';
import { Modal, Button, Form } from 'react-bootstrap';
import './trendingCRUD.css';

import Header from '../header/header';
import Footer from '../footer/footer';


function TrendingCRUD() {
  const dispatch = useDispatch();
  const { trending, error } = useSelector((state) => state.trending);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'add' or 'update'
  const [currentItem, setCurrentItem] = useState({
    name: "",
    rating: 0,
    time: "",
    desc: "",
    starring: "",
    genres: "",
    tags: "",
    cover: "",
    date: "",
  });


  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  const handleShowModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(
      item || {
        name: "",
        rating: 0,
        time: "",
        desc: "",
        starring: "",
        genres: "",
        tags: "",
        cover: "",
        date: "",
      }
    );

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentItem({
      name: "",
      rating: 0,
      time: "",
      desc: "",
      starring: "",
      genres: "",
      tags: "",
      cover: "",
      date: "",
    });
  };

  const handleSave = () => {
    if (modalType === "add") {
      dispatch(createTrendingItem(currentItem));
    } else if (modalType === "update") {

      dispatch(updateTrendingItem(currentItem.id, currentItem));
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteTrendingItem(id));
  };

  return (
    <>
    <div className="trending-crud-container">
      <h2>Manage Trending Items</h2>


      <div className="trending-grid">
        {trending.map((item) => (
          <div key={item.id} className="trending-item">
            <img src={item.cover} alt={item.name} className="item-image" />
            <h4>{item.name}</h4>
            <p>
              <strong>Rating:</strong> {item.rating}
            </p>
            <p>
              <strong>Time:</strong> {item.time}
            </p>
            <p>
              <strong>Description:</strong> {item.desc}
            </p>
            <p>
              <strong>Starring:</strong> {item.starring}
            </p>
            <p>
              <strong>Genres:</strong> {item.genres}
            </p>
            <p>
              <strong>Tags:</strong> {item.tags}
            </p>
            <p>
              <strong>Release Date:</strong> {item.date}
            </p>
            <div className="item-buttons">
              <Button
                variant="warning"
                onClick={() => handleShowModal("update", item)}
              >
                Update
              </Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="success"
        className="add-button"
        onClick={() => handleShowModal("add")}
      >
        Add New Item
      </Button>


      {/* Modal for Add/Update */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "add" ? "Add New Item" : "Update Item"}
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.name}

                onChange={(e) =>
                  setCurrentItem({ ...currentItem, name: e.target.value })
                }

              />
            </Form.Group>
            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                value={currentItem.rating}
                onChange={(e) =>
                  setCurrentItem({
                    ...currentItem,
                    rating: parseFloat(e.target.value),
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.time}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, time: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentItem.desc}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, desc: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formStarring">
              <Form.Label>Starring</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.starring}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, starring: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formGenres">
              <Form.Label>Genres</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.genres}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, genres: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTags">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.tags}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, tags: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formCover">
              <Form.Label>Cover Image URL</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.cover}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, cover: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.date}
                onChange={(e) =>
                  setCurrentItem({ ...currentItem, date: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {modalType === "add" ? "Add" : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default TrendingCRUD;
