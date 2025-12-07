import iziToast from 'izitoast';

const API_BASE_URL = 'http://localhost:5000';

// Izi Toast
export const notifyMessage = (message) => {
    iziToast.show({
      message,
      position: "bottomRight",
      color: "rgb(34 197 94 / 70%",
      icon: "bi-check-circle-fill",
      iconColor: "#fff",
      titleColor: "#fff",
      messageColor: "#fff",
    });
  };

// API Functions
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProduct = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products/${productId}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    const data = await response.json();
    return data.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const sendContactForm = async (formData) => {
  try {
    const params = new URLSearchParams(formData);
    const response = await fetch(`${API_BASE_URL}/api/contact?${params}`);
    if (!response.ok) throw new Error('Failed to send contact form');
    return await response.json();
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};