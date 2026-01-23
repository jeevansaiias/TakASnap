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
                { src: 'images/web/landscapes/4BF130DE-C57B-482C-BC5C-168DD9162F87_1_201_a.jpeg', title: 'LANDSCAPE' },
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
                { src: 'images/web/nature/0.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/0A.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/0B.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/1DF33737-C643-4EEB-80E3-357C227DDB85_1_201_a.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/1A68CCE5-1B51-40E5-9636-41166CB3DCA9_1_201_a.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/7E0F3A48-D4D6-48A1-970A-C8BC916853C4_1_201_a.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/86DB1370-070C-4CA0-A1EB-802D94AE4723_1_201_a.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/86DE279C-8ABC-4294-8E67-1698D529FB0A_1_201_a.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/9D491D20-99DC-4CEC-A3D9-7BF5312AD09A_1_201_a.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/DB825D77-DFFB-4618-BB81-45B5D07FD114_1_201_a.jpeg', title: 'NATURE' },
                { src: 'images/web/nature/F11AED06-DA35-47F8-BDFA-19537C77D9CA_4_5005_c.jpeg', title: 'NATURE' }
            ]
        },
        portraits: {
            name: "PORTRAITS",
            active: true,
            images: [
                // Add your portrait photos here
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
