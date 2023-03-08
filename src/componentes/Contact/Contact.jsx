import React from 'react';

const Contact = () => {
	return (
		<section className="mb-4 container">
			<h2 className="h1-responsive font-weight-bold text-center my-4">
				CONTACTENOS!!
			</h2>

			<p className="text-center w-responsive mx-auto mb-5" id="formSub">
				Por favor ingrese sus datos y su pregunta, en breve le responderemos!!
			</p>

			<div className="row justify-content-center align-items-center">
				<div className="col-md-10 mb-md-0 mb-5 text-center">
					<form
						id="contact-form"
						name="contact-form"
						action="mail.php"
						method="POST"
					>
						<div className="row">
							<div className="col-md-6">
								<div className="md-form mb-0">
									<input
										type="text"
										id="name"
										name="name"
										className="form-control"
									/>
									<label htmlFor="name" className="formInput">
										INGRESE SU NOMBRE
									</label>
								</div>
							</div>

							<div className="col-md-6">
								<div className="md-form mb-0">
									<input
										type="text"
										id="email"
										name="email"
										className="form-control"
									/>
									<label htmlFor="email" className="formInput">
										INGRESE SU CORREO
									</label>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="md-form mb-0">
									<input
										type="text"
										id="subject"
										name="subject"
										className="form-control"
									/>
									<label htmlFor="subject" className="formInput">
										ASUNTO
									</label>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<div className="md-form">
									<textarea
										type="text"
										id="message"
										name="message"
										rows="4"
										className="form-control md-textarea"
									></textarea>
									<label htmlFor="message" className="formInput">
										INGRESE SU MENSAJE O PREGUNTA
									</label>
								</div>
							</div>
						</div>
						<div className="text-center text-md-left">
							<label>
								<input type="submit" value="ENVIAR" />
							</label>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
