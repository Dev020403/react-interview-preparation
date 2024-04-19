export const explorer = {
    id: 1,
    name: 'root',
    isFolder: true,
    items: [
        {
            id: 2,
            name: 'public',
            isFolder: true,
            items: [
                {
                    id: 3,
                    name: 'public nested 1',
                    isFolder: true,
                    items: [
                        {
                            id: 4,
                            name: 'index.html',
                            isFolder: false,
                            items: []
                        },
                        {
                            id: 5,
                            name: 'style.css',
                            isFolder: false,
                            items: []
                        }
                    ]
                }
            ]
        },{
            id: 9,
            name: 'src',
            isFolder: true,
            items: [
                {
                    id: 10,
                    name: 'src nested 1',
                    isFolder: true,
                    items: [
                        {
                            id: 11,
                            name: 'index.js',
                            isFolder: false,
                            items: []
                        },
                        {
                            id: 12,
                            name: 'style.css',
                            isFolder: false,
                            items: []
                        }
                    ]
                },{
                    id: 13,
                    name: 'src nested 2',
                    isFolder: true,
                    items: [
                        {
                            id: 14,
                            name: 'index.js',
                            isFolder: false,
                            items: []
                        },
                        {
                            id: 15,
                            name: 'style.css',
                            isFolder: false,
                            items: []
                        }
                    ]
                }
            ]
        }
    ]
}