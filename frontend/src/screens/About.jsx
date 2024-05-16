import React from 'react';

function AboutUs() {
    return (
        <div style={styles.aboutUs}>
            <h1 style={styles.title}>About Us</h1>
            <div style={styles.content}>
            <p>Welcome to Vroom Car Rental, your trusted partner in car rentals.</p>
                <p>At Vroom Car Rental, we believe in providing convenient, reliable, and affordable car rental services to our customers. Whether you're planning a road trip, need a vehicle for business purposes, or simply require a temporary replacement while your car is in the shop, we've got you covered.</p>
                <p>Our journey began in [year] with a simple mission: to make car rental accessible to everyone. Since then, we have expanded our fleet, enhanced our services, and built a reputation for excellence in the industry.</p>
                <p>What sets us apart from the competition is our commitment to customer satisfaction. We go the extra mile to ensure that your rental experience is smooth, hassle-free, and enjoyable. From online booking to vehicle pickup and return, we strive to provide a seamless process every step of the way.</p>
                <p>With Vroom Car Rental, you can expect:</p>
                <ul>
                    <li>Wide selection of vehicles, including cars, SUVs, vans, and more</li>
                    <li>Competitive pricing and flexible rental options</li>
                    <li>Convenient locations and easy pickup/drop-off services</li>
                    <li>24/7 customer support to assist you with any queries or concerns</li>
                </ul>
                <p>Thank you for choosing Vroom Car Rental. We look forward to serving you and making your next journey unforgettable!</p>
            </div>
        </div>
    );
}

export default AboutUs;

const styles = {
    aboutUs: {
        margin: '20px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif'
    },
    title: {
        color: 'Black'
    },
    content: {
        color: 'black',
        lineHeight: '1.6'
    }
};
