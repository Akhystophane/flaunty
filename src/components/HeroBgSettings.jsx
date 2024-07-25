const getAnimationSettings = () => {
    const width = window.innerWidth;
    let settings = {
        mountain3Y: "-=80",
        mountain2Y: "-=30",
        mountain1Y: "+=50",
        cloudsLeftX: "-20%",
        cloudsRightX: "20%",
        sunY: "+=210",
        starsY: 0
    };

    if (width < 550) { // Taille 'xs'
        //console.log('xs')
        settings = {
            ...settings,
            mountain3Y: "+=3",
            mountain2Y: "-=0",
            mountain1Y: "+=35",
            cloudsLeftX: "-10%",
            cloudsRightX: "10%",
            sunY: "+=80",
            starsY: 90
        };
    }
    else if (width >= 550  && width < 640) { // Taille 'sm'
        //console.log('sm')
        settings = {
            ...settings,
            mountain3Y: "+=5",
            mountain2Y: "-=0",
            mountain1Y: "+=55",
            cloudsLeftX: "-10%",
            cloudsRightX: "10%",
            sunY: "+=105",
            starsY: 180
        };
    } else if (width >= 640 && width < 768) { // Taille 'md'

        //console.log('md')
        settings = {
            ...settings,
            mountain3Y: "+=10",
            mountain2Y: "-=10",
            mountain1Y: "+=50",
            cloudsLeftX: "-15%",
            cloudsRightX: "15%",
            sunY: "+=157.5",
            starsY: 190
        };
    } else if (width >= 768 && width < 1024) { // Taille 'lg'
        //console.log('lg')
        settings = {
            ...settings,
            mountain3Y: "-=40",
            mountain2Y: "-=20",
            mountain1Y: "+=10",
            cloudsLeftX: "-18%",
            cloudsRightX: "18%",
            sunY: "+=50",
            starsY: 0
        };
    } else if (width >= 1024 && width < 1280) { // Taille 'xl'
        //console.log('xl')
        settings = {
            ...settings,
            mountain3Y: "-=20",
            mountain2Y: "-=40",
            mountain1Y: "+=6",
            cloudsLeftX: "-19%",
            cloudsRightX: "19%",
            sunY: "+=150",
            starsY: 0
        };
    } else if (width >= 1280 && width < 1536) { // Taille '2xl'
        //console.log('2xl')
        settings = {
            ...settings,
            mountain3Y: "-=60",
            mountain2Y: "-=35",
            mountain1Y: "+=10",
            cloudsLeftX: "-19.5%",
            cloudsRightX: "19.5%",
            sunY: "+=205",
            starsY: 0
        };
    } else if (width >= 1536) { // Au-delà de '2xl'
        settings = {
            ...settings,
            mountain3Y: "-=70",
            mountain2Y: "-=30",
            mountain1Y: "+=50",
            cloudsLeftX: "-20%",
            cloudsRightX: "20%",
            sunY: "+=210",
            starsY: 0
        };
    }

    return settings;
};

export default getAnimationSettings;
