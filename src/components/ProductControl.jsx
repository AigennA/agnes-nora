import { useState } from "react";

function ProductControl() {
  // Ürünleri tutan state (id, name, description, price)
  const [products, setProducts] = useState([
    { id: 1, name: "Ürün 1", description: "Açıklama 1", price: 100 },
    { id: 2, name: "Ürün 2", description: "Açıklama 2", price: 200 },
  ]);

  // Yeni ürün formu için state
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  // Form inputları değiştiğinde güncelle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Yeni ürün ekle
  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Lütfen isim ve fiyat girin");
      return;
    }
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { ...newProduct, id: newId, price: Number(newProduct.price) }]);
    setNewProduct({ name: "", description: "", price: "" }); // formu temizle
  };

  // Ürün sil
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Ürün açıklamasını düzenle (örnek: sadece açıklamayı değiştir)
  const updateDescription = (id, newDesc) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, description: newDesc } : p
      )
    );
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Product Control Panel</h2>

      {/* Yeni Ürün Formu */}
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid #ccc" }}>
        <h3>Add New Product</h3>
        <input
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          style={{ marginRight: 8, width: 80 }}
        />
        <input
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Ürün Listesi */}
      <div>
        {products.map(({ id, name, description, price }) => (
          <div
            key={id}
            style={{
              padding: 10,
              marginBottom: 10,
              border: "1px solid #ddd",
              borderRadius: 6,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <strong>{name}</strong> - ${price} <br />
              <EditableDescription
                description={description}
                onChange={(newDesc) => updateDescription(id, newDesc)}
              />
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => alert(`Buy ${name} clicked!`)}>Buy</button>
              <button onClick={() => deleteProduct(id)} style={{ color: "red" }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Açıklamayı düzenlenebilir yapmak için küçük bir component
function EditableDescription({ description, onChange }) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(description);

  const save = () => {
    onChange(text);
    setEditMode(false);
  };

  return editMode ? (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={2}
        style={{ width: "100%" }}
      />
      <button onClick={save} style={{ marginTop: 4 }}>
        Save
      </button>
    </div>
  ) : (
    <p onClick={() => setEditMode(true)} style={{ cursor: "pointer" }}>
      {description || <em>Click to add description</em>}
    </p>
  );
}

export default ProductControl;
