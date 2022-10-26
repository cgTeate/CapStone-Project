const data = {
    products: [
        {
            shoeName: "Jordan 4 Retro SE Black Canvas",
            slug: "Jordan 4 Retro SE Black Canvas",
            brand: "Jordan",
            colorway: "Black/Light Steel Grey/White/Fire Red",
            retailPrice: "$ 210.00",
            releaseDate: "2022-10-05",
            thumbnail: "https://images.stockx.com/images/Air-Jordan-4-Retro-SE-Black-Canvas-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1664433335",
            countInStock: 10,
            description: "The Air Jordan 4 Retro SE ‘Black Canvas’ features a neutral color scheme that calls to mind Eminem’s extremely rare Carhartt x Air Jordan 4. The mid-top carries a black canvas upper with a tonal suede forefoot overlay and grey molded eyelets. A matching grey Jumpman decorates the back heel and woven tongue tag, the latter accented with a crimson Flight logo for a sharp burst of contrasting color. The sneaker rides on a two-tone polyurethane midsole with visible Air-sole cushioning in the heel."
        },
        {
            shoeName: "Jordan 3 Retro Fire Red (2022)",
            slug:"Jordan 3 Retro Fire Red (2022)",
            brand: "Jordan",
            colorway: "White/Fire Red/Cement Grey/Black",
            retailPrice: "$ 210.00",
            releaseDate: "2022-09-10",
            thumbnail:"https://images.stockx.com/images/Air-Jordan-3-Retro-Fire-Red-2022-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1663687791",
            countInStock: 10,
            description:"The 2022 edition of the Air Jordan 3 Retro ‘Fire Red’ brings back an OG colorway of the first Air Jordan model designed by Tinker Hatfield. Originally released in 1988, the sneaker carries a white leather upper with dark grey elephant-print overlays at the forefoot and heel. Contrasting crimson accents settle on the perforated leather collar, molded eyelets, and polyurethane midsole, featuring a visible Air-sole unit nestled in the heel. Matching hits of Fire Red distinguish the sneaker’s branding elements, including a Jumpman logo embroidered on the tongue and ‘Nike Air’ embossed on the heel."
        }, 
        {
            shoeName: "Jordan 1 Retro Low OG Black Dark Powder Blue",
            slug:"Jordan 1 Retro Low OG Black Dark Powder Blue",
      brand: "Jordan",
      colorway: "White/Dark Powder Blue/Black",
      retailPrice: "$ 130.00",
      releaseDate: "2022-07-29",
      thumbnail:"https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-UNC-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1659334953",
      countInStock: 10,
      description: "The Air Jordan 1 Retro Low OG ‘UNC’ continues a tradition of classic Jordan models draped in colors that pay homage to Michael Jordan’s alma mater. This pair utilizes a leather upper that combines a white base with contrasting black accents on the forefoot overlay and signature Swoosh. The heel panel is finished in Dark Powder Blue, matching the rubber outsole and woven Nike Air tongue tag. A retro Wings logo on the heel tab maintains the shoe’s OG aesthetic."
        }, 
        {
            shoeName: "Air Jordan 1 Retro High OG Pine Green 2.0",
            slug:"Air Jordan 1 Retro High OG Pine Green 2.0",
        brand: "Jordan",
        colorway: "Black/White-Gym Red-Pine Green",
        retailPrice: "$ 190.00",
        releaseDate: "2020-02-29",
        thumbnail:"https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pine-Green-Black/Images/Air-Jordan-1-Retro-High-Pine-Green-Black/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=5&amp;updated_at=1635269677",
        countInStock: 10,
        description: "Released in early 2020, the Air Jordan 1 Retro High OG 'Pine Green 2.0' comes in a simple colorway of Pine Green and Gym Red on a black template. When Peter Moore designed the first Air Jordan in 1985, he wanted to provide support for the dynamic superstar with the freakishly athletic game—without sacrificing comfort. He designed a high-top shoe with durable leather featuring upper eyelet straps, heel and midfoot overlays, and a perforated toebox. The history of flight had begun. "
        },
        {
            shoeName: "Air Jordan 1 High Retro OG 'Pollen'",
            slug:"Air Jordan 1 High Retro OG 'Pollen'",
        brand: "Jordan",
        colorway: "Pollen/Black/White",
        retailPrice: "$ 180.00",
        releaseDate: "2021-08-14",
        thumbnail:"https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=4&amp;updated_at=1635282407",
        countInStock: 10,
        description: "The Air Jordan 1 High Retro OG ‘Pollen’ showcases color blocking that mirrors another basketball silhouette released back in 1985. Recalling the OG ‘Iowa’ Dunk colorway, the leather upper pairs a solid black base with contrasting overlays in Pollen yellow. Traditional branding elements include a Jordan Wings logo imprinted on the lateral collar flap and a woven Nike tag atop the nylon tongue. The high-top rides on a standard rubber cupsole, enhanced with a polyurethane wedge and encapsulated Air-sole cushioning under the heel."
        },
        {
            shoeName: "Travis Scott x Air Jordan 1 Retro High OG 'Mocha'",
            slug: "Travis Scott x Air Jordan 1 Retro High OG 'Mocha'",
        brand: "Jordan",
        colorway: "Sail/Dark Mocha-University Red-Black",
        retailPrice: "$ 1,750.00",
        releaseDate: "2019-05-11",
        thumbnail:"https://images.stockx.com/360/Air-Jordan-1-Retro-High-Travis-Scott/Images/Air-Jordan-1-Retro-High-Travis-Scott/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=3&amp;updated_at=1635191289",
        countInStock: 10,
        description: "The Travis Scott x Air Jordan 1 Retro High features a new look on the iconic silhouette, thanks to an oversized backward-facing Swoosh on the lateral side. A traditionally oriented Swoosh graces the medial side of the upper, which is built with a blend of white leather and brown suede. Additional unique details include a double-layer construction on the collar and Scott’s crudely drawn face logo embossed on the heel."
        },
        {
            shoeName: "NikeCraft General Purpose Shoe Tom Sachs Archive Dark Sulfur",
            slug:"NikeCraft General Purpose Shoe Tom Sachs Archive Dark Sulfur",
            brand: "Nike",
            colorway: "Dark Sulfur/White-Light Cream",
            retailPrice: "$ 110.00",
            releaseDate: "2022-09-02",
            thumbnail:"https://images.stockx.com/images/NikeCraft-General-Purpose-Shoe-Tom-Sachs-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1662558895",
            countInStock: 10,
            description:"The Tom Sachs x Nike NikeCraft General Purpose Shoe ‘Archive’ features a functional design that aligns with the shoe’s marketing tagline, which cheekily suggests that ‘Creativity is the enemy.’ Based on Sachs’ ongoing research into how ‘our bodies meet the ground,’ the low-top sports a yellow mesh upper with tonal suede overlays and a contrasting white Swoosh. Orange webbing tabs at the tongue and heel assist with easy on and off. The cream-colored rubber midsole packs an EVA wedge for lightweight cushioning, while a black waffle-traction rubber outsole yields optimal grip."
        }, 
        {
            shoeName: "Crocs Pollex Clog by Salehe Bembury Tide",
            slug:"Crocs Pollex Clog by Salehe Bembury Tide",
      brand: "Crocs",
      colorway: "Turquoise Tonic",
      retailPrice: "$ 85.00",
      releaseDate: "2022-09-22",
      thumbnail:"https://images.stockx.com/images/Crocs-Pollex-Clog-by-Salehe-Bembury-Tide-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1664259289",
      countInStock: 10,
      description: "The Salehe Bembury x Crocs Pollex Clog ‘Tide’ showcases a bright blue finish on the molded foam upper, covered in a series of concave ridges shaped in the form of the footwear designer’s fingerprints. Ventilation ports along the forefoot offer enhanced breathability, while a pivoting dual-branded heel strap delivers a secure, comfortable fit. Underfoot, the ridged outsole features durable semi-translucent rubber that wraps up the toe and heel."
        }, 
        {
            shoeName: "adidas Yeezy Boost 350 V2 Flax",
            slug:"adidas Yeezy Boost 350 V2 Flax",
      brand: "adidas",
      colorway: "Flax/Flax/Flax",
      retailPrice: "$ 220.00",
      releaseDate: "2020-02-22",
      thumbnail:"https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Flax-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1657197541",
      countInStock: 10,
      description:"The adidas Yeezy Boost 350 V2 ‘Beluga Reflective’ brings back the 2016 colorway with a twist. Like the original ‘Beluga’ release, this pair features a predominantly grey Primeknit upper with an orange side stripe marked with SPLY-350 branding. Interwoven throughout the knit build are reflective fibers that offer enhanced visibility in low-light conditions. The sneaker’s tooling remains unchanged, highlighted by a full-length Boost midsole wrapped in a semi-translucent rubber cage."
        }, 
        {
            shoeName: "Air Jordan 4 Retro 'Red Thunder'",
            slug:"Air Jordan 4 Retro 'Red Thunder'",
      brand: "Jordan",
      colorway: "BLACK/MULTI-COLOR-MULTI-COLOR-CRIMSON",
      retailPrice: "$ 190.00",
      releaseDate: "2022-01-15",
      thumbnail:"https://images.stockx.com/360/Air-Jordan-4-Retro-Red-Thunder/Images/Air-Jordan-4-Retro-Red-Thunder/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=2&amp;updated_at=1641395120&amp;h=384&amp;q=60 2x,",
      countInStock: 10,
      description:"The Air Jordan 4 Retro ‘Red Thunder’, also known as 'Crimson', features familiar color blocking that recalls the coveted ‘Thunder’ colorway, originally released in 2006 and subsequently reissued in 2012. The mid-top sports a black nubuck upper with contrasting pops of crimson in lieu of the older shoe’s Tour Yellow accents. They appear on the sneaker’s molded eyelets, interior tongue, quarter panel, throat and midsole, which packs visible Air-sole cushioning under the heel. Jumpman branding decorates the tongue tag and heel."
        }, 
        {
            shoeName: "Air Jordan 4 Retro 'University Blue'",
            slug: "Air Jordan 4 Retro 'University Blue'",
      brand: "Jordan",
      colorway: "UNIVERSITY BLUE/TECH GREY-WHITE-BLACK",
      retailPrice: "$ 200.00",
      releaseDate: "2021-04-28",
      thumbnail:"https://images.stockx.com/360/Air-Jordan-4-Retro-University-Blue/Images/Air-Jordan-4-Retro-University-Blue/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=2&amp;updated_at=1635344971&amp;h=384&amp;q=60 2x,",
      countInStock: 10,
      description:"The Air Jordan 4 Retro ‘University Blue’ updates the classic silhouette with a suede upper in a familiar hue inspired by Michael Jordan’s UNC alma mater. The bright blue palette is contrasted by a speckled grey finish on the sneaker’s supportive wings and back heel, featuring a raised Jumpman icon in black. Secondary Jumpman branding adorns the woven tongue tag, designed to mimic a jock tag that typically appears on the bottom hem of Jordan jerseys."
        }, 
        {
            shoeName: "Air Jordan 4 Retro OG 'White Cement' 2016",
            slug: "Air Jordan 4 Retro OG 'White Cement' 2016",
      brand: "Jordan",
      colorway: "WHITE/FIRE RED-BLACK-TECH GREY",
      retailPrice: "$ 220.00",
      releaseDate: "2016-02-13",
      thumbnail:"https://images.stockx.com/360/Air-Jordan-4-Retro-White-Cement-2016/Images/Air-Jordan-4-Retro-White-Cement-2016/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=2&amp;updated_at=1635276861&amp;h=384&amp;q=60 2x,",
      countInStock: 10,
      description:"The Air Jordan 4 Retro OG 'Cement’ 2016 was one of the original four colorways released in 1989. The sneaker features the original White, Fire Red, Black, and Tech Grey colorway, with the speckled Cement Grey accents that give the sneaker its nickname. Released during the 2016 NBA All-Star weekend in Toronto, the sneaker was also retro’d in 1999 and 2012. The 1999 and 2016 retros are the only models that feature the ‘Nike Air’ branding on the heel, just like the 1989 OG sneakers."
        }, 
        {
            shoeName: "Air Jordan 4 Retro 'Cool Grey' 2019",
            slug:"Air Jordan 4 Retro 'Cool Grey' 2019",
      brand: "Jordan",
      colorway: "COOL GREY/CHROME-DARK CHARCOAL-VARSITY MAIZE",
      retailPrice: "$ 190.00",
      releaseDate: "2019-08-01",
      thumbnail:"https://images.stockx.com/360/Air-Jordan-4-Retro-Cool-Grey-2019/Images/Air-Jordan-4-Retro-Cool-Grey-2019/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=2&amp;updated_at=1634912063&amp;h=384&amp;q=60 2x",
      countInStock: 10,
      description:"Re-released in August 2019, the Air Jordan 4 Retro 'Cool Grey' celebrates the iconic sneaker's 30th anniversary in a true-to-form retro of a 2004 colorway. The Cool Grey nubuck upper is framed with a white midsole that houses a visible Nike Air unit, while black details line the outsole and lace loops. A hint of Varsity Maize appears on the tongue patch, Air bubble and outsole, while a chrome Jumpman logo adorns the back heel."
        }, 
        {
            shoeName: "Air Jordan 4 Retro SE 'What The 4'",
            slug:"Air Jordan 4 Retro SE 'What The 4'",
      brand: "Jordan",
      colorway: "WHITE/MILITARY BLUE-FIRE RED-BLACK-CEMENT GREY",
      retailPrice: "$ 200.00",
      releaseDate: "2019-11-23",
      thumbnail:"https://images.stockx.com/360/Air-Jordan-4-Retro-What-The/Images/Air-Jordan-4-Retro-What-The/Lv2/img01.jpg?fm=avif&amp;auto=compress&amp;w=576&amp;dpr=2&amp;updated_at=1635191413&amp;h=384&amp;q=60 2x,",
      countInStock: 10,
      description:"Released in November 2019, the Air Jordan 4 Retro SE 'What The 4' takes the original four colorways of the Air Jordan 4 and combines them in a 'What The' format that has been seen on several Nike silhouettes. This original color palette is realized on the entire shoe, with the beloved Varsity Red, Cement Grey and Military Blue that Jordan 4 fans recognize and love. The discordant aesthetic works across the leather uppers, signature lacing wings and Jumpman logos on the tongue and heel to create something familiar yet new."
        }, 
        
    ],
};

export default data;