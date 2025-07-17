// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyCGb56NI_VpEHYzu3U_V4cWzwiK-y2cJjY",
  authDomain: "fir-project-4103c.firebaseapp.com",
  projectId: "fir-project-4103c",
  storageBucket: "fir-project-4103c.firebasestorage.app",
  messagingSenderId: "803539570425",
  appId: "1:803539570425:web:67abdc29cf4fb754499c28",
  measurementId: "G-5PPBK2MHXV"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lấy div chứa sản phẩm
const productsContainer = document.getElementById('products');

// Gọi dữ liệu từ Firestore
async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    productsContainer.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price} VND</p>
      </div>
    `;
  });
}

// Gọi hàm để hiển thị sản phẩm
fetchProducts();
