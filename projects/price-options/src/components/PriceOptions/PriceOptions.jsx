import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "One free personal training session",
                "Access during off-peak hours",
                "Access to cardio and strength training equipment",
                "Basic fitness assessment",
                "Free water bottle on sign-up"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 50,
            "features": [
                "Unlimited gym access",
                "Locker room and shower access",
                "Weekly group fitness classes",
                "Two free personal training sessions",
                "Free fitness assessment and follow-up",
                "10% discount on gym merchandise",
                "Monthly progress tracking report",
                "Access to member-only events"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 75,
            "features": [
                "24/7 gym access",
                "Locker room, shower, and sauna access",
                "Unlimited group fitness classes",
                "Monthly personal training session",
                "Free guest pass once a month",
                "Access to exclusive equipment",
                "Access to swimming pool",
                "Nutritional guidance sessions",
                "Priority booking for classes and events",
                "Access to meditation and yoga sessions"
            ]
        },
        {
            "id": 4,
            "name": "VIP Membership",
            "price": 100,
            "features": [
                "24/7 gym access",
                "Private locker and laundry service",
                "Unlimited group fitness and yoga classes",
                "Weekly personal training session",
                "Nutritional coaching sessions",
                "Spa and sauna access",
                "VIP lounge access",
                "Complimentary massage once a month",
                "Access to virtual fitness programs",
                "Personalized fitness and diet plan",
                "Access to exclusive workshops and seminars",
                "Private steam room access",
                "Concierge service for bookings"
            ]
        }
    ];

    return (
        <div>
            <h2 className="text-5xl">Best Price</h2>
            {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;