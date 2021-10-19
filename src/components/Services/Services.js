import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';




const Services = () => {

	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/Piaowei/get-data/main/services.json')
			.then(res => res.json())
			.then(data => setServices(data));
	}, [])
	return (
		<div className="">
			<h1>Our services</h1>
			<div className=" row row-cols-1 row-cols-md-3 g-4 pe-0 ">
				{

					services.map(service => <Service
						key={service.id}
						service={service}
					></Service>)

				}

			</div>

		</div>
	);
};

export default Services;