<template>

    <section id="contact" class="section contact light animate" >
        <div class="flex justify-center items-center flex-col space-y-14 container mx-auto py-48 w-full lg:w-2/3">
				<div class="flex justify-center items-center flex-col space-y-4  mx-auto  ">
					<h2 class="text-default-blue text-center  text-4xl lg:text-5xl">Let's Connect!</h2>
					<p class="text-center text-1.2xl text-default-dark-blue  lg:w-2/3">
						My virtual door is always open for a friendly chat or to
						answer any questions. Feel free to drop me a line.
					</p>
				</div>
				<form class="w-full lg:w-2/3 mx-auto" action="https://usebasin.com/f/8babbc19d473" method="POST">
					<div class="flex flex-col lg:flex-row flex-nowrap justify-between items-center space-y-7 lg:space-y-0">
						<div class="flex flex-col items-start justify-center w-full lg:w-[45%] space-y-2">
							<label class=" font-light text-default-dark-blue" for="name"> Name: </label>
							<input class="small-label w-full px-2 py-4 rounded-lg" type="name" id="name"
								name="name" required />
						</div>
						<div class="flex flex-col items-start justify-center w-full lg:w-[45%] space-y-2">
							<label class=" font-light text-default-dark-blue" for="email"> Email: </label>
							<input class="small-box w-full px-2 py-4 rounded-lg " type="email" id="email"
								name="email" required />
						</div>
					</div>
					<div class="flex flex-col items-start justify-center  w-full my-10 space-y-1">
						<label class=" font-light text-default-dark-blue" for="message"> Message: </label>
						<textarea rows="5" cols="25" class="w-full px-2 py-4 large-box rounded-lg "
							id="message" name="message" required />
					</div>

					<input class="submit flex justify-center button   mx-auto font-light button  light-blue" type="submit"
						value="Submit" />
				</form>
			</div>
    </section>

</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.textarea[rows] {
	height: initial;
}



input, textarea{
	font-size: 1.2rem;
	border: 1px solid $default-blue;
    background-color: rgba($default-white, .7)
}
textarea{
	border: 1px solid $default-blue;
}
</style>