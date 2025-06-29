// Sample product data - In a real application, this would come from your backend API

export const allProducts = [
  {
    id: 1,
    name: "Frozen Sweet Corn",
    category: "vegetables",
    shortDescription: "Premium quality sweet corn kernels, flash-frozen to preserve sweetness and nutrients.",
    description:
      "Our frozen sweet corn is carefully selected from the finest farms and flash-frozen within hours of harvest to lock in the natural sweetness and nutritional value. Each kernel is perfectly preserved, making it ideal for soups, salads, side dishes, and more. Rich in fiber, vitamins, and antioxidants, our sweet corn brings farm-fresh taste to your table year-round.",
    image: "images/sweetCorn.jpg?height=300&width=400",
    highlights: [
      "Flash-frozen within hours of harvest",
      "No artificial preservatives",
      "Rich in fiber and vitamins",
      "Perfect for multiple cooking methods",
    ],
    nutrition: {
      servingSize: "1 cup (154g)",
      calories: "132",
      totalFat: "2.1g",
      sodium: "8mg",
      totalCarbs: "29g",
      protein: "5g",
    },
    storage: {
      instructions: "Keep frozen at 0°F (-18°C) or below. Do not refreeze once thawed.",
      shelfLife: "12 months from production date when stored properly",
      usageTips: [
        "Can be cooked directly from frozen",
        "Perfect for stir-fries, soups, and casseroles",
        "Thaw in refrigerator for salads",
        "Steam for 3-5 minutes for best texture",
      ],
    },
  },
  {
    id: 2,
    name: "Frozen Mixed Vegetables",
    category: "mixed",
    shortDescription: "A colorful blend of premium vegetables including carrots, peas, corn, and green beans.",
    description:
      "Our frozen mixed vegetables combine the best of nature's bounty in one convenient package. This carefully crafted blend includes tender carrots, sweet peas, crisp corn kernels, and fresh green beans, all flash-frozen at peak ripeness. Perfect for busy families who want nutritious, delicious vegetables without the prep work.",
    image: "images/mixVeg.jpg?height=300&width=400",
    highlights: [
      "Four premium vegetables in one package",
      "Flash-frozen for maximum nutrition",
      "Ready to cook in minutes",
      "No washing or chopping required",
    ],
    nutrition: {
      servingSize: "1 cup (134g)",
      calories: "54",
      totalFat: "0.1g",
      sodium: "38mg",
      totalCarbs: "12g",
      protein: "2.8g",
    },
    storage: {
      instructions: "Store in freezer at 0°F (-18°C) or below. Use within recommended timeframe.",
      shelfLife: "18 months from production date",
      usageTips: [
        "Add directly to soups and stews",
        "Steam for 4-6 minutes as a side dish",
        "Great for fried rice and pasta dishes",
        "Perfect for meal prep",
      ],
    },
  },
  {
    id: 3,
    name: "Frozen Green Peas",
    category: "vegetables",
    shortDescription: "Tender, sweet green peas picked at peak freshness and flash-frozen for optimal taste.",
    description:
      "Our frozen green peas are harvested at the perfect moment when they're at their sweetest and most tender. Flash-frozen immediately after picking, these peas retain their bright green color, sweet flavor, and nutritional benefits. They're an excellent source of protein, fiber, and essential vitamins, making them a healthy addition to any meal.",
    image: "images/peas.jpg?height=300&width=400",
    highlights: [
      "Picked at peak sweetness",
      "High in protein and fiber",
      "Bright green color retained",
      "Versatile cooking ingredient",
    ],
    nutrition: {
      servingSize: "1 cup (145g)",
      calories: "62",
      totalFat: "0.2g",
      sodium: "4mg",
      totalCarbs: "11g",
      protein: "4.1g",
    },
    storage: {
      instructions: "Keep frozen at 0°F (-18°C). Do not thaw before cooking for best results.",
      shelfLife: "12 months when stored properly",
      usageTips: [
        "Cook from frozen for best texture",
        "Perfect for risottos and pasta",
        "Great in Indian curries",
        "Steam for 2-3 minutes only",
      ],
    },
  },
  {
    id: 4,
    name: "Frozen Mixed Berries",
    category: "fruits",
    shortDescription:
      "A delicious mix of strawberries, blueberries, and raspberries, perfect for smoothies and desserts.",
    description:
      "Our premium frozen mixed berries combine three of nature's most antioxidant-rich fruits: plump strawberries, juicy blueberries, and tart raspberries. Each berry is individually quick-frozen to preserve its shape, flavor, and nutritional content. Perfect for smoothies, baking, or enjoying as a healthy snack straight from the freezer.",
    image: "/placeholder.svg?height=300&width=400",
    highlights: [
      "Three premium berry varieties",
      "Individually quick-frozen",
      "High in antioxidants",
      "Perfect for smoothies and baking",
    ],
    nutrition: {
      servingSize: "1 cup (140g)",
      calories: "70",
      totalFat: "0.6g",
      sodium: "2mg",
      totalCarbs: "17g",
      protein: "1g",
    },
    storage: {
      instructions: "Store in freezer at 0°F (-18°C) or below. Can be used directly from frozen.",
      shelfLife: "12 months for best quality",
      usageTips: [
        "Perfect for smoothies and shakes",
        "Great for muffins and pancakes",
        "Thaw for fruit salads",
        "Use in yogurt parfaits",
      ],
    },
  },
  {
    id: 5,
    name: "Frozen Spinach",
    category: "vegetables",
    shortDescription: "Nutrient-rich spinach leaves, chopped and frozen to preserve vitamins and minerals.",
    description:
      "Our frozen spinach is made from fresh, tender spinach leaves that are carefully washed, blanched, and chopped before flash-freezing. This process preserves the deep green color and concentrates the nutrients, making it even more nutritious than fresh spinach. Rich in iron, vitamins A and K, and folate, it's perfect for adding nutrition to any dish.",
    image: "/placeholder.svg?height=300&width=400",
    highlights: [
      "Concentrated nutrition",
      "Pre-washed and chopped",
      "Rich in iron and vitamins",
      "Convenient and versatile",
    ],
    nutrition: {
      servingSize: "1 cup (190g)",
      calories: "41",
      totalFat: "0.5g",
      sodium: "126mg",
      totalCarbs: "7g",
      protein: "5g",
    },
    storage: {
      instructions: "Keep frozen until ready to use. Thaw and drain excess water before cooking.",
      shelfLife: "12 months from production date",
      usageTips: [
        "Squeeze out excess water after thawing",
        "Perfect for quiches and lasagnas",
        "Great in smoothies for added nutrition",
        "Add to soups and curries",
      ],
    },
  },
  {
    id: 6,
    name: "Frozen Broccoli Florets",
    category: "vegetables",
    shortDescription: "Fresh broccoli florets cut to perfect size and flash-frozen for convenience and nutrition.",
    description:
      "Our frozen broccoli florets are cut from fresh, premium broccoli heads and flash-frozen to preserve their vibrant green color, crisp texture, and exceptional nutritional value. Rich in vitamin C, fiber, and antioxidants, these convenient florets are perfect for stir-fries, steaming, or adding to casseroles and soups.",
    image: "/placeholder.svg?height=300&width=400",
    highlights: [
      "Cut to perfect serving size",
      "Vibrant green color preserved",
      "High in vitamin C and fiber",
      "Ready to cook convenience",
    ],
    nutrition: {
      servingSize: "1 cup (184g)",
      calories: "52",
      totalFat: "0.6g",
      sodium: "64mg",
      totalCarbs: "10g",
      protein: "5.7g",
    },
    storage: {
      instructions: "Store frozen at 0°F (-18°C). Cook directly from frozen for best results.",
      shelfLife: "12 months when properly stored",
      usageTips: [
        "Steam for 4-5 minutes from frozen",
        "Perfect for stir-fries",
        "Great in cheese sauce",
        "Add to pasta dishes",
      ],
    },
  },
  {
    id: 7,
    name: "Frozen Cauliflower Rice",
    category: "vegetables",
    shortDescription: "Finely chopped cauliflower that's a perfect low-carb alternative to traditional rice.",
    description:
      "Our frozen cauliflower rice is made from fresh cauliflower heads that are carefully processed into rice-sized pieces and flash-frozen. This innovative product offers a nutritious, low-carb alternative to traditional rice while providing the same versatility. It's perfect for health-conscious consumers following keto, paleo, or low-carb diets.",
    image: "/placeholder.svg?height=300&width=400",
    highlights: [
      "Low-carb rice alternative",
      "Keto and paleo friendly",
      "Quick cooking time",
      "Neutral flavor profile",
    ],
    nutrition: {
      servingSize: "1 cup (107g)",
      calories: "20",
      totalFat: "0.2g",
      sodium: "19mg",
      totalCarbs: "4g",
      protein: "2g",
    },
    storage: {
      instructions: "Keep frozen until ready to use. Can be cooked directly from frozen.",
      shelfLife: "12 months for optimal quality",
      usageTips: [
        "Sauté for 3-4 minutes from frozen",
        "Perfect for fried rice dishes",
        "Great as a side dish",
        "Use in stuffed peppers",
      ],
    },
  },
  {
    id: 8,
    name: "Frozen Mango Chunks",
    category: "fruits",
    shortDescription: "Sweet, tropical mango pieces frozen at peak ripeness for year-round enjoyment.",
    description:
      "Our frozen mango chunks are made from perfectly ripe, sweet mangoes that are peeled, diced, and flash-frozen to capture their tropical flavor and smooth texture. These golden chunks are perfect for smoothies, desserts, or enjoying as a refreshing frozen treat. Rich in vitamin C, vitamin A, and dietary fiber, they bring tropical sunshine to your table any time of year.",
    image: "/placeholder.svg?height=300&width=400",
    highlights: [
      "Frozen at peak ripeness",
      "Sweet tropical flavor",
      "Rich in vitamins A and C",
      "Perfect for smoothies",
    ],
    nutrition: {
      servingSize: "1 cup (165g)",
      calories: "99",
      totalFat: "0.6g",
      sodium: "3mg",
      totalCarbs: "25g",
      protein: "1.4g",
    },
    storage: {
      instructions: "Store in freezer at 0°F (-18°C) or below. Use directly from frozen or thaw as needed.",
      shelfLife: "12 months for best flavor",
      usageTips: [
        "Perfect for tropical smoothies",
        "Great in fruit salads when thawed",
        "Use in mango lassi",
        "Perfect for dessert toppings",
      ],
    },
  },
]

// Featured products for homepage (subset of all products)
export const featuredProducts = allProducts.slice(0, 3)

// Product categories
export const productCategories = [
  { id: "all", name: "All Products" },
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "mixed", name: "Mixed" },
]
