module.exports = {
    async headers() {
        return [{
            source: '/heavy-cached',
            headers: [{
                    key: 'Pragma',
                    value: 'Public',
                },
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=60',
                },
            ],
        }, ]
    },
}
