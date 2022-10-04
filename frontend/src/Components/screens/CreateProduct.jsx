import React from "react";

const CreateProduct = () => {
  const handleSubmit = () => {
    console.log("hello");
  };
  return (
    <div>
      <section className="section">
        <div class="section-header">
          <h1>Create Product</h1>
          <div class="section-header-breadcrumb"></div>
        </div>
      </section>
      <section>
        <div class="card-body">
          <div class="form-group">
            <label>Product Name</label>
            <input name="productName" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Brand</label>
            <input name="brand" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input name="price" type="number" class="form-control" />
          </div>

          <div class="form-group">
            <label>Category</label>
            <select name="category" class="form-control">
              <option value="category 1">Option 1</option>
              <option value="category 2">Option 2</option>
              <option value="category 3">Option 3</option>
            </select>
          </div>
          <div class="form-group">
            <label>Sub Category</label>
            <select
              class="form-control"
              multiple=""
              data-height="100%"
              style={{ height: "100%" }}
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Image</label>
            <input type="file" class="form-control" />
          </div>
          <button class="btn btn-primary">Create Product</button>
        </div>
      </section>
    </div>
  );
};

export default CreateProduct;
