import React from "react";

const Footer = () => {
  return (
    <div className="no-underline text-white  ">
      <footer class="p-4     shadow md:px-6 md:py-8 rounded   bg-black/10">
        <div class="sm:flex sm:items-center sm:justify-between m-3">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 ml-9 justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1598/1598196.png"
              class="mr-3 h-8"
              alt="Logo"
            />
            <p class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
              OEARTH
            </p>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-white">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" /> */}
        <div className=" "> 
        <span class="block text-sm text-white sm:text-center dark:text-white ">
          © 2022{" "}
          <a class="text-white">
            OEARTH™
          </a>
          . All Rights Reserved.
        </span>
          
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
