import {
  FooterAdditionalLink,
  FooterPageLink,
  FooterSuccessStory,
  FooterTentangKami,
} from "@/constants";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <img
            src="https://altechomega.com/wp-content/uploads/2020/09/logo-e1668010727869.png"
            alt="Altech Omega Logo"
            className="w-40"
          />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-lg xs:text-2xl font-bold text-gray-900">
                  Get the latest information
                </h2>

                <p className="mt-4 text-xs xs:text-sm text-gray-500">
                  Subscribe to our newsletter to get the latest information on
                  our services.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Page Link</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterPageLink.map((page, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {page}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Additional Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterAdditionalLink.map((additional_link, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {additional_link}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">About Us</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterTentangKami.map((about, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {about}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Success Story</p>

              <ul className="mt-6 space-y-4 text-sm">
                {FooterSuccessStory.map((story, index) => (
                  <li
                    key={index}
                    className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                  >
                    {story}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2024. Altech Omega - by Ijlal Windhi. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li> Terms & Conditions </li>
              <li> Privacy Policy </li>
              <li> Cookies </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
