export default function AboutPublicRoute() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              About Chadslab Solutions
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              We are a small IT business tucked away in the Lilloot, BC area
              providing a variation of IT related services.
            </p>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <p>We the offer following services</p>

              <ul role="list">
                <li>Managed IT Services</li>
                <li>Web Development</li>
                <li>Manages Internet Services</li>
              </ul>

              {/* <h3>How we’re different</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et.
                Consectetur pretium in volutpat, diam. Montes, magna cursus
                nulla feugiat dignissim id lobortis amet. Laoreet sem est
                phasellus eu proin massa, lectus. Diam rutrum posuere donec
                ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Mauris ullamcorper imperdiet nec egestas mi quis quam ante
                vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum
                id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu,
                mi neque, ornare suspendisse amet, nibh. Facilisi volutpat
                lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                imperdiet ac eros, diam mauris, tortor. Risus id sit molestie
                magna.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
