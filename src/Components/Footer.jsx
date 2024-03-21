import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-100 px-2 sm:px-20 py-8 text-gray-600 mt-8 z-20">

            <div className="flex lg:flex-row flex-col lg:space-x-32 space-y-8 lg:space-y-0">

                <div className="whats_new flex flex-col space-y-3">
                    <p className="font-bold text-base ">What's New</p>
                    <p className="text-xs text-gray-600  hover:border-b-2 hover:border-gray-700">Microsoft 365</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Games</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Surface 9 pro</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Surface Laptop 5</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Surface Laptop Go 2</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Windows 11 apps</p>
                </div>

                <div className="microsoft_store flex flex-col space-y-3">
                    <p className="font-bold text-base">Microsoft Store</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Account Profile</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Download Center</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft Store Support</p>

                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Returns</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Order Tracking</p>
                </div>

                <div className="education flex flex-col space-y-3">
                    <p className="font-bold text-base">Education</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft in education</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Devices in education</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft teams for education</p>

                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft 365 education</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Office Education</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Educator training and developement</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Deals for students and parents </p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Azure for students </p>
                </div>


                <div className="business flex flex-col space-y-3">
                    <p className="font-bold text-base">Business</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft cloud</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Devices security</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Azure</p>

                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Dynamics 365</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft 365</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft Advertising</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft Industry</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft Teams</p>
                </div>

                <div className="develolper_it flex flex-col space-y-3">
                    <p className="font-bold text-base">Developer & IT</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Developer center</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Documentation</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft Learn</p>


                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft Tech Community</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Azure Marketplace</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">App Source</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Microsoft Power Platform</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Visual studio</p>
                </div>

                <div className="company flex flex-col space-y-3">
                    <p className="font-bold text-base">Careers</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">About Microsoft</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Company News</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Privacy at microsoft</p>


                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Investors</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Security</p>
                    <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Sustainability</p>

                </div>
            </div>

            {/* <div className='flex w-full'>
    <div className="flex justify-start space-x-2 pt-12 w-full">

    <span className="material-symbols-outlined ">
public
</span>
<p className='text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 pt-1'>English(India)</p>
<div className='flex px-8  space-x-4 w-full'>
<span className="material-symbols-outlined ">
toggle_on
</span>
<p className='text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 pt-1'>Your Privacy Choices</p>
<div className='justify-end '>
    <p>asda</p>
</div>

</div>

    </div>

   

</div> */}


            <div className="lg:flex  justify-between flex-col lg:flex-row w-full pt-12">


                <div className="flex  lg:space-x-2 flex-col lg:flex-row">

                    <div className="flex space-x-4">
                    <span className="material-symbols-outlined ">
                        public
                    </span>
                    <p className='text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 pt-1'>English(India)</p>
                    </div>
                    <div className='flex lg:px-8  space-x-4 w-full'>
                        <span className="material-symbols-outlined ">
                            toggle_on
                        </span>
                        <p className='text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 pt-1'>Your Privacy Choices</p>


                    </div>

                </div>

                <div className=" flex space-x-7  flex-wrap  mt-4 lg:mt-0">

                        <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 mx-auto">Contact Microsoft</p>
                        <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 mx-auto">Privacy</p>
                        <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 mx-auto">Terms of use</p>
                        <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 mx-auto">Trademarks</p>
                        <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 mx-auto">About our ads</p>
                        <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700 mx-auto">&copy; Microsoft 2024</p>
                        {/* <p className="text-xs text-gray-600 hover:border-b-2 hover:border-gray-700">Contact Microsoft</p> */}

                </div> 

            </div>
        </footer>
    )
}

export default Footer