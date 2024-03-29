import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { notify } from "../../../utils/HelperFunction";
import Categories from "../categories/Categories";

const AddProduct = (props) => {

    //////form Data
    const [productName, setProductName] = useState("");
    const [productCode, setProductCode] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productReduction, setProductReduction] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [productionDate, setProductionDate] = useState("");
    const [productDescription, setProductDescription] = useState("");
    //const [inStock, setInStock] = useState(false);
    const [selectedCategory,setSelectedCategory] = useState()
    //////
    const [allCategories, setAllCategories] = useState([]);
   // const [image, setProductImage] = useState("");
    const [quantity, setProductQuantity] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
      console.log("event.target : ",event.target.files[0])
      setSelectedFile(event.target.files[0]);
    }

    useEffect(()=> {
      axios.get("/products/cat").then((res) => {
        setAllCategories(res.data);
      });
    },[])

    
      useEffect(()=> {
        if(selectedCategory)
        {
          console.log("selected category : ",selectedCategory.label)
        }
        
      },[selectedCategory])

      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", productName);
        formData.append("code", productCode);
        formData.append("description", productDescription);
        formData.append("price", productPrice);
        formData.append("reduction", productReduction);
        formData.append("quantity", quantity);
        //formData.append("inStock", inStock);
        formData.append("productionDate", productionDate);
        formData.append("expirationDate", expirationDate);
        formData.append("category", selectedCategory);
        //formData.append("category", category);
        if(selectedFile)
        {
          formData.append("ProductImage", selectedFile);
        }
        console.log("selected file : ",selectedFile)
        console.log("image: ", formData.get("ProductImage"))
        console.log("formdata get : ",formData.get("name"),formData.get("price"))
        console.log("formdata get : ",formData.get("name"),formData.get("quantity"))
        

          axios
          .post("http://localhost:5002/prod", formData)
          .then(function (res) {
            
            
              notify("Product was created successfully!", toast, "success");
            console.log(res.data);
            window.location.href = '/dashboard/products';
            
        })
      .catch((err) => {
        if({ message: "verify expiration date." }){
          notify("Expiration date must be superirur than product date ", toast, "error");
          console.log("verify expiration date.");
          console.log(expirationDate);
        }
        else{
            console.log(err);
            notify("error in add product !", toast, "error");
        }
      
               
      }); 
    
        
        
      };
    




    return (
      <>

     <div>
     <ToastContainer />
        
        <div className="main-wrapper">
        
         
          {/* main */}
          <main className="main-content-wrapper">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row mb-8">
                <div className="col-md-12">
                  <div className="d-md-flex justify-content-between align-items-center">
                    {/* page header */}
                    <div>
                      <h2>Add New Product</h2>
                    </div>
                    {/* button */}
                    <div> 
                        <Link to="/dashboard/products"><a className="btn btn-light">Back to Product</a> </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-8 col-12">
                    {/* card */}
                    <div className="card mb-6 card-lg">
                      {/* card body */}
                      <div className="card-body p-6 ">
                        <h4 className="mb-4 h5" style={{padding:"10px"}}>Product Information</h4>
                        <div className="row">
                          {/* input */}
                          <div className="mb-3 col-lg-6">
                            <label className="form-label">Product Name*</label>
                            <input
                            type="text"
                            className="form-control" 
                            placeholder="Product Name" 
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required />
                          </div>
                          
                          {/* input */}
                          <div className="mb-3 col-lg-6">
                            <label className="form-label">Code*</label>
                            <input 
                            type="number" 
                            className="form-control"
                            placeholder="Enter Product code" 
                            value={productCode}
                            onChange={(e) => setProductCode(e.target.value)}
                            required />
                          </div>
                        
                          {/* input */}
                          <div className="mb-3 col-lg-6">
                            <label className="form-label">Production Date*</label>
                            <input 
                            type="Date" 
                            className="form-control" 
                            placeholder="Enter production Date"
                            value={productionDate}
                            onChange={(e) => setProductionDate(e.target.value)}
                            required />
                          </div>
                          {/* input */}
                          <div className="mb-3 col-lg-6">
                            <label className="form-label">Expiration Date*</label>
                            <input 
                            type="Date" 
                            className="form-control" 
                            placeholder="Enter expiration Date"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            
                            required />
                          </div>
                          <div>
                            <div className="mb-3 col-lg-12 mt-5">
                              {/* heading */}
                              <h4 className="mb-3 h5">Product Images</h4>
                              <img 
                                className="image icon-shape icon-xxxl bg-light rounded-4"
                                value={selectedFile}
                                alt="Image" />
                              {/* input */}
                              <form  action="#" class="d-block dropzone border-dashed rounded-2 ">
                                      <div class="fallback">
                                      <input 
                                      name="file"
                                      type="file" 
                                      onChange={handleFileSelect}  
                                      />
                                      {/*onChange={(e) => setProductImage(e.target.value)}
                                      multiple/>*/}
                                      </div>
                              </form>
                            </div>
                          </div>
                          {/* input */}
                          <div className="mb-3 col-lg-12 mt-5">
                            <div class="mb-3 ">
                              <label class="form-label">Product Descriptions</label>
                                  <textarea
                                  class="form-control add" 
                                  id="editor"
                                    rows="3"
                                    value={productDescription}
                                    onChange={(e) => setProductDescription(e.target.value)}
                                      placeholder="Product Description"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    {/* card */}
                    <div className="card mb-6 card-lg">
                      {/* card body */}
                      <div className="card-body p-6">
                        {/* input 
                        <div className="form-check form-switch mb-4">
                          <input className="form-check-input"
                          type="checkbox"
                            role="switch"
                            id="flexSwitchStock"
                            checked={inStock}
                            onChange={(e) => setInStock(e.target.checked)}
                            defaultChecked />
                          <label className="form-check-label" htmlFor="flexSwitchStock">In Stock</label>
                        </div>
                        */}
                        <div>
                          {/* input */}
                          <div className="mb-3 ">
                            <label className="form-label">Product Category</label>
                            <select className="form-select" onChange={(event) => {setSelectedCategory(event.target.value)}}>
                              <option selected disabled>Product Category</option>
                            {allCategories.map((category, index) => {
                              return (
                                <option key={category._id} value={category._id}>{category.label}</option>
                              
                              )
                            })}
                              
                            </select>
                          </div>
                          
                          {/* input */}
                          <div className="mb-3">
                            <label 
                            className="form-label" 
                            id="productSKU"
                            >Quantity</label><br />

                            <input type="Number" 
                            className="form-control"
                            placeholder="Enter quantity of the product"
                            value={quantity}
                            onChange={(e) => setProductQuantity(e.target.value)}
                            required />

                            
                            {/* input */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card */}
                    <div className="card mb-6 card-lg">
                      {/* card body */}
                      <div className="card-body p-6">
                        <h4 className="mb-4 h5">Product Price</h4>
                        {/* input */}
                        <div className="mb-3">
                          <label className="form-label"> Price</label>
                          <input 
                          type="number"
                          className="form-control" 
                          value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                          placeholder="0.00 DT" />
                        </div>
                        {/* input */}
                        <div className="mb-3">
                          <label className="form-label">Reduction Price</label>
                          <input 
                          type="number" 
                          className="form-control"
                          value={productReduction}
                            onChange={(e) => setProductReduction(e.target.value)}
                          placeholder="0.00 DT" />
                        </div>
                      </div>
                    </div>
                  
                    {/* button */}
                    <div className="d-grid">
                    
                      <a onClick={handleSubmit} className="btn btn-primary">
                      Create Product
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>


      </>
    );
  };
  export default AddProduct;
  