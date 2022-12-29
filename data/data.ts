const data = {
  "types": [
    {
      "_id": "50",
      "name": "Lungo",
      "image": require('../assets/coffee-m.png'),
      "sizes": [
        "2",
        "3",
        "4"
      ],
      "extras": [
        "9"
      ]
    },
    {
      "_id": "51",
      "name": "Cappuccino",
      "image": require('../assets/cappuccino.png'),
      "sizes": [
        "2",
        "3",
        "4"
      ],
      "extras": [
        "9"
      ]
    },
    {
      "_id": "52",
      "name": "Espresso",
      "image": require('../assets/espresso.png'),
      "sizes": [
        "2",
        "3",
        "4"
      ],
      "extras": [
        "9"
      ]
    },
    {
      "_id": "53",
      "name": "Americano",
      "image": require('../assets/coffee-m.png'),
      "sizes": [
        "2",
        "3",
        "4"
      ],
      "extras": [
        "9"
      ]
    },
    {
      "_id": "54",
      "name": "Ristretto",
      "image": require('../assets/coffee-m.png'),
      "sizes": [
        "2",
        "3",
        "4"
      ],
      "extras": [
        "9"
      ]
    },
    {
      "_id": "55",
      "name": "Latte Machiatto",
      "image": require('../assets/coffee-m.png'),
      "sizes": [
        "2",
        "3",
        "4"
      ],
      "extras": [
        "9"
      ]
    }
  ],
  "sizes": [
    {
      "_id": 2,
      "name": "Small",
      "image": require('../assets/coffee-s.png'),
    },
    {
      "_id": 3,
      "name": "Medium",
      "image": require('../assets/coffee-m.png'),
    },
    {
      "_id": 4,
      "name": "Large",
      "image": require('../assets/coffee-l.png'),
    }
  ],
  "extras": [
    {
      "_id": 10,
      "name": "Milk",
      "image": require('../assets/milk.png'),
      "subselections": [
        {
          "_id": 30,
          "name": "Dairy"
        },
        {
          "_id": 31,
          "name": "Soy"
        },
        {
          "_id": 32,
          "name": "Oat"
        }
      ]
    },
    {
      "_id": 9,
      "name": "Select the amount of sugar",
      "image": require('../assets/coffee-m.png'),
      "subselections": [
        {
          "_id": 20,
          "name": "A lot"
        },
        {
          "_id": 21,
          "name": "Normal"
        }
      ]
    },

  ]
};

export default data;