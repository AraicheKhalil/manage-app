import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

export default function App(){

  // const btn = document.getElementById('menu-btn') 
  // const nav = document.getElementById('menu')

  // btn.addEventListener("click",()=>{
  //   btn.classList.toggle('open')
  //   nav.classList.toggle('flex')
  //   nav.classList.toggle('hidden')
  // })

  return (
    <>
      {/* navbar */}
      <nav className="relative container mx-auto p-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img src='./img/logo.png' alt='a' />
          </div>
          {/* Menu items */}
          <div className="hidden space-x-6 md:flex">
            <a href='#' className='hover:text-darkGrayisBlue font-semibold'>Pricing</a>
            <a href='#' className='hover:text-darkGrayisBlue font-semibold'>Product</a>
            <a href='#' className='hover:text-darkGrayisBlue font-semibold'>About us</a>
            <a href='#' className='hover:text-darkGrayisBlue font-semibold'>Careers</a>
            <a href='#' className='hover:text-darkGrayisBlue font-semibold'>Community</a>
          </div>
          {/* button */}
          <a className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'>Get Started</a>
          {/* Hamburger icon */}
          <button id='menu-btn' className="block humburger md:hidden focus:outline-none">
            <span className="humburger-top"></span>
            <span className="humburger-middle"></span>
            <span className="humburger-bottom"></span>
          </button>
        </div>

        {/* mobile menu */}
        <div className='md:hidden'>
          <div id="menu" className='absolute flex-col items-center hidden self-end py-8 mt-10
           space-y-6 font-bold bg-white sm:w-auto sm:self-center 
           left-6 right-6 drop-shadow-md'>
            <a href="">Pricing</a>
            <a href="">Product</a>
            <a href="">About us</a>
            <a href="">Careers</a>
            <a href="">Community</a>
          </div>
        </div>
      </nav>


      {/* Hero section */}
      <section id='Hero'>
        {/* flex container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* left item */}
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className="max-w-md text-4xl font-bold text-center md:text-left">
              Bring everyone to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayisBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
            <a className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
            </div>
          </div>
          {/* Image */}
          <div className='md:w-1/2'>
            <img src='./img/illustration-intro.png' alt='' />
          </div>
        </div>
      </section>


      {/* Features section */}
      <section id='features'>
        {/* flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* what's diffrent */}
          <div className='flex flex-col space-y-12 md:w-1/2' >
            <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
              Whats's diffrent about Manage?
            </h2>
            <p className='max-w-sm text-center text-darkGrayisBlue md:text-left'>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
          </div>
          {/*  Numbered list*/}
          <div className='flex flex-col space-y-8 md:w-1/2' >
            {/* list item 1 */}
            <div className="flex flex-col space-y-3 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                    01
                  </div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>
                      Track company-wide progress
                    </h3>
                </div>
              </div>
              
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block ">
                  Track company-wide progress
                </h3>
                <p className='text-darkGrayisBlue'>
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way down to the
                  smallest of details. Never lose sight of the bigger picture
                  again.
                </p>
              </div>
            </div>

            {/* list item 2 */}
            <div className="flex flex-col space-y-3 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                    02
                  </div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>
                      Advanced built-in reports
                    </h3>
                </div>
              </div>
              
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block ">
                  Advanced built-in reports
                </h3>
                <p className='text-darkGrayisBlue'>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            {/* list item 3 */}
            <div className="flex flex-col space-y-3 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
                <div className='flex items-center space-x-2'>
                  <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                    03
                  </div>
                    <h3 className='text-base font-bold md:mb-4 md:hidden'>
                      Everything you need in one place
                    </h3>
                </div>
              </div>
              
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block ">
                  Everything you need in one place
                </h3>
                <p className='text-darkGrayisBlue'>
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section id="testimonials">
        {/* container  */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center">
            What's diffrent About Manage?
          </h2>
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* testimonial 1 */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
              <img className='w-16 -mt-14' src="./img/avatar-anisha.png" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className='text-sm text-darkGrayisBlue'>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            {/* testimonial 2 */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
              <img className='w-16 -mt-14' src="./img/avatar-ali.png" alt="" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className='text-sm text-darkGrayisBlue'>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.” 
              </p>
            </div>
            {/* testimonial 3 */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
              <img className='w-16 -mt-14' src="./img/avatar-richard.png" alt="" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className='text-sm text-darkGrayisBlue'>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
          {/* button */}
          <div className='my-16'>
            <a className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</a>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section id='cta' className='bg-brightRed'>
        {/* flex container */}
        <div className='Container flex flex-col items-center justify-around
         px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
          {/* Heading */}
          <h2 className="text-5xl font-bold leading-tight text-center
           text-white md:text-4xl md:max-w-xl md:text-left "> 
            Simplify how your team works today
          </h2>
          <div>
          <a className='p-3 px-6 pt-2 font-bold text-black shadow-2xl baseline bg-white rounded-full baseline hover:bg-gray-900 hover:text-white'>Get Started</a>
          </div>
        </div>
      </section>

      {/* Footer */}
    <footer class="bg-veryDrakBlue">
      {/* Flex Container */}
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        {/* Logo and social links container */}
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src="./img/logo.png" class="h-8" alt="" />
          </div>
          {/* Social Links Container */}
          <div class="flex justify-center space-x-4">
            {/* Link 1 */}
            <a href="#">
              <img src="./img/icon-facebook.png" alt="" class="h-7" />
            </a>
            {/* Link 2 */}
            <a href="#">
              <img src="./img/icon-instagram.png" alt="" class="h-7" />
            </a>
            {/* Link 3 */}
            <a href="#">
              <img src="./img/icon-twitter.png" alt="" class="h-7" />
            </a>
            {/* Link 4 */}
            <a href="#">
              <img src="./img/icon-pinterest.png" alt="" class="h-7" />
            </a>
            {/* Link 5 */}
            <a href="#">
              <img src="./img/icon-youtube.png" alt="" class="h-7" />
            </a>
          </div>
        </div>
        {/* List Container */}
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

         {/* Input Container  */}
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

