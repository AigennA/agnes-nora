import { useState } from "react";

function ProductControl() {
  // Produktlista (id, namn, beskrivning, pris)
  const [products, setProducts] = useState([
    { id: 1, name: "Produkt 1", description: "Beskrivning", price: 100 },
    { id: 2, name: "Produkt 2", description: "Beskrivning 2", price: 200 },
  ]);

  // Ny produktformulärsstatus
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  // Uppdatera när input ändras
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Lägg till ny produkt
  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Skriv namn och pris");
      return;
    }
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { ...newProduct, id: newId, price: Number(newProduct.price) }]);
    setNewProduct({ name: "", description: "", price: "" }); // rensa formuläret
  };

  // Ta bort produkt
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Uppdatera produktens beskrivning
  const updateDescription = (id, newDesc) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, description: newDesc } : p
      )
    );
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Produktkontrollpanel</h2>

      {/* Ny produktformulär */}
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid #ccc" }}>
        <h3>Lägg till ny produkt</h3>
        <input
          name="name"
          placeholder="Produktnamn"
          value={newProduct.name}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <input
          name="price"
          type="number"
          placeholder="Pris"
          value={newProduct.price}
          onChange={handleChange}
          style={{ marginRight: 8, width: 80 }}
        />
        <input
          name="description"
          placeholder="Beskrivning"
          value={newProduct.description}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <button onClick={addProduct}>Lägg till produkt</button>
      </div>

      {/* Produktlista */}
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
              <button onClick={() => alert(`Köp av ${name} klickad!`)}>Köp</button>
              <button onClick={() => deleteProduct(id)} style={{ color: "red" }}>
                Ta bort
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Gör beskrivningen redigerbar (liten komponent)
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
        Spara
      </button>
    </div>
  ) : (
    <p onClick={() => setEditMode(true)} style={{ cursor: "pointer" }}>
      {description || <em>Klicka för att lägga till beskrivning</em>}
    </p>
  );
}

export default ProductControl;
