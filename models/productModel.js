const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlenght: 50,
    },
    sizes: {
      type: [String],
      enum: ["S", "M", "X", "XL"],
    },
    colors: {
      type: [String],
      enum: ["rojo", "verde", "amarillo", "azul", "blanco", "negro"],
    },
    brand: {
      type: String,
      trim: true,
      maxlenght: 15,
      default: "Sin marca",
    },
  },
  {
    timestamps: true, // Agrega createdAt y updateAt automáticamente
  }
);

// Crea un modelo llamado 'Product', basado en el esquema anterior. Esto conecta el nombre
// del modelo con una colección en MongoDB llamada 'product'
const product = mongoose.model("Product", productSchema, "products");
// mongoose.model("<Nombre del modelo>", <Esquema>, <Nombre de colección>);

// Exporta el modelo para poder usarlo en tus controladores
module.exports = product;

/** Propiedades comunes de validación:

required: true - Campo obligatorio
unique: true - Valor único
trim: true - Elimina espacios
lowercase: true - Convierte a minúsculas
min/max - Valores mínimo/máximo
enum: [...] - Lista de valores permitidos
default: valor - Valor por defecto
match: /regex/ - Validación con expresión regular */
