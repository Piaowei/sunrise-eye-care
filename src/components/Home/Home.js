import React from 'react';
import Services from '../Services/Services';
import './Home.css';
import img1 from '../../images/banner.jpg'
import img2 from '../../images/bnnar/main2.jpg'
import img3 from '../../images/bnnar/main3.jpg'
import img4 from '../../images/bnnar/main4.jpg'

const Home = () => {
	return (

		<div className="row container-fluid pe-0 home">


			<div id="carouselExampleIndicators" className="carousel slide pb-5 col col-12" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={img1} className="d-block w-100 img-fluid" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={img2} className="d-block w-100 img-fluid" alt="..." />
					</div>
					<div className="carousel-item">
						<img src={img3} className="d-block w-100 img-fluid" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<h3 className="top-rated pt-2 ">Search your Best Eye Solution Here</h3>
			<div className="container-fluid pb-3 w-75 ">
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Course Name" aria-label="Course Name" aria-describedby="button-addon2" />
					<button className="btn btn-outline-primary" type="Button" id="button-addon2">Search</button>
				</div>
			</div>

			{/* --------------------------------------------------
						 6 services
------------------------------------------------------*/}
			<div className="">
				<Services></Services>

			</div>

			<div className="pt-5 pb-2" >	<h2>FAQ</h2></div>
			<div className=" pb-2" >	<h1>Frequently Asked Questions</h1></div>

			<div className="container-fluid row-cols-1 row-cols-md-1 w-75 " >
				<div className="accordion" id="accordionPanelsStayOpenExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingOne">
							<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">

								<span className="fw-bold" >Can lasik get rid of my reading glasses?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
							<div className="accordion-body">
								This is a widely misunderstood issue. There is an urban myth about laser eye surgery, and it is perpetrated by a lot of eye surgeons: laser eye surgery is only good for young people. It can only get people out of their spectacles for distance vision and it can do nothing about the reading.

								There have been a lot of developments in the last five to ten years to address this issue. Different laser platforms are taken from different approaches. The laser platforms, in my opinion, really come out on top with an effective, safe treatment.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">

								<span className="fw-bold" >At what age can you get Lasik?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
							<div className="accordion-body">
								Age can influence your candidacy for LASIK eye surgery, but it is by no means set in stone. In fact, there is no set age for LASIK eye surgery. Most LASIK eye surgeons, however, will not perform the procedure on those under the age of 18 as vision tends to keep changing into early adulthood. While laser eye surgery has been performed on children with severe vision problems, note that these cases are the exception to the rule. In general, the average age range for getting LASIK is between 20 and 40 years of age.

								The FDA has approved LASIK eye surgery for those 18 years and older, but most providers will encourage patients to wait until their mid-20s after their prescription has stabilized. Read on for a break down of LASIK facts by age range.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >What is a glasses prescription only good for one year?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
							<div className="accordion-body">
								Eyeglass lens prescriptions typically are valid for a minimum of one year, or the minimum required by state law. It's very common for the expiration date on an eyeglass prescription to be the date two years from the day of your eye exam when the prescription was written and given to you.

								However, the expiration date on a glasses prescription might be shorter (one year rather than two years, for example) if you are at higher-than-normal risk of your eyes changing more quickly. An example of this is an eyeglass prescription written for a child whose nearsightedness is worsening year after year.



							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >Do I need to leave my glasses with you if I just want new lenses?</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
							<div className="accordion-body">
								Wearing contacts and glasses can be cumbersome for some people, and can have a negative effect on their active lifestyles. Many people are choosing to take charge of their vision in a more permanent way.

								Eye specialists have made incredible advancements in vision correction surgery, also known as refractive and laser eye surgery, in recent years. There are many types of vision correction surgeries. Most procedures work to reshape the cornea so that light passing through it can focus on the retina. Other surgeries replace the lens of the eye.

								Here are the different types of corrective surgeries, what they improve, and how they work.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >What are the best vision correction options available for my eyes?</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
							<div className="accordion-body">
								Studies indicate that the best way to protect yourself from the spread of communicable disease is simply to wash your hands on a regular basis. This practice is crucial to avoid contracting eye-related conditions such as conjunctivitis. You often develop conjunctivitis after touching something that someone else has touched after they rubbed their eyes.

								After any eye surgery such as LASIK, cataract surgery or glaucoma shunt surgery, your eyes are more susceptible to infection. The Centers for Disease Control suggests that you wash your hands thoroughly before you apply any treatments to your eyes, and avoid rubbing your eyes as much as possible. When you have conjunctivitis, be sure to was
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>



	);
};

export default Home;