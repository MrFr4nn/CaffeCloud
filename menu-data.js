// js/menu-data.js
const menuData = {
    categories: [
        {
            name: "Kave",
            id: "kave",
            items: [
                {
                    subCategory: "Espresso based kave",
                    products: [
                        { name: "Espresso", description: "Intenzivan i aromatičan kratki napitak.", price: "1.80€", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xLlW1mAPFouk1pMmxWF7-ldn06R4s0U7wA&s" },
                        { name: "Macchiato", description: "Espresso s kapljicom mliječne pjene.", price: "2.00€", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Macchiato_%287199366530%29.jpg/1200px-Macchiato_%287199366530%29.jpg" },
                        { name: "Americano", description: "Espresso produžen vrućom vodom.", price: "2.20€", image: "https://harrdy.hr/wp-content/uploads/2023/05/americano.jpg" }
                    ]
                },
                {
                    subCategory: "Mliječne kave",
                    products: [
                        { name: "Cappuccino", description: "Vruće mlijeko i bogata mliječna pjena.", price: "2.80€", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvthhy8frIY2WeY4dgkTfGd9zzChCeVpv5zw&s" },
                        { name: "Latte", description: "Kremasti espresso s više mlijeka i tankim slojem pjene.", price: "3.00€", image: "https://coffeebros.com/cdn/shop/articles/unnamed_be2775a1-186d-40c1-b094-488fa5fa4050.png?v=1675965693" },
                        { name: "Mocha", description: "Savršena kombinacija espressa, čokolade i mlijeka.", price: "3.50€", image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?resize=1200%2C630" }
                    ]
                },
                {
                    subCategory: "Ledene Kave",
                    products: [
                        { name: "Iced Latte", description: "Osvježavajući espresso s hladnim mlijekom i ledom.", price: "3.30€", image: "https://images.squarespace-cdn.com/content/v1/624fa63d5ba99559345806e6/e883d0bc-dd93-4417-b729-f638d5a4085d/EG14_EP74_Cold+Foam+Iced+Latte_1L0A5292.jpg" },
                        { name: "Frappe", description: "Pjenušava ledena kava, idealna za vruće dane.", price: "3.50€", image: "https://www.coffeefriend.co.uk/app/uploads/2021/01/Frappe-virselis.jpg" }
                    ]
                }
            ]
        },
        {
            name: "Ostala Pića",
            id: "ostala-pica",
            items: [
                {
                    subCategory: "Topli Napitci",
                    products: [
                        { name: "Čaj (razni okusi)", description: "Crni, zeleni, voćni ili biljni čaj po izboru.", price: "2.50€", image: "https://bioplanet.hr/wp-content/uploads/2024/10/Proizvodi-10.png" },
                        { name: "Topla Čokolada", description: "Bogata i kremasta topla čokolada.", price: "3.00€", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbfENaa4HQ5rxoseGkoK0NsjeKM0DeT6xQQ&s" }
                    ]
                },
                {
                    subCategory: "Hladni Napitci",
                    products: [
                        { name: "Prirodni Sok (Naranča)", description: "Svježe cijeđeni sok od naranče.", price: "3.50€", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
                        { name: "Limunada", description: "Osvježavajuća domaća limunada.", price: "3.00€", image: "https://zena.net.hr/media/2021/06/25/1178553/H-0c73ad1e-d592-11eb-956a-f2ca44759480-900.webp" }
                    ]
                }
            ]
        },
        {
            name: "Slatki Zalogaji",
            id: "slatko",
            items: [
                {
                    subCategory: "Kolači",
                    products: [
                        { name: "Cheesecake", description: "Klasični cheesecake s preljevom od šumskog voća.", price: "4.00€", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
                        { name: "Čokoladni Mousse", description: "Lagani i prozračni čokoladni mousse.", price: "3.80€", image: "https://www.tvornicazdravehrane.com/upload/publish/6056/cokmus_5a610a26b1ad9.png" }
                    ]
                },
                {
                    subCategory: "Torte (kriške)",
                    products: [
                        { name: "Čokoladna Torta", description: "Bogata i sočna čokoladna torta.", price: "4.20€", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
                        { name: "Mrkva Torta", description: "Popularna torta s mrkvom", price: "4.00€", image: "https://recepttura.com/wp-content/uploads/2024/03/torta-od-mrkve-recepttura-recipe-card.jpg" }
                    ]
                },
                {
                    subCategory: "Peciva",
                    products: [
                        { name: "Croissant", description: "Svježe pečeni maslacasti croissant.", price: "2.00€", image: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvaXNzYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
                        { name: "Muffin (Čokoladni)", description: "Sočni muffin s komadićima čokolade.", price: "2.50€", image: "https://slatkisvijet.com/images/2015/11/mekani-najbolji-recept-cokoladni-muffini.jpg" }
                    ]
                }
            ]
        },
        // Ovdje možete dodati i "Slani Zalogaji" ako želite
        // {
        //     name: "Slani Zalogaji",
        //     id: "slano",
        //     items: [ /* ... */ ]
        // }
    ]
};