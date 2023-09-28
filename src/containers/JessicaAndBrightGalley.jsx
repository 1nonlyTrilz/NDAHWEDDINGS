import React from 'react';
import Modal from 'react-modal';
import { RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
const importAll = (r) => r.keys().map(r);
const JessicaAndBrightGallery = (props) => {
  const images = importAll(require.context('./jessicaandbright', false, /\.(png|jpe?g|svg)$/));
  const gallerySize = Math.ceil(images.length / 3)
  const galleryItems1 = images.slice(0, gallerySize);
  const galleryItems2 = images.slice(gallerySize, gallerySize * 2);
  const galleryItems3 = images.slice(gallerySize * 2);
  const openModal = (imageUrl) => {
    props.setSelectedImage(imageUrl);
    props.setModalIsOpen(true);
  };
  const closeModal = () => {
    props.setSelectedImage(null);
    props.setModalIsOpen(false);
  };
  const bodyElement = document.body
  props.modalIsOpen === true ? bodyElement.style.overflowY = 'hidden' : bodyElement.style.overflowY = 'scroll'
  const handleDrag = (event, info) => {
    closeModal()
    console.log('Dragged to:', info.offset.y);
  };
  return (
    <div className="py-12">
      <div className="mx-auto px-4 sm:px-16 lg:px-16">
        <h2 className="text-4xl  text-gray-900 mb-8 text-center font-light ">Jessica & Bright White Wedding Gallery</h2>
        <div className="flex justify-center gap-8 items-start flex-wrap">
          <div className='max-sm:w-5/5 w-96 flex flex-col gap-y-8'>
          {galleryItems1.map((imageUrl, index) => (
              <img
                src={imageUrl}
                alt={`Imagess ${index + 1}`}
                data-aos="fade-up"
                className="w-full object-cover cursor-pointer"
                onClick={() => openModal(imageUrl)}
              />
          ))}
          </div>
          <div className='max-sm:w-5/5 w-96 flex flex-col gap-y-8'>
          {galleryItems2.map((imageUrl, index) => (
              <img
                src={imageUrl}
                alt={`Imagess ${index + 1}`}
                data-aos="fade-up"
                className="w-full object-cover cursor-pointer"
                onClick={() => openModal(imageUrl)}
              />
          ))}
          </div>
          <div className='max-sm:w-5/5 w-96 flex flex-col gap-y-8'>
          {galleryItems3.map((imageUrl, index) => (
              <img
                src={imageUrl}
                alt={`Imagess ${index + 1}`}
                data-aos="fade-up"
                className="w-full object-cover cursor-pointer"
                onClick={() => openModal(imageUrl)}
              />
          ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="p-4 w-full h-full flex  items-center outline-none justify-center mx-auto backdrop-brightness-50 backdrop-blur-sm"
        overlayClassName="fixed inset-0 z-50 flex justify-center items-center"
      >
        {props.selectedImage && (
          <AnimatePresence>
          <motion.div
          onDragEnd={handleDrag}
          initial={{y:'100%'}}
            animate={{y:'0'}}
            exit={{y:'100%'}}
            drag='y'
            dragConstraints={{top:0, bottom: 0 }}
          className='h-full w-full flex justify-center max-sm:flex-col gap-2 items-center' onClick={()=>{closeModal()}}>

          <motion.img
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
            src={props.selectedImage}
            alt="Selected"
            className=" h-screen max-sm:h-4/6 w-auto max-sm:rounded-sm"
          />
          < motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className='flex justify-center items-center '
          >
            <RiCloseLine className=' text-white text-4xl absolute top-5 right-10 cursor-pointer max-sm:hidden' onClick={()=>{closeModal()}}/>
            <p className=' text-light sm:hidden'>swipe or tap to exit</p>
          </ motion.div>
          </motion.div>
          </AnimatePresence>
        )}
      </Modal>
    </div>
  );
};

export default JessicaAndBrightGallery;

