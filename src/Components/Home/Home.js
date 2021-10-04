import React from 'react';
import Coach from '../Coach/Coach';
import ServiceCard from '../ServiceCard/ServiceCard';


const Home = () => {
    const [coaches] = Coach();
    return (
        <div>
            <div className="row row-cols-lg-4 g-4 row-cols-1" >
                {
                    coaches.slice(0, 4).map(coach => <ServiceCard
                        key={coach.key}
                        coach={coach}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;