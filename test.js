fetch("https://ryon-api-test-3.onrender.com/api/hello")
  .then(response => response.json())
  .then(data => {
    document.getElementById("message").textContent = data.message;
  })
  .catch(error => {
    document.getElementById("message").textContent = "通信エラー: " + error;
  });
