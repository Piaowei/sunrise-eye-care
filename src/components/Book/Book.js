import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Book = () => {
	const { serviceId } = useParams();
	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/Piaowei/get-data/main/services.json')
			.then(res => res.json())
			.then(data => setServices(data));
	}, [])



	return (
		<div>
			<h1>Hello</h1>
			<p>This is from service{serviceId}</p>
			{
				// array1.find(service => element > 10);
				services.map(service => <ServiceDetail
					key={service.id}
					service={service}
					serviceId={serviceId}
				></ServiceDetail>)
			}

		</div>
	);
};

export default Book;