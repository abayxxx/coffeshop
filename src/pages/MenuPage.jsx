import React from 'react'
import item1 from '../assets/img/item-1.jpeg'
import item2 from '../assets/img/item-2.jpg'
import item3 from '../assets/img/item-10.jpg'
import item4 from '../assets/img/item-4.jpeg'
import item5 from '../assets/img/item-5.jpeg'
import item6 from '../assets/img/item-6.jpeg'
import item7 from '../assets/img/item-7.jpeg'
import item8 from '../assets/img/item-8.jpeg'
import item9 from '../assets/img/item-9.jpeg'
import Menu from '../components/Menu'
import { Container, Row, Col } from 'react-bootstrap'

export default function MenuPage() {

    const menu = [
        {
            name: "Buttermilk Pancakes",
            description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
            price: "15$",
            image: item1,
            category: "breakfast"
        },
        {
            name: "Dinner Double",
            description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
            price: "18$",
            image: item2,
            category: "lunch"
        },
        {
            name: "Godzilla Milkshake",
            description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
            price: "12$",
            image: item3,
            category: "shakes"
        },
        {
            name: "Country Delight",
            description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
            price: "14$",
            image: item4,
            category: "breakfast"
        },
        {
            name: "American Classic",
            description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
            price: "17$",
            image: item5,
            category: "lunch"
        },
        {
            name: "Egg Attack",
            description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
            price: "10$",
            image: item6,
            category: "lunch"
        },
        {
            name: "Oreo Dream",
            description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
            price: "15$",
            image: item7,
            category: "shakes"
        },
        {
            name: "Bacon Overflow",
            description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
            price: "16$",
            image: item8,
            category: "breakfast"
        },
        {
            name: "Quarantine Buddy",
            description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
            price: "15$",
            image: item9,
            category: "shakes"
        }

    ]

    return (

        <Container className="mt-5">
            <Menu />
            <div className="card-menu mb-5">
                {menu.map((item) => (
                    <div className="card-item mt-5">
                        <div>
                            <img src={item.image} alt="kue" className="image-menu" />
                        </div>
                        <div>
                            <Row>
                                <Col md={8} className="text-card">
                                    <p className="text mr-4" style={{ fontSize: 15 }}>
                                        {item.name}
                                    </p>
                                </Col>
                                <Col md={4} className="text-price">
                                    <h6 className="text" style={{ color: "chocolate" }}>{item.price}</h6>
                                </Col>
                                <hr className="hr-card" />
                            </Row>

                            <p className="text text-secondary mr-5">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </Container >

    )
}
