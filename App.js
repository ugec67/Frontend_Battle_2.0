import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  const [theme, setTheme] = useState('light'); // State for theme (light/dark)
  const [loading, setLoading] = useState(true); // State for loader

  // Effect to apply theme class to HTML body and handle initial loading
  useEffect(() => {
    // Set a timeout to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader displays for 1.5 seconds

    // Apply theme class to document body
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // If loading, display the loader component
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-pink-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <HeroSection />
        <ProductSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

// Loader Component
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-pink-50 dark:bg-gray-900 z-50 transition-colors duration-300">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      <style>{`
        .loader {
          border-top-color: #F8BBD0; /* Baby pink loader */
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }

        @-webkit-keyframes spinner {
          0% { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spinner {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Navbar Component
const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className="bg-pink-100 dark:bg-gray-800 shadow-lg sticky top-0 z-40 transition-colors duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-700 dark:text-pink-400">
          Cosmetics Co.
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
          >
            Contact
          </button>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-100 dark:bg-gray-800 pb-4">
          <button
            onClick={() => scrollToSection('home')}
            className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 w-full text-left"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 w-full text-left"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 w-full text-left"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 w-full text-left"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

// Theme Toggle Component
const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-pink-200 dark:bg-gray-700 text-pink-700 dark:text-gray-300 focus:outline-none transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.459 4.591A1 1 0 0115 15.5V17a1 1 0 11-2 0v-1.5a1 1 0 01.327-.728l.222-.222zM8 2a1 1 0 00-1 1v1a1 1 0 102 0V3a1 1 0 00-1-1zm-.459 4.591A1 1 0 015 5.5V4a1 1 0 112 0v1.5a1 1 0 01-.327.728l-.222.222zM8 18a1 1 0 01-1 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-.459-4.591A1 1 0 005 15.5V17a1 1 0 102 0v-1.5a1 1 0 00-.327-.728l-.222-.222z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
};

// Flower SVG Pattern (Repeated)
const FlowerPattern = ({ opacity = 0.1 }) => (
  <svg className="absolute inset-0 w-full h-full" style={{zIndex: -1}}>
    <defs>
      <pattern id="flower-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="25" cy="25" r="5" fill="#F48FB1" /> {/* Center */}
        <circle cx="20" cy="15" r="3" fill="#F06292" /> {/* Petal 1 */}
        <circle cx="30" cy="15" r="3" fill="#F06292" /> {/* Petal 2 */}
        <circle cx="15" cy="25" r="3" fill="#F06292" /> {/* Petal 3 */}
        <circle cx="35" cy="25" r="3" fill="#F06292" /> {/* Petal 4 */}
        <circle cx="20" cy="35" r="3" fill="#F06292" /> {/* Petal 5 */}
        <circle cx="30" cy="35" r="3" fill="#F06292" /> {/* Petal 6 */}
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#flower-pattern)" opacity={opacity} /> {/* Light opacity */}
  </svg>
);


// Hero Section Component
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-pink-200 to-pink-300 dark:from-pink-900 dark:to-purple-900 h-screen flex items-center justify-center text-center overflow-hidden rounded-bl-3xl rounded-br-3xl shadow-xl transition-colors duration-300"
    >
      <FlowerPattern /> {/* Added flower pattern */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img
          src="https://placehold.co/1920x1080/FFE4E6/E0BBE4?text=Soft+Glam+Makeup"
          alt="Beauty Products Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/1920x1080/E9D5FF/6B21A8?text=Placeholder";
          }}
        />
      </div>
      <div className="z-10 p-8 rounded-2xl bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm shadow-2xl max-w-3xl mx-auto transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-700 dark:text-pink-300 mb-6 leading-tight animate-fade-in-down">
          Unleash Your Inner Radiance
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Discover a world of exquisite cosmetics designed to nourish, enhance,
          and celebrate your unique beauty.
        </p>
        <button className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700">
          Shop Now
        </button>
      </div>
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

// Product Quick View Modal Component
const ProductQuickViewModal = ({ product, currencyConverter, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-3xl p-8 max-w-2xl w-full relative transform transition-all duration-300 scale-95 opacity-0 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors duration-200"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x400/E9D5FF/6B21A8?text=Placeholder";
              }}
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-pink-700 dark:text-pink-300 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-lg mb-4">
              {product.description}
            </p>
            <p className="text-4xl font-extrabold text-pink-600 dark:text-pink-400 mb-6">
              {currencyConverter(product.basePrice)}
            </p>
            <button className="w-full px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};


// Product Section Component
const ProductSection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency
  const [showQuickView, setShowQuickView] = useState(false); // State for modal visibility
  const [currentProduct, setCurrentProduct] = useState(null); // State for product in modal

  // Dummy product data with base price in USD and more varied images
  const baseProducts = [
    {
      id: 1,
      name: 'Radiant Glow Foundation',
      basePrice: 34.99,
      image: 'https://placehold.co/400x400/FFD1DC/333?text=Foundation+Bottle',
      description: 'Achieve a flawless, luminous complexion with our long-lasting formula.',
    },
    {
      id: 2,
      name: 'Velvet Matte Lipstick',
      basePrice: 19.50,
      image: 'https://placehold.co/400x400/FFC0CB/555?text=Pink+Matte+Lipstick',
      description: 'Experience intense, bold color with a comfortable, non-drying matte finish.',
    },
    {
      id: 3,
      name: 'Hydrating Facial Serum',
      basePrice: 49.00,
      image: 'https://placehold.co/400x400/ADD8E6/333?text=Serum+Dropper',
      description: 'Deeply moisturize and rejuvenate your skin, promoting a healthy, radiant glow.',
    },
    {
      id: 4,
      name: 'Volumizing Mascara',
      basePrice: 22.00,
      image: 'https://placehold.co/400x400/DDA0DD/333?text=Black+Mascara',
      description: 'Instantly add dramatic length and volume to lashes without clumps or smudges.',
    },
    {
      id: 5,
      name: 'Eyeshadow Palette',
      basePrice: 39.99,
      image: 'https://placehold.co/400x400/C8A2C8/333?text=Colorful+Palette',
      description: 'A versatile collection of vibrant and blendable shades for endless eye looks.',
    },
    {
      id: 6,
      name: 'Deluxe Brush Set',
      basePrice: 59.00,
      image: 'https://placehold.co/400x400/E0BBE4/333?text=Makeup+Brushes',
      description: 'Essential tools for a professional application, crafted with soft, synthetic bristles.',
    },
  ];

  // Hardcoded exchange rates relative to USD (for demonstration)
  const exchangeRates = {
    USD: 1.0,
    EUR: 0.92, // 1 USD = 0.92 EUR
    GBP: 0.79, // 1 USD = 0.79 GBP
    JPY: 158.00, // 1 USD = 158 JPY
    INR: 83.50, // 1 USD = 83.50 INR
    CAD: 1.37, // 1 USD = 1.37 CAD
    AUD: 1.50, // 1 USD = 1.50 AUD
  };

  // Function to convert price based on selected currency
  const convertPrice = (priceUSD) => {
    const rate = exchangeRates[selectedCurrency] || 1.0; // Fallback to 1.0 if currency not found
    const converted = (priceUSD * rate).toFixed(2);
    let symbol = '$'; // Default symbol

    switch (selectedCurrency) {
      case 'EUR':
        symbol = '€';
        break;
      case 'GBP':
        symbol = '£';
        break;
      case 'JPY':
        symbol = '¥';
        // For JPY, typically no decimal places are used
        return `¥${(priceUSD * rate).toFixed(0)}`;
      case 'INR':
        symbol = '₹';
        break;
      case 'CAD':
        symbol = 'C$';
        break;
      case 'AUD':
        symbol = 'A$';
        break;
      default:
        symbol = '$';
    }
    return `${symbol}${converted}`;
  };

  // Function to open quick view modal
  const openQuickView = (product) => {
    setCurrentProduct(product);
    setShowQuickView(true);
  };

  // Function to close quick view modal
  const closeQuickView = () => {
    setShowQuickView(false);
    setCurrentProduct(null);
  };

  return (
    <section id="products" className="relative py-20 px-4 bg-pink-50 dark:bg-gray-800 transition-colors duration-300 rounded-tl-3xl rounded-tr-3xl shadow-inner-xl mt-8">
      <FlowerPattern /> {/* Added flower pattern */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-700 dark:text-pink-400 mb-6">
          Our Bestsellers
        </h2>

        {/* Currency Selector */}
        <div className="flex justify-center mb-10">
          <label htmlFor="currency-select" className="text-lg text-gray-700 dark:text-gray-200 mr-3">
            Select Currency:
          </label>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="p-2 rounded-lg border border-pink-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="AUD">AUD - Australian Dollar</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {baseProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-pink-200 dark:border-gray-600"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x400/E9D5FF/6B21A8?text=Placeholder";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-base">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-600">
                  <span className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4 sm:mb-0">
                    {convertPrice(product.basePrice)}
                  </span>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                    <button
                      onClick={() => openQuickView(product)}
                      className="px-4 py-2 bg-purple-500 text-white font-medium rounded-full shadow-md hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-700 text-sm w-full sm:w-auto"
                    >
                      Quick View
                    </button>
                    <button className="px-6 py-3 bg-pink-500 text-white font-medium rounded-full shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700 w-full sm:w-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          *Currency conversion rates are for demonstration purposes only and may not reflect real-time exchange rates.
          For accurate, real-time conversion across all countries, an external currency API would be required.
        </p>
      </div>

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={currentProduct}
        currencyConverter={convertPrice}
        onClose={closeQuickView}
      />
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Absolutely love their products! My skin has never looked better. The Radiant Glow Foundation is a game-changer.",
      author: "Sarah J.",
      rating: 5,
      avatar: "https://placehold.co/100x100/FFC0CB/800080?text=SJ"
    },
    {
      id: 2,
      quote: "Fantastic quality and beautiful packaging. The Velvet Matte Lipstick lasts all day without drying out my lips.",
      author: "Emily R.",
      rating: 5,
      avatar: "https://placehold.co/100x100/800080/FFC0CB?text=ER"
    },
    {
      id: 3,
      quote: "Their customer service is amazing, and the Hydrating Facial Serum feels luxurious. Highly recommend!",
      author: "Jessica L.",
      rating: 4,
      avatar: "https://placehold.co/100x100/FFC0CB/800080?text=JL"
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 px-4 bg-pink-100 dark:bg-gray-900 transition-colors duration-300">
      <FlowerPattern /> {/* Added flower pattern */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-700 dark:text-pink-400 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-pink-200 dark:border-gray-600 text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-pink-300 dark:ring-pink-600"
              />
              <p className="text-lg italic text-gray-700 dark:text-gray-200 mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.542 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.787.565-1.842-.197-1.542-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-pink-50 dark:bg-gray-900 transition-colors duration-300">
      <FlowerPattern /> {/* Added flower pattern */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://placehold.co/600x400/FFE4E6/800080?text=Ethical+Sourcing"
            alt="Our Story"
            className="w-full h-auto rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400/E9D5FF/6B21A8?text=Placeholder";
            }}
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-pink-700 dark:text-pink-400 mb-6">
            Our Story & Philosophy
            </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
            At Cosmetics Co., we believe in the power of beauty to inspire
            confidence and self-expression. Founded with a passion for
            high-quality ingredients and ethical practices, we strive to create
            products that not only enhance your natural features but also care
            for your skin.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Our commitment extends beyond beauty; we are dedicated to
            sustainability, cruelty-free testing, and transparency in every
            step of our production. Join us on a journey to a more beautiful,
            conscious you.
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 px-4 bg-pink-100 dark:bg-gray-800 transition-colors duration-300 rounded-bl-3xl rounded-br-3xl shadow-inner-xl">
      <FlowerPattern /> {/* Added flower pattern */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://placehold.co/600x400/FFC0CB/800080?text=Connect+With+Us"
            alt="Contact Us"
            className="w-full h-auto rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400/E9D5FF/6B21A8?text=Placeholder";
            }}
          />
        </div>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-2xl border border-pink-200 dark:border-gray-600 lg:w-1/2">
          <h2 className="text-4xl font-bold text-center text-pink-700 dark:text-pink-400 mb-12">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-pink-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 bg-pink-50 dark:bg-gray-600 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-pink-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 bg-pink-50 dark:bg-gray-600 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 border border-pink-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 bg-pink-50 dark:bg-gray-600 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8 px-4 text-center rounded-tl-3xl rounded-tr-3xl shadow-2xl mt-8 transition-colors duration-300">
      <div className="container mx-auto">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Cosmetics Co. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App;
