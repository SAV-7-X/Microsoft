import React from 'react'
import image1 from './images/RE1Mu3b.png';
import '../App.css';
import { useState , useEffect , useRef} from 'react';

function Navbar() {

    const [show, setshow] = useState('flex');
    const [search, setsearch] = useState('hidden');
    const [option, setoption] = useState('hidden');
    const [icon, seticon] = useState('expand_more');
    const [menu, setMenu] = useState('hidden');
    const [cross, setcross] = useState('menu')
    const [searchopen, setsearchopen] = useState('flex')
    const [SearchBox, setSearchBox] = useState('hidden')
    const closeButtonRef = useRef(null);

    // useEffect(() => {
        

    //     return () => {
    //         document.body.removeEventListener('click', handleClickOutside);
    //     };
    // }, [option]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                option === 'block' &&
                closeButtonRef.current &&
                !closeButtonRef.current.contains(event.target) // Check if click is outside the close button
            ) {
                setoption('hidden');
                seticon('expand_more');
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [option]);

   
    const handleClick = ()=>
    {
        if (option === 'block') {
            setoption('hidden');
            seticon('expand_more');
        }
        if (option === 'hidden') {
            setoption('block');
            seticon('expand_less');
        }
    }
    const handleSearch = ()=>
    {
        // if (show === 'hidden') {
        //     setsearch('flex');
        //     setshow('flex');
        //     // seticon('expand_less');
        // }
        if (show === 'flex') {
            
            setshow('hidden');
            setsearch('block');
            // seticon('expand_less');
        }
        console.log('click');
    }
    const handleCancel = (e)=>
    {
        e.preventDefault();
       
        if (search === 'block') {
            setshow('flex');
            setsearch('hidden');
            // seticon('expand_less');
        }
    }
    const handleMenu = ()=>
    {
        if (menu === 'hidden') {
            setMenu('block');
            setcross('close')
        }
        if (menu === 'block') {
            setMenu('hidden');
            setcross('menu')
        }
    }
    const toggleSearchBox = ()=>
    {
        if (searchopen === 'hidden') {
            setsearchopen('flex')
            setSearchBox('hidden')
        }
        if (searchopen === 'flex') {
            setsearchopen('hidden')
            setSearchBox('flex')
        }
    }

  return (
    <div className='lg:px-24 px-2'>
        <nav className='hidden lg:flex bg-white py-4  '>
       <img src={image1} className='w-28 mr-10 h-6 ' width={''} alt="" />
        <div className={`${show} justify-between w-full`}>
             <ul className='flex space-x-10 text-xs  pt-1 cursor-pointer'>
               
                <li      className='pt-1 hover:border-black hover:border-b-2'>Microsoft 365 </li>
                <li className='pt-1 hover:border-black hover:border-b-2'>Teams</li>
                <li     className='pt-1 hover:border-black hover:border-b-2'>Coplilot </li>
                <li    className='pt-1 hover:border-black hover:border-b-2'>Windows</li>
                <li   className='pt-1 hover:border-black hover:border-b-2'>Surface</li>
                <li  className='pt-1 hover:border-black hover:border-b-2'>XBox</li>
                <li className='pt-1 hover:border-black hover:border-b-2'>Support</li>
             </ul>
             <ul className='flex text-xs space-x-5 pt-1'>
                <li className="flex space-x-2 pt-1 cursor-pointer"> <span className='hover:border-black hover:border-b-2 '> All Microsoft</span> <span onClick={handleClick} ref={closeButtonRef} className="material-symbols-outlined mx-2">{icon}</span>  </li>
                <li className="flex space-x-2 pt-1 cursor-pointer" onClick={handleSearch}><span className='hover:border-black hover:border-b-2' onClick={handleSearch}>Search</span> <span className="material-symbols-outlined mx-2 ">search</span>  </li>
                <li className="flex space-x-2 pt-1 cursor-pointer"><span className='hover:border-black hover:border-b-2'>Cart</span> <span className="material-symbols-outlined mx-2 ">shopping_cart</span>  </li>
                <li className="flex space-x-2 pt-1 cursor-pointer"><span className='hover:border-black hover:border-b-2'>Sign in</span> <span className="material-symbols-outlined mx-2 ">person_add</span>  </li>
             </ul>




             
             </div>
             <div className={`w-full ${search}`}><form action="" className='flex space-x-5'>
                <input type="search" className='border-blue-800 border-2 w-full h-9 text-xs px-2' name="" placeholder='Search Microsoft.com' id="" /> <span className="material-symbols-outlined mx-2 absolute right-48 top-6" >search</span> <button className='bg-white text-center border-2 border-black  h-9 px-4 text-xs' onClick={handleCancel}>Cancel</button></form>
                </div>
        </nav>
        <div className={`bg-slate-100 w-3/4 float-end absolute right-0 ${option} text-black text-xs pt-8 z-10`}>
            <div className="list flex space-x-20  px-12">
        <ul className=''>
            <li className='font-semibold'>Software</li>
            <li className='mt-8 hover:border-black hover:border-b-2'>Windows Apps</li>
            <li className=' my-6  hover:border-black hover:border-b-2'>AI</li>
            <li className='my-6  hover:border-black hover:border-b-2'>One Drive</li>
            <li className='my-6  hover:border-black hover:border-b-2'>Outlook</li>
            <li className='my-6  hover:border-black hover:border-b-2'>Skype</li>
            <li className='my-6  hover:border-black hover:border-b-2'>One Note</li>
            <li className='my-6  hover:border-black hover:border-b-2'>Microsoft Teams</li>
        

           


      










        
        
        </ul>
        <ul className=''> 
        <li className='font-semibold'>PCs & Devices</li>
        <li className='mt-8'>Shop XBox</li>
            <li className=' my-6 hover:border-black hover:border-b-2'>Accessories</li>
        </ul>



        <ul className=''><li className='font-semibold'>Entertainement</li>
            <li className='mt-8'> Xbox Game Pass Ultimate</li>
            <li className=' my-6 hover:border-black hover:border-b-2'>Xbox Live Gold</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Xbox games</li>
            <li className='my-6 hover:border-black hover:border-b-2'>PC games</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Windows Digital Games</li></ul>
        
        
        
        
        <ul className=''>  <li className='font-semibold'>Business</li>
            <li className='mt-8'>Microsoft Cloud</li>
            <li className=' my-6 hover:border-black hover:border-b-2'>Microsoft Security</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Azure</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Dynamics 365</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Microsoft 365 for business</li>
            <li className='my6'>Microsoft Industry</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Microsoft Power Platform</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Windows 365</li>
            </ul>



            
























        <ul className=''>  <li className='font-semibold'>Developer & IT</li>
            <li className='mt-8'>Developer Center</li>
            <li className=' my-6 hover:border-black hover:border-b-2'>Documentation</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Microsoft Learn</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Microsoft Tech Community</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Azure Marketplace</li>
            <li className='my6'>AppSource</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Visual Studio</li></ul>
        <ul className=''>  <li className='font-semibold'>Other</li>
            <li className='mt-8'>Free downloads & security</li>
            <li className=' my-6 hover:border-black hover:border-b-2'>Education</li>
            <li className='my-6 hover:border-black hover:border-b-2'>Gift Cards</li>
            <li className='my-6 hover:border-black hover:border-b-2'>License</li>
            </ul>
            </div>
            <div className="bg-slate-400 justify-center py-2 items-center flex space-x-1 border-b-2 border-black"><span className="hover:border-black hover:border-b-2">VIEW SITEMAP </span> <span className="material-symbols-outlined " style={{fontSize:'30px'}}>
chevron_right
</span></div>
        </div>

        {/* for small devices */}
        <div className={`lg:hidden`}>
<nav className={`${searchopen} justify-between py-2`}>
    <div className="hamburger">
    <span className="material-symbols-outlined" onClick={handleMenu}>
{cross}
</span>
</div>
    <div className="hamburger">
    <span className="material-symbols-outlined" onClick={toggleSearchBox}>
search
</span>
</div>
<div>
    <img src={image1} className='w-24 h-6' alt="" />
</div>
<div>
<span className="material-symbols-outlined">
shopping_cart
</span>
</div>
<div>
<span className="material-symbols-outlined">
person_add
</span>
</div>


</nav>
<nav className={`${SearchBox} py-2 space-x-5 w-full`}>
<div className="hamburger">
<span className="material-symbols-outlined pt-1" onClick={toggleSearchBox}>
arrow_back
</span>
</div>
<div className="relative w-full">
    <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2">
        search
    </span>
    <input 
        type="search" 
        name="" 
        placeholder='Search Microsoft.com' 
        id="" 
        className='w-full h-8 pl-12 border-blue-900 border-2'
    />
</div>

</nav>
<div className=" listmob absolute right-0 left-0 w-full  bg-gray-200 z-50">
    <ul className={`space-y-10  ${menu}`}>
        <li className='px-2 py-2 border-dashed border-2 border-black'>Microsoft 365</li>
   
                <li className='px-2 hover:border-black hover:border-b-2'>Teams</li>
                <li     className='px-2 hover:border-black hover:border-b-2'>Coplilot </li>
                <li    className='px-2 hover:border-black hover:border-b-2'>Windows</li>
                <li   className='px-2 hover:border-black hover:border-b-2'>Surface</li>
                <li  className='px-2 hover:border-black hover:border-b-2'>XBox</li>
                <li className='px-2 hover:border-black hover:border-b-2'>Support</li>
                <li className='px-2 hover:border-black hover:border-b-2'>Software</li>
                <li className='px-2 hover:border-black hover:border-b-2'>PC Devices</li>
                <li className='px-2 hover:border-black hover:border-b-2'>Entertainment</li>
                <li className='px-2 hover:border-black hover:border-b-2'>Business</li>
                <li className='px-2 hover:border-black hover:border-b-2'>Developer & IT</li>
                <li className='px-2 hover:border-black hover:border-b-2'>Other </li>
                <li className='px-2  mb-2 border-black border-b-2'>View Sitemap</li>
                
    </ul>
</div>
</div>

        </div>
      

    
  )
}

export default Navbar
