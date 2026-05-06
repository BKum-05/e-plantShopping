import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from '../store/CartSlice'

const plants = [
  {
    id: 'aromatic-1',
    category: 'Aromatic Plants',
    name: 'Lavender Bliss',
    price: 14,
    image:
      'https://images.unsplash.com/photo-1595303526913-c7037797ebe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aromatic-2',
    category: 'Aromatic Plants',
    name: 'Mint Glow',
    price: 9,
    image:
      'https://images.unsplash.com/photo-1628556270448-4d4e4148e4b3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aromatic-3',
    category: 'Aromatic Plants',
    name: 'Rosemary Classic',
    price: 11,
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aromatic-4',
    category: 'Aromatic Plants',
    name: 'Basil Breeze',
    price: 8,
    image:
      'https://images.unsplash.com/photo-1615484477201-9ea4f57d29f3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aromatic-5',
    category: 'Aromatic Plants',
    name: 'Lemon Thyme',
    price: 10,
    image:
      'https://images.unsplash.com/photo-1511993226957-cd166aba52d8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aromatic-6',
    category: 'Aromatic Plants',
    name: 'Scented Geranium',
    price: 13,
    image:
      'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'medicinal-1',
    category: 'Medicinal Plants',
    name: 'Aloe Vera',
    price: 15,
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'medicinal-2',
    category: 'Medicinal Plants',
    name: 'Snake Plant',
    price: 18,
    image:
      'https://images.unsplash.com/photo-1593691509543-c55fb32e5d3a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'medicinal-3',
    category: 'Medicinal Plants',
    name: 'Peace Lily',
    price: 20,
    image:
      'https://images.unsplash.com/photo-1614594975521-1f3ea8bade9c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'medicinal-4',
    category: 'Medicinal Plants',
    name: 'Chamomile Pot',
    price: 12,
    image:
      'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'medicinal-5',
    category: 'Medicinal Plants',
    name: 'Calendula Bloom',
    price: 16,
    image:
      'https://images.unsplash.com/photo-1477554193778-9562c28588c0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'medicinal-6',
    category: 'Medicinal Plants',
    name: 'Holy Basil',
    price: 14,
    image:
      'https://images.unsplash.com/photo-1471943038886-87c772c31367?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-1',
    category: 'Air Purifying Plants',
    name: 'ZZ Plant',
    price: 22,
    image:
      'https://images.unsplash.com/photo-1611211232932-da3113c2f599?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-2',
    category: 'Air Purifying Plants',
    name: 'Areca Palm',
    price: 24,
    image:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-3',
    category: 'Air Purifying Plants',
    name: 'Spider Plant',
    price: 13,
    image:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-4',
    category: 'Air Purifying Plants',
    name: 'Rubber Plant',
    price: 19,
    image:
      'https://images.unsplash.com/photo-1618237785562-0c9f8f6e53b5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-5',
    category: 'Air Purifying Plants',
    name: 'Boston Fern',
    price: 17,
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'air-6',
    category: 'Air Purifying Plants',
    name: 'Chinese Evergreen',
    price: 21,
    image:
      'https://images.unsplash.com/photo-1598887142487-10460dccbb16?auto=format&fit=crop&w=600&q=80',
  },
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const groupedPlants = plants.reduce((groups, plant) => {
    if (!groups[plant.category]) {
      groups[plant.category] = []
    }
    groups[plant.category].push(plant)
    return groups
  }, {})

  return (
    <section className="plants-page" aria-label="Product listing page">
      <h1>Shop Houseplants</h1>
      {Object.entries(groupedPlants).map(([category, categoryPlants]) => (
        <div key={category} className="plant-category">
          <h2>{category}</h2>
          <div className="plant-grid">
            {categoryPlants.map((plant) => {
              const isAdded = Boolean(cartItems[plant.id])

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <button
                    type="button"
                    disabled={isAdded}
                    className="add-button"
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductList
