import React, { useEffect, useState } from 'react';

const ServiceDetail = (props) => {

	const { id, name, img, detail, price } = props.service;

	return (
		<div className="pb-5">
			{
				id == props.serviceId &&

				<div className="pb-5 me-0 pe-0   ">
					<div><h1 className="pb-4">Service of: {name} </h1></div>

					<div className="row container-fluid me-0 pe-0 ">
						<div className="col col-12 col-md-6 "><img className="img-fluid" src={img} alt="" /></div>
						<div className="col col-12 col-md-6">{detail}</div>
						<div className="pt-5 text-danger col col-12"> <h3>Treatment Cost $: {price}</h3> </div>

					</div>



				</div>

			}

		</div>
	);
};

export default ServiceDetail;