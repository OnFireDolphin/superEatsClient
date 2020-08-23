import React from "react";

function Home() {
	return (
		<div>
			<header className="masthead text-center text-white">
				<div className="masthead-content">
					<div className="container">
						<h1 className="masthead-heading mb-0">Super Eats</h1>
						<h2 className="masthead-subheading mb-0">
							Easy grocery shopping for everyone!
						</h2>
						<a href="#learn-more" className="btn btn-primary btn-xl rounded-pill mt-5">
							Learn More
						</a>
					</div>
				</div>
				<div className="bg-circle-1 bg-circle"></div>
				<div className="bg-circle-2 bg-circle"></div>
				<div className="bg-circle-3 bg-circle"></div>
				<div className="bg-circle-4 bg-circle"></div>
			</header>

			<a id="learn-more"></a>
			<section>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 order-lg-2">
							<div className="p-5">
								<img
									className="img-fluid"
									src={require("../assets/images/calling.svg")}
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6 order-lg-1">
							<div className="p-5">
								<h2 className="display-4">Speech To Text</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
									aliquid, mollitia odio veniam sit iste esse assumenda amet
									aperiam exercitationem, ea animi blanditiis recusandae!
									Ratione voluptatum molestiae adipisci, beatae obcaecati.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="p-5">
								<img
									className="img-fluid"
									src={require("../assets/images/speech.svg")}
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="p-5">
								<h2 className="display-4">Natural Language Processing</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
									aliquid, mollitia odio veniam sit iste esse assumenda amet
									aperiam exercitationem, ea animi blanditiis recusandae!
									Ratione voluptatum molestiae adipisci, beatae obcaecati.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 order-lg-2">
							<div className="p-5">
								<img
									className="img-fluid"
									src={require("../assets/images/interface.svg")}
									alt=""
								/>
							</div>
						</div>
						<div className="col-lg-6 order-lg-1">
							<div className="p-5">
								<h2 className="display-4">User-Friendly Interface</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
									aliquid, mollitia odio veniam sit iste esse assumenda amet
									aperiam exercitationem, ea animi blanditiis recusandae!
									Ratione voluptatum molestiae adipisci, beatae obcaecati.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="py-5 bg-black">
				<div className="container">
					<p className="m-0 text-center text-white small">
						Copyright &copy; Your Website 2020
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Home;
