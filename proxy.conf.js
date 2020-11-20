const PROXY_CONFIG = [
    {
        context: [
            "/auth"
        ],
        target: "http://localhost:8080/",
        changeOrigin: true,
        secure: false
    },{
        context: [
            "/api"
        ],
        target: "http://localhost:8080/",
        changeOrigin: true,
        secure: false
    }
];

module.exports = PROXY_CONFIG;