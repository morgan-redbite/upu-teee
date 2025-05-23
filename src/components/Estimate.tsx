import { BookCollection, GeneralState } from "../hooks";

export const EstimateStep = ({
    bookState,
    collectionData,
}: {
    bookState: GeneralState;
    collectionData: BookCollection;
}) => {

    return (
        <>
            {bookState.isLoading && (
                <div className="flex justify-center items-center px-5">
                    <div className="bg-white">
                        <h2 className="text-xl font-semibold mb-4">Estimating Price...</h2>
                        <p className="text-gray-600">Please wait while we calculate the estimated price for your collection.</p>
                        {/* video in public/videos */}
                    </div>
                    <video
                            className="w-full h-auto mt-4 w-[200px]"
                            src="/videos/estimating.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            {!bookState.isLoading && bookState.isSuccess && (
                <div className="flex justify-center items-center px-5">
                    <div className="bg-white">
                        <h2 className="text-xl font-semibold mb-4">Estimated Price</h2>
                        <p className="text-gray-600">The estimated price for your collection is ${collectionData?.estimatedPrice || 0}</p>
                    </div>
                </div>
            )}
            {/* <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Booking Successful!</h3>
                <p className="text-gray-600">Your collection has been scheduled successfully.</p>
                <button
                onClick={close}
                className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                >
                Close
                </button>
            </div> */}
        </>
    )
}