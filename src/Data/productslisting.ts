export interface Product {
    id: string
    title: string
    image: string
    price: number 
    link: string
}

export const products: Product[] = [
    {
        id: "1",
        title: "Home: A Short History of an Idea by Witold Rybczynski ",
        image: "https://m.media-amazon.com/images/I/61CrwJg+uTL._SL1200_.jpg",
        price: 16.99,
        link: "https://www.amazon.com/Home-Short-History-Witold-Rybczynski/dp/0140102310/ref=sr_1_1?crid=1JI7G0FOU86X4&dib=eyJ2IjoiMSJ9.gvDYBdQc-Iff-Bq4BTPCV2-QuauLCEUldaqkIuHM4svGjHj071QN20LucGBJIEps.XwJe51vlPlScyeer41J0vGQ769okLyVjlqW5x_I1iKo&dib_tag=se&keywords=Home%3A+A+Short+History+of+an+Idea+by+Witold+Rybczynski&qid=1752705146&sprefix=home+a+short+history+of+an+idea+by+witold+rybczynski%2Caps%2C221&sr=8-1 ",
},

    {   
        id:"2",
        title: "The User Illusion: Cutting Consciousness Down to Size",
        image: "https://m.media-amazon.com/images/I/71EdwUtYT3L._SL1153_.jpg",
        price: 20.00,
        link: "https://www.amazon.com/User-Illusion-Cutting-Consciousness-Penguin/dp/0140230122/ref=sr_1_1?crid=L24FIV17O2B&dib=eyJ2IjoiMSJ9.87tYomvCV81PdJkV5Sbkg87ObK66hgPSyx_lGURy6W8.BQ2uAxX8biPjn2l1l5_qGDHcwD3OczayachSomADr8Q&dib_tag=se&keywords=The+User+Illusion%3A+Cutting+Consciousness+Down+to+Size&qid=1752704066&sprefix=the+user+illusion+cutting+consciousness+down+to+size%2Caps%2C124&sr=8-1"
},];
