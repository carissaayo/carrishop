import logo from "../assets/imgs/new-logo.png"
import Footer from "../components/HomeComponents/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="w-full h-full">
      <div className="w-full  flex flex-col items-center justify-center h-[20vh] gap-5">
        <h1 className="text-2xl font-bold ">Privacy Policy </h1>
        <h2 className="text-lg">HOME / PRIVACY POLICY</h2>
      </div>
      <div className="bg-[#F8F8F8] h-[50vh] flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="fairshop logo" className="w-[200px]" />
        <h2 className="text-lg font-bold">WHO WE ARE</h2>
        <p className="w-[70%] lg:w-[50%] text-center">
          Praesent ornare, ex a interdum consectetur, lectus diam sodales elit,
          vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper
          viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse.
        </p>
      </div>

      {/* Info Con */}
      <section className="h-full w-full pt-10 mb-40">
        <h1 className="font-bold text-sm sm:text-lg md:text-xl text-center mb-10 w-[90%] md:w-full mx-[auto] md:mx-0">
          WHAT PERSONAL DATA WE COLLECT AND WHY WE COLLECT IT
        </h1>

        {/* Info item */}
        <div className="w-[90%] md:w-full border-2 border-[#EEEEEE]  p-6  md:p-10 mb-10 mx-[auto] md:mx-0">
          <h2 className="font-bold mb-5 text-sm sm:text-base md:text-lg">
            <span className="text-secondaryColor mr-5">1.</span>
            COMMENTS
          </h2>
          <p className="text-xs sm:text-sm md:text-base">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* Info item */}
        <div className="w-[90%] md:w-full border-2 border-[#EEEEEE] p-6  md:p-10 mb-10 mx-[auto] md:mx-0">
          <h2 className="font-bold mb-5 text-sm sm:text-base md:text-lg">
            <span className="text-secondaryColor mr-5">2.</span>
            MEDIA
          </h2>
          <p className="text-xs sm:text-sm md:text-base">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* Info item */}
        <div className="w-[90%] md:w-full border-2 border-[#EEEEEE]  p-6  md:p-10 mb-10 mx-[auto] md:mx-0">
          <h2 className="font-bold mb-5 text-sm sm:text-base md:text-lg">
            <span className="text-secondaryColor mr-5">3.</span>
            FORMS
          </h2>
          <p className="text-xs sm:text-sm md:text-base">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* Info item */}
        <div className="w-[90%] md:w-full border-2 border-[#EEEEEE]  p-6  md:p-10 mb-10 mx-[auto] md:mx-0">
          <h2 className="font-bold mb-5 text-sm sm:text-base md:text-lg">
            <span className="text-secondaryColor mr-5">4.</span>
            HOW LONG WE RETAIN YOUR DATA
          </h2>
          <p className="text-xs sm:text-sm md:text-base">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>

        {/* Info item */}
        <div className="w-[90%] md:w-full border-2 border-[#EEEEEE]  p-6  md:p-10 mb-10 mx-[auto] md:mx-0">
          <h2 className="font-bold mb-5 text-sm sm:text-base md:text-lg">
            <span className="text-secondaryColor mr-5">5.</span>
            WHAT RIGHTS YOU HAVE OVER YOUR DATA
          </h2>
          <p className="text-xs sm:text-sm md:text-base">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </a>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
