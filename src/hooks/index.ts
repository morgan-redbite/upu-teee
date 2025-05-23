import axios from "axios";
import { useState } from "react";

const SERVER_URL = 'http://localhost:8000';

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface GeneralState {
    isLoading: boolean;
    isSuccess: boolean;
    error: string | null;
}

const initialState: GeneralState = {
    isLoading: false,
    isSuccess: false,
    error: null,
};

export interface BookCollection {
    /** Optional date of booking */
    date?: string;
    /** Selected product identifier */
    product: string;
    /** Date when the collection will occur */
    collectionDate: string;
    /** Time when the collection will occur */
    pickupTime: string;

    // transactionId?: string;
    transactionId?: string;

    estimatedPrice?: number;
  }
  
export const useBookCollection = () => {
    const [bookState, setBookState] = useState<GeneralState>(initialState);
    const [collectionData, setCollectionData] = useState<BookCollection>({
        product: '',
        collectionDate: '',
        pickupTime: ''
    });

    const onBookCollection = async (_data: BookCollection) => {
        setBookState({ ...bookState, isLoading: true });
        try {
            const response = await axios.post(`${SERVER_URL}/api/v1/upu/book`, {
                ..._data,
            });

            const message = response.data.message;
            const data = response.data.data;

            if (message !== 'Success') {
                throw 'Booking failed';
            }

            const coldata = {
                ..._data,
                transactionId: data.transactionId,
                estimatedPrice: data.estimatedPrice,
            }

            console.log('Booking data:', coldata);
            setCollectionData({
                ..._data,
                transactionId: data.transactionId,
                estimatedPrice: data.estimatedPrice,
            });

            setBookState((prev) => ({
                ...prev,
                isSuccess: true,
                error: null,
            }));

        } catch (error) {
            setBookState((prev) => ({
                ...prev,
                isSuccess: false,
                error: "An error occurred while booking the collection.",
            }));
        } finally {
            setTimeout(() => {
                setBookState((prev) => ({
                    ...prev,
                    isLoading: false,
                }));
            }, 3500);
        }
    }

    return {
        bookState,
        onBookCollection,
        collectionData,
    }
}