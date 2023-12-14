/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com',
            "www.apple.com",
            "cdn.vatanbilgisayar.com",
            "cdn.vatanbilgisayar.com",
            "www.incehesap.com",
            "techcrunch.com",
        ],
        // gorseller sorun oluşturmasın diye hostnameleri yazmak zorundayım
    }
}

module.exports = nextConfig
