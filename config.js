// Photography Portfolio Configuration
// Add your images to the appropriate category folders and list them here

const portfolioConfig = {
    // Site Information
    siteTitle: "TakASnap",
    photographer: "Your Name",
    
    // Gallery Categories - Add or remove as needed
    // Set active: false to hide categories with few/no images
    categories: {
        featured: {
            name: "FEATURED",
            active: true,
            images: [
                { src: 'images/web/featured/0.jpeg', title: 'FEATURED' },
                { src: 'images/web/featured/0B0E78A1-8943-4F43-8489-DF7F358C3AFF_1_102_o.jpeg', title: 'FEATURED' },
                { src: 'images/web/featured/8DB0D16A-FEFF-477D-B648-61696FE1DD24_1_201_a.jpeg', title: 'FEATURED' }
            ]
        },
        landscapes: {
            name: "LANDSCAPES",
            active: true,
            images: [
                { src: 'images/web/landscapes/0B0E78A1-8943-4F43-8489-DF7F358C3AFF_1_102_o.jpeg', title: 'LANDSCAPE' },
                { src: 'images/web/landscapes/34579E0B-2CB5-4C3A-B9FD-FF3E57FAE196_1_102_o.jpeg', title: 'LANDSCAPE' },
                { src: 'images/web/landscapes/8DB0D16A-FEFF-477D-B648-61696FE1DD24_1_201_a.jpeg', title: 'LANDSCAPE' },
                { src: 'images/web/landscapes/DSC02881.jpeg', title: 'LANDSCAPE' },
                { src: 'images/web/landscapes/DSC01941.jpeg', title: 'BANFF VALLEY' }
            ]
        },
        companions: {
            name: "COMPANIONS",
            active: true,
            images: [
                { src: 'images/web/companions/DSC01562.jpg', title: 'COMPANION' },
                { src: 'images/web/companions/DSC01732.jpeg', title: 'COMPANION' },
                { src: 'images/web/companions/DSC01750.jpeg', title: 'COMPANION' },
                { src: 'images/web/companions/DSC01751.jpeg', title: 'COMPANION' },
                { src: 'images/web/companions/DSC01753.jpeg', title: 'COMPANION' },
                { src: 'images/web/companions/DSC01759.jpeg', title: 'COMPANION' }
            ]
        },
        portraits: {
            name: "PORTRAITS",
            active: true,
            images: [
                // Add your portrait photos here
            ]
        },
        urban: {
            name: "URBAN",
            active: true,
            images: [
                // Add your street/urban photos here
            ]
        },
        nature: {
            name: "NATURE",
            active: true,
            images: [
                // Add your nature/macro photos here
            ]
        }
    },
    
    // About section content
    about: {
        title: "ABOUT",
        content: [
            "TakASnap is a photography portfolio showcasing stunning imagery across various genres.",
            "Our passion is to tell stories through photography, preserving moments that inspire and move people."
        ]
    },
    
    // Contact information
    contact: {
        email: "info@takasnap.com",
        instagram: "@takasnap",
        // Add more contact methods as needed
    }
};
