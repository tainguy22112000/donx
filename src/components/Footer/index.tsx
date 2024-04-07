export const Footer = () => {
  return (
    <footer className="px-5 py-[30px] bg-black flex flex-col items-center justify-center md:flex-row md:px-0 md:py-[34px] lg:py-8">
      <ul className="text-white max-w-[764px] w-full flex flex-col justify-center md:justify-between md:flex-row lg:max-w-[936px]">
        <li>
          <div className="mb-1 text-[13px] uppercase font-bold text-gray-2">
            StarkDeck Corp Ltd.,
          </div>
          <ul className="gap-[5px] md:max-w-[297px]">
            <li className="ml-5 text-[13px] list-disc leading-loose lg:text-sm">
              38 Nguyen Hue Street, Ben Nghe Ward, District 1, Ho Chi Minh City
            </li>
            <li className="ml-5 list-disc text-[13px] leading-loose lg:text-sm">
              partnership@starkdeck.net
            </li>
          </ul>
        </li>

        <hr className="vertical-divider md:h-[131px] md:w-px m-0" />

        <li>
          <div className="mb-1 text-[13px] uppercase font-bold text-gray-2">DONX</div>
          <ul className="text-white grid grid-cols-2 gap-[5px] md:grid-cols-1">
            <li className="text-[13px] leading-loose">
              <a href="https://starkdeck.net" className="text-[13px] leading-loose decoration-0">
                Home
              </a>
            </li>
            <li className="text-[13px] leading-loose">About us</li>
            <li className="text-[13px] leading-loose">
              <a
                className="text-[13px] leading-loose decoration-0"
                href="https://starkdeck.net/starkdeck-leadership"
              >
                Leadership
              </a>
            </li>
            <li className="text-[13px] leading-loose">News</li>
          </ul>
        </li>

        <hr className="vertical-divider md:h-[131px] md:w-px m-0" />

        <li>
          <div className="mb-1 text-[13px] uppercase font-bold text-gray-2">CUSTOMER SERVICES</div>
          <ul className="text-white grid grid-rows-2 gap-[5px]">
            <li className="text-[13px] leading-loose">Terms and Conditions</li>
            <li className="text-[13px] leading-loose">Q&A List</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};
