import React, { useEffect, useState } from 'react';

const ServiceDetail = (props) => {

	const { id, name, img } = props.service;

	return (
		<div>
			{
				id == props.serviceId &&
				<div>
					<h1>This is details{name} </h1>
					<img src={img} alt="" />

				</div>

			}

		</div>
	);
};

export default ServiceDetail;