import axios from "axios";

const AddProduct = () => {

  const styles = {
    'color': 'hsl(0, 0%, 20%)',
  }
  const topMargin = {
    'margin-top': '75px',
  }

  function handleAddProduct(){

    const newProduct = {
      "prodId": document.getElementById("prodId").value,
      "prodName": document.getElementById("prodName").value,
      "prodPrice": document.getElementById("prodPrice").value,
      "prodCat": document.getElementById("prodCat").value,
      "available": document.getElementById("available").value,
    }

    axios.post(`http://localhost:8080/products/add`, newProduct)
    .then(response => alert(response.data))
    .catch(error => console.log(error))

    document.getElementById("prodId").value = "";
    document.getElementById("prodName").value = "";
    document.getElementById("prodPrice").value = "";

  }

  return(

    <div style={topMargin}>
      <input type="number" id="prodId" placeholder="ID" /><br />
      <input type="text" id="prodName" placeholder="Name" /><br />
      <input type="number" id="prodPrice" placeholder="Price" /><br />
      <input type="text" id="prodCat" placeholder="Category" /><br />
      <input type="text" id="available" placeholder="Availability" /><br />
      <button onClick={handleAddProduct} style={styles}>add</button>
    </div>

  );

}

export default AddProduct
