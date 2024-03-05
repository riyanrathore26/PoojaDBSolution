import React, { useState } from 'react';

const AdminPage = () => {
  const [fileContainers, setFileContainers] = useState([{ id: 1, selectedImage: null }]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (event, containerId) => {
    const file = event.target.files[0];
    setFileContainers((prevContainers) =>
      prevContainers.map((container) =>
        container.id === containerId ? { ...container, selectedImage: file } : container
      )
    );
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    fileContainers.forEach((container) => {
      if (container.selectedImage) {
        formData.append('images', container.selectedImage);
      }
    });

    try {
      const response = await fetch('http://localhost:5000/add_product', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Data submitted successfully');
        // Clear form fields
        setName('');
        setPrice('');
        setDescription('');
        setFileContainers([{ id: 1, selectedImage: null }]);
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddContainer = () => {
    const newContainer = {
      id: fileContainers.length + 1,
      selectedImage: null,
    };
    setFileContainers([...fileContainers, newContainer]);
  };

  return (
    <>
      <h1>Add Information About Product</h1>
      <div>
        <div>
          {fileContainers.map((container) => (
            <div key={container.id}>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(event, container.id)}
              />
              {/* {container.selectedImage && (
                <div>
                  <h4>Selected Image:</h4>
                  <img
                    src={URL.createObjectURL(container.selectedImage)}
                    alt="Selected"
                  />
                </div>
              )} */}
            </div>
          ))}
          <button onClick={handleAddContainer}>Add Image</button>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
