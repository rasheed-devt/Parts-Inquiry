<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCHk-BtTBB8nnj518St0s6Da-VyD-ZbYd4",
    authDomain: "fortetl-parts-inquiry.firebaseapp.com",
    projectId: "fortetl-parts-inquiry",
    storageBucket: "fortetl-parts-inquiry.firebasestorage.app",
    messagingSenderId: "896233626148",
    appId: "1:896233626148:web:815375a07b55a6d2ecd6b1",
    measurementId: "G-C8RS847F08"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>