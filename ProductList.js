// ProductList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setSortBy, setSearchTerm } from './productReducer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa';

const ProductList = () => {
  const dispatch = useDispatch();
  const { list, sortBy, searchTerm } = useSelector((state) => state.products);
  const loggedIn = sessionStorage.getItem('username');

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [bill, setBill] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = list.filter((product) => {
    const brandMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const priceMatch = product.price.toString().includes(searchTerm);
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const isLaptopCategory = selectedCategory === 'laptops' && product.category.toLowerCase() === 'laptops';
    const isTabletCategory = selectedCategory === 'tabs' && product.category.toLowerCase() === 'tablets';

    return (brandMatch || priceMatch) && (categoryMatch || isLaptopCategory || isTabletCategory);
  });

  if (sortBy === 'price-high-to-low') {
    filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (sortBy === 'price-low-to-high') {
    filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  }

  const handleSortChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleClearSearch = () => {
    dispatch(setSearchTerm(''));
  };

  const handleAddToCart = (productId) => {
    setCartItems([...cartItems, productId]);
    toast.success('Product added to cart');
  };

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const totalPrice = cartItems.reduce((acc, productId) => {
    const product = list.find((item) => item.id === productId);
    const price = parseFloat(product.price.replace(/[₹,]/g, ''));
    return acc + price;
  }, 0);

  return (
    <div className="text-center">
      <h1>Products</h1>
      <div className="d-flex justify-content-start align-items-center m-3">
        <div className="filter-dropdown me-3">
          <label>Filter By Category:</label>
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} className="form-select">
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="tabs">Tablets</option>
            <option value="phones">Phones</option>
          </select>
        </div>
        <div className="ml-auto">
          {loggedIn && (
            <Button variant="outline-dark" onClick={handleCartClick}>
              <FaShoppingCart /> {cartItems.length}
            </Button>
          )}
        </div>
        <div className="search-bar">
          <InputGroup>
            <FormControl
              style={{ width: "500px" }}
              type="text"
              placeholder="Search products by brand or price..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button variant="outline-secondary" onClick={handleClearSearch}>
              X
            </Button>
          </InputGroup>
        </div>
      </div>

      <ul className="list-unstyled d-flex justify-between flex-wrap m-2 p-1">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Card className='m-1 shadow' style={{ width: '18rem' }}>
              <Card.Body>
                <Link to={`/product/${product.id}`} className="product-link">
                  <Button variant="primary">View</Button>
                </Link>
                <Card.Img
                  style={{ height: 'auto', maxWidth: '100%', marginBottom: '10px' }}
                  variant="top"
                  src={product.image}
                  alt={product.title}
                />
                <Card.Title className='m-2'>{product.title}</Card.Title>
                <Card.Title className='m-2'>{product.price}</Card.Title>
                <Card.Text className='m-2'>{product.description}</Card.Text>
                {loggedIn && (
                  cartItems.includes(product.id) ? (
                    <Button variant="secondary" disabled>
                      In Cart
                    </Button>
                  ) : (
                    <Button variant="success" onClick={() => handleAddToCart(product.id)}>
                      Add to Cart
                    </Button>
                  )
                )}
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>

      <Modal show={showCartModal} onHide={handleCloseCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cartItems.map((productId) => {
              const product = list.find((item) => item.id === productId);
              return (
                <li key={productId}>
                  {product.title} - {product.price}
                </li>
              );
            })}
          </ul>
          <p>Total Price: {totalPrice.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/payment-options"> {/* Use Link to navigate to payment options */}
            <Button variant="primary">
              Buy
            </Button>
          </Link>
          <Button variant="secondary" onClick={handleCloseCartModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductList;
