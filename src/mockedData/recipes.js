const data = [
    {
        id: 1,
        title: 'Beef stew',
        description: 'Some dummy text...',
        category: {
            id: 1,
            name: 'Dinner'
        },
        images: [],
        user: {
            id: 1,
            firstName: 'Mariano',
            lastName: 'Altieri'
        },
        createdAt: new Date().toISOString(),
        ingredients: [
            { id: 1, name: 'Beef', unit: 'gr', quantity: 1000 },
            { id: 2, name: 'Onion', unit: 'unit', quantity: 2 },
            { id: 3, name: 'Carrot', unit: 'unit', quantity: 4 }
        ],
        cals: 500,
        servings: 4,
        timeNeeded: 90,
        directions: [
            'Step 1 dummy text',
            'Step 2 dummy text',
            'Step 3 dummy text',
            'Step 4 dummy text'
        ],
        tips: [
            'Some tip'
        ]
    },
    {
        id: 2,
        title: 'Choco Ice cream',
        description: 'Some other dummy text blah blah ...',
        category: {
            id: 2,
            name: 'Dessert'
        },
        images: [],
        user: {
            id: 1,
            firstName: 'Mauro',
            lastName: 'Gava'
        },
        createdAt: new Date().toISOString(),
        ingredients: [
            { id: 4, name: 'Chocolate', unit: 'bar', quantity: 2 },
            { id: 5, name: 'Ice cream', unit: 'gr', quantity: 150 },
            { id: 6, name: 'Caramel', unit: 'ml', quantity: 20 }
        ],
        cals: 850,
        servings: 1,
        timeNeeded: 10,
        directions: [
            'Step 1 dummy text',
            'Step 2 dummy text'
        ],
        tips: [
            'Some tip', 'Some other tip'
        ]
    },
    {
        id: 3,
        title: 'American Breakfast',
        description: 'Some fancy descrition ...',
        category: {
            id: 2,
            name: 'Breakfast'
        },
        images: [],
        user: {
            id: 3,
            firstName: 'Piti',
            lastName: 'Altieri'
        },
        createdAt: new Date().toISOString(),
        ingredients: [
            { id: 7, name: 'Eggs', unit: 'unit', quantity: 2 },
            { id: 8, name: 'Bacon', unit: 'gr', quantity: 100 }
        ],
        cals: 325,
        servings: 1,
        timeNeeded: 25,
        directions: [
            'Step 1 dummy text',
            'Step 2 dummy text',
            'Step 3 dummy text',
            'Step 4 dummy text',
            'Step 5 dummy text'
        ],
        tips: [
            'Some tip', 'Some other tip', 'One final extra tip'
        ]
    }
];

export default data;
