export default {
    groups: [
        {
            links: [
                {
                    name: 'Home',
                    url: 'http://example.com',
                    links: [
                        {
                            name: 'Activity',
                            url: 'http://msn.com',
                            key: 'key1'
                        },
                        {
                            name: 'MSN',
                            url: 'http://msn.com',
                            disabled: true,
                            key: 'key2'
                        }
                    ],
                    isExpanded: true
                },
                {
                    name: 'Documents',
                    url: 'http://example.com',
                    key: 'key3',
                    isExpanded: true
                },
                {
                    name: 'Pages',
                    url: 'http://msn.com',
                    key: 'key4'
                },
                {
                    name: 'Notebook',
                    url: 'http://msn.com',
                    key: 'key5',
                    disabled: true
                },
                {
                    name: 'Communication and Media',
                    url: 'http://msn.com',
                    key: 'key6'
                },
                {
                    name: 'News',
                    url: 'http://cnn.com',
                    icon: 'News',
                    key: 'key7'
                }
            ]
        }
    ]
}