import React from 'react'
import Card from './Card';

const CardSection = () => {
    return (
        <div>
            <section className="contact bg-success ">
            <div className="container ">
            <h2 className="text-white">
                We love new friends!
            </h2>
            <div className="row">
                <div className="col-4">
                    <Card 
                        title="Card 1 title"
                        subTitle=" Some quick example text to build on the card title and make up
                        the bulk of the card's content."
                        buttonText="Click Card 1"
                    />
                </div>
                <div className="col-4">
                    <Card 
                    title="Card 2 title"
                    subTitle=" Some quick example text to build on the card title and make up
                    the bulk of the card's content."
                    buttonText="Click Card 2"
                    />
                </div>
                <div className="col-4">
                    <Card 
                    title="Card 3 title"
                    subTitle=" Some quick example text to build on the card title and make up
                    the bulk of the card's content."
                    buttonText="Click Card 3"
                    />
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}

export default CardSection; 