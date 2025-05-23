import React, { useState } from 'react';
import { Calendar, Clock, Package, AlertCircle, DollarSign } from 'lucide-react';
import { BookCollection, useBookCollection } from '../hooks';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { EstimateStep } from './Estimate';

const initialCollectionForm: BookCollection = {
  product: '',
  collectionDate: '',
  pickupTime: ''
}
const CollectionForm: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [formData, setFormData] = useState<BookCollection>(initialCollectionForm);

  const [errors, setErrors] = useState({
    product: false,
    collectionDate: false,
    pickupTime: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when field is filled
    if (value && errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const { bookState, onBookCollection, collectionData } = useBookCollection();

  const handleEstimatePrice = () => {
    // Functionality would be added here
    // alert('Price estimation feature will be implemented here');
    open();
    onBookCollection(formData);
  };

  const [isConfiming, setIsConfiming] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleConfirmBooking = () => {
    setIsConfiming(true);
    setTimeout(() => {
      setIsConfiming(false);
      setConfirm(true);
    }, 3000);
  }

  const handleClose = () => {
    setFormData(initialCollectionForm);
    // reset everything
    setIsConfiming(false);
    setConfirm(false);
    close();
  }
  const products = [
    'iPhone 15',
    'iPhone 15 Pro',
    'iPhone 15 Pro Max',
    'iPhone 16',
    'iPhone 16 Pro',
    'MacBook Air (M2)',
    'MacBook Pro (M2)',
    'MacBook Pro (M3)',
    'MSI Stealth 14',
    'Lenovo Legion 5',
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">Schedule Collection</h2>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="product" className="block text-sm font-medium text-gray-700">
            Product
          </label>
          <div className="relative">
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className={`pl-10 block w-full rounded-md shadow-sm 
                focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50
                py-3 bg-white border ${errors.product ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select a product</option>
              {products.map(product => (
                <option key={product} value={product}>{product}</option>
              ))}
            </select>
            <Package className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            {errors.product && (
              <AlertCircle className="absolute right-3 top-3.5 h-5 w-5 text-red-500" />
            )}
          </div>
          {errors.product && (
            <p className="text-red-500 text-xs mt-1">Please select a product</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="collectionDate" className="block text-sm font-medium text-gray-700">
            Collection Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="collectionDate"
              name="collectionDate"
              value={formData.collectionDate}
              onChange={handleChange}
              className={`pl-10 block w-full rounded-md shadow-sm 
                focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50
                py-3 bg-white border ${errors.collectionDate ? 'border-red-500' : 'border-gray-300'}`}
            />
            <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            {errors.collectionDate && (
              <AlertCircle className="absolute right-3 top-3.5 h-5 w-5 text-red-500" />
            )}
          </div>
          {errors.collectionDate && (
            <p className="text-red-500 text-xs mt-1">Collection date is required</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700">
            Pick-up Time
          </label>
          <div className="relative">
            <input
              type="time"
              id="pickupTime"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className={`pl-10 block w-full rounded-md shadow-sm 
                focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50
                py-3 bg-white border ${errors.pickupTime ? 'border-red-500' : 'border-gray-300'}`}
            />
            <Clock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            {errors.pickupTime && (
              <AlertCircle className="absolute right-3 top-3.5 h-5 w-5 text-red-500" />
            )}
          </div>
          {errors.pickupTime && (
            <p className="text-red-500 text-xs mt-1">Pick-up time is required</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleEstimatePrice}
          className="group w-full flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 
            text-white rounded-lg shadow-sm transition-all duration-300 
            hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
        >
          <DollarSign className="h-5 w-5 mr-2 group-hover:animate-pulse" />
          Estimate Price
        </button>
      </form>

      <>
          <Modal
            opened={opened}
            onClose={handleClose}
            title="Booking Estimation"
            centered
            size="lg"
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              paddingLeft: '0px',
              alignItems: 'center',
            }}
          >
            {!confirm && (
              <EstimateStep bookState={bookState} collectionData={collectionData} />
            )}
            {!bookState.isLoading && bookState.isSuccess && !confirm && (
              <div className="flex justify-center items-center px-5 gap-2">
                {/* Confirm button */}
                <button
                  onClick={handleConfirmBooking}
                  className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  {isConfiming ? (
                    <>
                      <span className="animate-pulse">Confirming...</span>
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
                <button
                  onClick={handleClose}
                  className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  Cancel
                </button>
              </div>
            )}
            {isConfiming && !confirm && (
              <div className='w-full flex justify-center'>
              <video
                className="w-full h-auto mt-4 w-[150px]"
                src="/videos/loader.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              </div>
            )}
            {confirm && (
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Collection for Booking Confirmed!</h3>
                <p className="text-gray-600">
                  Transaction ID: {collectionData?.transactionId}
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                  Close
                </button>
              </div>
            )}
          </Modal>
      </>
    </div>
  );
};

export default CollectionForm;