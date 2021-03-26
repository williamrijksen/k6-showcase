module.exports = {
    async headers() {
        return [
            {
                source: '/heavy',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 's-maxage=60, stale-while-revalidate',
                    }
                ],
            },
        ]
    },
}
