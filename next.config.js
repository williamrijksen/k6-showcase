module.exports = {
    async headers() {
        return [
            {
                source: '/heavy',
                headers: [
                    // disable cache for the k6 example
                    // {
                    //     key: 'Cache-Control',
                    //     value: 's-maxage=60, stale-while-revalidate',
                    // }
                ],
            },
        ]
    },
}
