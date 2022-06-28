import React, { useEffect, useState } from 'react';
import '../../../bootstrap/css/bootstrap.css'
import '../../style/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ItemDeleteModal(props) {

    // HOOKS
    const st = useSelector((state) => state.dataB);
    const [addItem, setAddItem] = useState('2');
    const dispatch = useDispatch();

    // Constants And Variables

    // MODAL SHOW FUNCTIONS
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteItem = () => {
        dispatch({
            type: 'delete-item',
            state: props.itemId - 1
        });
        handleClose();
    }

    useEffect(() => {
    }, [st]);

    return (
        <div className='itemDeleteModal'>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>

            <Button variant="primary" onClick={handleShow} className='btn btn-edit btn-delete-item-interface'>
                حذف المنتج
                <i className="bi bi-trash icon-me-item-interface"></i>
            </Button>



            <Modal show={show} onHide={handleClose} size='sm'>


                <Modal.Body className="add-item-modal-body">
                    <div className="icon-me-item-delete"><i className="bi bi-trash fa-3x "></i></div>
                    <div className="line-under-delete-item-icon">هل أنت متأكد من حذف هذا المنتج ؟</div>
                </Modal.Body>


                <Modal.Footer dir="auto">

                    <Button variant="secondary" onClick={handleClose} className="btn-add-item-modal">
                        إلغاء
                    </Button>
                    <NavLink to="/productBusi"
                        onClick={handleDeleteItem}
                        style={{ textDecoration: 'none', color: 'inherit' }} exact="true">
                        <Button variant="primary" onClick={handleDeleteItem} className="btn btn-edit btn-add-item-modal">
                            تأكيد
                        </Button>
                    </NavLink>

                </Modal.Footer>

            </Modal>

        </div>
    )
}
export default ItemDeleteModal;

