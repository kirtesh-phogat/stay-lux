document.querySelector(".nav-btn").addEventListener("click", () => {
  alert("Sign In feature coming soon ✨");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



let data = [
     {
      "id": 1,
      "name": "Hotel Regal Crescent",
      "price": "8531.24",
      "thumbnail": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxfHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 3.4,
      "location": "Noida",
      "description": "Located in Noida, this elegant hotel is the perfect place to stay. It offers with a unique atmosphere and provides an ideal setting for those who want to enjoy outdoor activities. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1650967123062-3de70b7bf331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw3OXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1679060489362-c730e42cc0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxOTl8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1445991842772-097fea258e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1601000785676-f9b0ade234d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMjV8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1536625737227-92a1fc042e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw4Mnx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1533794939052-03f5ea84373b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNzN8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1569369926169-9ee7fb80adeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyNjR8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 2,
      "name": "Hotel Bliss Luxeon",
      "price": "3017.74",
      "thumbnail": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyfHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 4.6,
      "location": "Mumbai",
      "description": "Located in Mumbai, this cozy hotel is the perfect place to stay. It offers with stunning views and provides an ideal setting for those who want to enjoy a relaxing spa day. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1592555059503-0a774cb8d477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMzF8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMzd8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1578681041175-9717c16b0d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMTB8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1580387128798-a5abad264ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyNzJ8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw2OHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1623718649591-311775a30c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw5MXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1580387128798-a5abad264ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyNzJ8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyOHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 3,
      "name": "Hotel Marina Nebula",
      "price": "2873.51",
      "thumbnail": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwzfHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 2.8,
      "location": "Mumbai",
      "description": "Located in Mumbai, this charming hotel is the perfect place to stay. It offers offering top-notch amenities and provides an ideal setting for those who want to experience thrilling adventures. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMjh8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwzNHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1508044594351-60a97e8ce53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyNDl8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw4MXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw5M3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1439130490301-25e322d88054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyN3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMDh8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1671683886944-6478e6c84cbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNjJ8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 4,
      "name": "Hotel Blissful Cascade",
      "price": "9765.25",
      "thumbnail": "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw0fHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 3.8,
      "location": "Delhi",
      "description": "Located in Delhi, this affordable hotel is the perfect place to stay. It offers offering exquisite dining and provides an ideal setting for those who want to explore the local attractions. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1576354302919-96748cb8299e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwzM3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1618130641110-4b1827e03f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyOTR8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1541435469116-8ce8ccc4ff85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMjF8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1578681041175-9717c16b0d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMTB8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1474690455603-a369ec1293f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw3Nnx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1602081115720-72e5b0a254b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxODV8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1569335468885-d7d1a41e570c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMzV8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 5,
      "name": "Hotel Haven Cascade",
      "price": "7049.34",
      "thumbnail": "https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw1fHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 3.5,
      "location": "Ahmedabad",
      "description": "Located in Ahmedabad, this affordable hotel is the perfect place to stay. It offers with a world-class spa and provides an ideal setting for those who want to enjoy outdoor activities. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1506812428898-fe5a708f5359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMDR8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1722900746638-869a1509f1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyODl8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw5N3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1445991842772-097fea258e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1559599238-308793637427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyOTV8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1479502806991-251c94be6b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNTF8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxN3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1564574685150-74a84d02d695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNTB8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 6,
      "name": "Hotel Bliss Zephyr",
      "price": "8222.63",
      "thumbnail": "https://images.unsplash.com/photo-1517840901100-8179e982acb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw2fHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 4.8,
      "location": "Jaipur",
      "description": "Located in Jaipur, this luxurious hotel is the perfect place to stay. It offers featuring a rooftop pool and provides an ideal setting for those who want to enjoy a relaxing spa day. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1711714956204-e1d84e4d8879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyNTJ8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw1fHxob3RlbHxlbnwwfHx8fDE3NTYzOTM1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMjl8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw0NXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1527986654082-0b5b3fef2632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw3MHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1488345979593-09db0f85545f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMDB8fGhvdGVsfGVufDB8fHx8MTc1NjM5MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw5MHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMTZ8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3NHww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 7,
      "name": "Hotel Sky Utopia",
      "price": "8371.84",
      "thumbnail": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw3fHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 4.2,
      "location": "Hyderabad",
      "description": "Located in Hyderabad, this beautiful hotel is the perfect place to stay. It offers perfect for family vacations and provides an ideal setting for those who want to attend exciting events. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1506059612708-99d6c258160e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyOXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMzd8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1569335468924-da9aa372cba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMTl8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw2OXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw2NXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw2Mnx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1518860308377-800f02d5498a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMTB8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1439130490301-25e322d88054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyN3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 8,
      "name": "Hotel Haven Yonder",
      "price": "7704.07",
      "thumbnail": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw4fHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 4.7,
      "location": "Pune",
      "description": "Located in Pune, this affordable hotel is the perfect place to stay. It offers with a unique atmosphere and provides an ideal setting for those who want to take a guided city tour. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNzZ8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw3N3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw1OHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1623718649591-311775a30c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw5MXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwzfHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1474690455603-a369ec1293f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw3Nnx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1551016043-06ec2173531b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw0OHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1556715371-bdb0d523c870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMDR8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4MHww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 9,
      "name": "Hotel Amber Quasar",
      "price": "3526.18",
      "thumbnail": "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw5fHxob3RlbHxlbnwwfHx8fDE3NTYzOTI4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 3.4,
      "location": "Pune",
      "description": "Located in Pune, this modern hotel is the perfect place to stay. It offers with stunning views and provides an ideal setting for those who want to experience thrilling adventures. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1652057295518-d2a109170821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyNTV8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw1M3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyOHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1445546857131-5fc39d1c51f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMjR8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw2M3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1631049780150-c197bf723954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyNzB8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwzOXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1650967123062-3de70b7bf331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw3OXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      "id": 10,
      "name": "Hotel Noble Glacier",
      "price": "1216.69",
      "thumbnail": "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "rating": 3.2,
      "location": "Noida",
      "description": "Located in Noida, this elegant hotel is the perfect place to stay. It offers perfect for family vacations and provides an ideal setting for those who want to shop at nearby boutiques. Whether you're here for business or leisure, this place is sure to exceed your expectations. The friendly staff, combined with world-class services, makes it a top choice for travelers.",
      "photos": [
        "https://images.unsplash.com/photo-1559741033-d85618ce7e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw5OXx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxMHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1541971875076-8f970d573be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwzMHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1679060489362-c730e42cc0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxOTl8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1692608582618-b7f6a06d5fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNzR8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHw1M3x8aG90ZWx8ZW58MHx8fHwxNzU2MzkyODExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1587870306141-4f19861e6c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwxNTZ8fGhvdGVsfGVufDB8fHx8MTc1NjM5MzU3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1529290130-4ca3753253ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTc3NzV8MHwxfHNlYXJjaHwyMHx8aG90ZWx8ZW58MHx8fHwxNzU2MzkzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
]

console.log(data)



const main = document.querySelector("#main");

function shortText(text, limit) {
  const words = text.split(" ");
  if (words.length <= limit) 
    return text;
  return words.slice(0, limit).join(" ") + "...";
}


for (let i=0; i<data.length; i++){

  const hotel = data[i]

// # main container #

  const content_box = document.createElement("div")
  content_box.classList.add("content")


  const container = document.createElement("div");
  container.classList.add("container")

//  # hotel name section #

  const heading = document.createElement("div");
  heading.classList.add("head")

  const title = document.createElement("h1");
  title.innerText = data[i].name
  title.classList.add("title")

  heading.append(title)


// # details section #


const details = document.createElement("div");
details.classList.add("details")


// # details > image section #


  const image = document.createElement("div");
  image.classList.add("image")
  const imge = document.createElement("img");
  imge.src = data[i].thumbnail
  imge.classList.add("imge")

  image.append(imge)


// # details > text section #


  const text = document.createElement("div");
  text.innerHTML = `
  <p> Description : ${shortText(hotel.description, 10)}</p>
  <p> Location : ${hotel.location}</p>
  <p> Rating : ${hotel.rating}</p>
  <p> Rs ${Math.ceil(hotel.price)}/-</p>
  <button class = "btn" >Book Hotel</button>`;
  text.classList.add("txt")





  details.append(image,text);
  container.append(heading,details)
  content_box.append(container)
  main.append(content_box)

}