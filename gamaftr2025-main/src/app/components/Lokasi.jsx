// pages/MobileTimeline.js
import React from 'react';

const Lokasi = () => {
  return (
   <div className="relative z-30 flex justify-center mx-auto pt-36 md:mt-5 font-inter" id='event'>
    <div className="flex justify-center">
    <div className="sm:border-[3px] sm:bg-[#d3d3d3]/60 backdrop-blur-md  sm:border-space2 sm:rounded-2x1 rounded-x1  relative z-40 md:-translate-y-[100px] lg:-translate-y-[200px] max-w-[1280px]">
    <div className="absolute z-40 right-[0%] bottom-[0%] -translate-x-1/2 sm:hidden translate-y-1/2">
            <img loading="lazy" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/batu%20angkasa.PNG?raw=true" alt="" className="" /> </div>
            <div className="absolute z-40 left-[0%] bottom-[0%] translate-x-1/3 sm:hidden translate-y-1/2">
            <img loading="lazy" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Group%2050.png?raw=true" alt="" className="" /> </div>

    <h1 className="hidden sm:pt-10  text-3xl font-extrabold text-white s,:text-center sm:flex sm:justify-center rounded-x1 font-audiowide md:text-5xl text lg:text-7xl md:pt-5">RANGKAIAN ACARA</h1>
    <div className="justify-center scale-75 xl:scale-75 sm:scale-[70%]  lg:scale-[60%] md:scale-[45%] md:-translate-y-[50px]  sm:-translate-y-[30px] sm:flex sm:flex-row-2 sm:gap-6 sm:grid-flow-col">
    <div className="md:w-1/2 md:px-8 sm:hidden scale-100 text-7xl font-spacegrotesk font-extrabold text-white rounded-2xl border-[4px] border-space2 bg-[#d3d3d3]/60 backdrop-blur-md  shadow-xl shadow-space2 xl:text-8xl p-4 lg:py-0 xl:p-4 pl-10mr-[180px] relative z-40 text-border-space2 text-center">EVENTS</div>
    <div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2 object-cover bg-space2">
  <figure><img loading="lazy" src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/opening.png?raw=true" alt="Shoes" className='md:max-w-[350px]'  /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-[#FDD134] font-outfit">Opening</h2>
     <p className='font-outfit text-xl text-white sm:text-sm md:text-sm'>Simbolisasi pembukaan rangkaian kegiatan GAMAFTR 2025</p>
    <div className="justify-end card-actions">
      <button className="border-none btn btn-primary bg-space1 backdrop-blur-lg hover:bg-white hover:text-space2  text-white font-outfit"><a href="https://maps.app.goo.gl/rEaZcotMjmZvzWAc8">Lokasi</a></button>
      <button className="border-none bg-space1 hover:bg-white hover:text-space2 text-white font-outfit btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>See All</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-space1">
    <h3 className="md:text-[10px] xl:text-lg font-bold font-outfit text-[#FDD134]">Opening</h3>
    <p className="py-4 font-outfit"> Simbolisasi pembukaan rangkaian kegiatan GAMAFTR 2025 sebagai langkah awal untuk menyapa seluruh siswa/i yang ada di Provinsi Riau.</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-outfit font-bold">Event Information</h1>
            <ul className="font-outfit">
                <li><strong>Lokasi: </strong> CFD, Jl. Sudirman, Pekanbaru</li>
                <li><strong>Tanggal: </strong> 5 Januari 2025</li>
                <li><strong>Waktu: </strong> 07.00 - 09.00</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-space2 font-outfit text-white hover:text-space2">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
{/* roadshow */}
<div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2 bg-space2">
  <figure><img loading="lazy" src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/roadshow.png?raw=true" alt="Shoes" className='md:max-w-[350px]'  /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-[#FDD134] font-outfit">Roadshow</h2>
     <p className='font-outfit text-xl text-white sm:text-sm md:text-sm'>Rangkaian sosialisasi ke SMA/SMK/MA</p>
    <div className="justify-end card-actions">
      <button className="border-none bg-space1 text-white hover:bg-white hover:text-space2  font-outfit btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>See All</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-space1">
    <h3 className="md:text-[10px] xl:text-lg font-bold font-outfit text-[#FDD134]">Roadshow</h3>
    <p className="py-4 font-outfit"> Rangkaian sosialisasi ke SMA/SMK/MA/Sederajat di Provinsi Riau yang akan dilaksanakan secara luring maupun daring yang akan diikuti oleh siswa/i kelas 12</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold font-outfit">Event Information</h1>
            <ul className="font-outfit">
                <li><strong>Lokasi: </strong> 45+ SMA/SMK/MA, Online/Offline</li>
                <li><strong>Tanggal: </strong> 6-17 Januari 2025</li>
                <li><strong>Waktu: </strong> -</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-space2 font-outfit text-white hover:text-space2">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
{/* Tryout */}
<div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2 bg-space2">
  <figure><img loading="lazy" src="https://github.com/SyaidFarhan/Gamaftr/blob/main/Gamaft/resize/IMG_3165-min%20(2)%20(1)%20(1).png?raw=true" alt="Shoes" className='md:max-w-[350px]'  /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-[#FDD134] font-outfit">Try Out</h2>
     <p className='font-outfit text-xl text-white sm:text-sm md:text-sm'> GAMAFTR 2025 menyediakan wadah bagi siswa/i di Provinsi Riau yang ingin mempersiapkan diri masuk Perguruan Tinggi</p>
    <div className="justify-end card-actions">
    <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className="border-none btn btn-primary bg-space1 hover:bg-white hover:text-space2  text-white font-outfit">Lokasi</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-outfit">
    <li><a href='https://maps.app.goo.gl/bbtERxCf86KVU3bh9'>Pekanbaru</a></li>
    <li><a href='https://maps.app.goo.gl/p92DtTRYTEaXPsPT8'>Duri</a></li>
    <li ><a href='https://maps.app.goo.gl/NBi4vTxm2My8aCGr8'>Dumai</a></li>
  </ul>
</div>
      <button className="border-none bg-space1 hover:bg-white hover:text-space2 text-white font-outfit btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>See All</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-space1">
    <h3 className="md:text-[10px] xl:text-lg font-outfit font-bold text-[#FDD134]">Try Out</h3>
    <p className="py-4 w-sm font-outfit"> GAMAFTR 2025 menyediakan wadah bagi siswa/i di Provinsi Riau yang ingin mempersiapkan diri masuk Perguruan Tinggi serta menguji kemampuannya yang akan didukung oleh platform edukasi terbaik</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold font-otufit">Event Information</h1>
            <ul className='mb-2 font-outfit'>
                <li><strong>Lokasi: </strong> MAN 2 Pekanbaru</li>
                <li><strong>Tanggal: </strong>18-19 Januari 2025</li>
                <li><strong>Waktu: </strong> 07.30 - Selesai</li>
            </ul>
            <ul className='mb-2 font-outfit'>
                <li><strong>Lokasi: </strong> SMAN 2 Mandau</li>
                <li><strong>Tanggal: </strong> 18 Januari 2025</li>
                <li><strong>Waktu: </strong> 07.30 - Selesai</li>
            </ul>
            <ul className='mb-2 font-outfit'>
                <li><strong>Lokasi: </strong> SMAN 2 Dumai</li>
                <li><strong>Tanggal: </strong> 19 Januari 2025</li>
                <li><strong>Waktu: </strong> 07.30 - Selesai</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-space2 font-outfit text-white hover:text-space2">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
{/* bedah kampus */}
<div className="mt-5 transition shadow-xl card card-compact sm:w-1/2 w-50 md:w-70 lg:[50%] xl:[20%] hover:scale-125 hover:z-40 hover:shadow-lg hover:shadow-space2 bg-space2">
  <figure><img loading="lazy" src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/bedahkampus.png?raw=true" alt="Shoes" className='md:max-w-[350px]' /></figure>
  <div className="card-body">
    <h2 className="font-bold card-title text-[#FDD134] font-outfit">Bedah Kampus</h2>
     <p className='font-outfit text-xl text-white sm:text-sm md:text-sm'> Penutupan rangkaian kegiatan GAMAFTR 2025 </p>
    <div className="justify-end card-actions">
      <a href="https://maps.app.goo.gl/dq43VoFxv9eHoysNA">
      <button className="border-none btn btn-primary bg-space1 hover:bg-white hover:text-space2  text-white font-outfit">Lokasi</button>
      </a>
      <button className="border-none bg-space1 hover:bg-white hover:text-space2 text-white font-outfit btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>See All</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box bg-space1">
    <h3 className="md:text-[10px] xl:text-lg font-bold font-outfit text-[#FDD134]">Bedah Kampus</h3>
    <p className="py-4 font-outfit">Penutupan rangkaian kegiatan GAMAFTR 2025 yang akan mendatangkan Guest Star serta penampilan dari mahasiswa/i UGM sebagai puncak acara</p>
    <div className="mb-8">
            <h1 className="mb-4 text-3xl font-bold font-outfit">Event Information</h1>
            <ul className="font-outfit">
                <li><strong>Lokasi: Menara Dang Merdu Bank Riau Kepri</strong> </li>
                <li><strong>Tanggal: </strong> 25 Januari 2025</li>
                <li><strong>Waktu: </strong> 07.30 - Selesai</li>
            </ul>
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-space2 font-outfit text-white hover:text-space2">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
    </div>
    </div>
   </div>
  </div>
  );
};

export default Lokasi;
