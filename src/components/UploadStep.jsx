// import { motion } from "framer-motion"
// import { Upload, X, Camera } from "lucide-react"

// const UploadStep = ({ uploadedImage, handleImageUpload, handleReupload, setStep, handleCameraCapture }) => {
//   return (
//     <motion.div
//       key="step1"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-md mx-auto"
//     >
//       <div className="bg-white shadow-lg rounded-lg p-8 text-center">
//         <Upload className="mx-auto h-16 w-16 text-blue-500" />
//         <h2 className="mt-6 text-2xl font-semibold text-gray-900">Upload an image</h2>
//         <p className="mt-2 text-sm text-gray-500">Choose a photo to turn into a caricature</p>
//         {uploadedImage ? (
//           <div className="mt-6 relative">
//             <img
//               src={uploadedImage || "/placeholder.svg"}
//               alt="Uploaded"
//               className="w-full max-h-64 object-contain rounded-lg"
//             />
//             <button
//               onClick={handleReupload}
//               className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-miracle-red/30"
//             >
//               <X className="w-5 h-5 text-gray-600" />
//             </button>
//             <button
//               onClick={() => setStep(2)}
//               className="mt-6 px-6 py-3 w-full border border-transparent text-base font-medium rounded-md shadow-sm text-miracle-white bg-miracle-darkBlue hover:bg-miracle-darkBlue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//             >
//               Next
//             </button>
//           </div>
//         ) : (
//           <div className="mt-6 flex flex-col gap-4 justify-center w-full">
//             <div className="w-full">
//                 <label className="inline-flex justify-center text-center items-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-miracle-white bg-miracle-darkBlue hover:bg-miracle-darkBlue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-200">
//                 <input type="file" className="sr-only" onChange={handleImageUpload} accept="image/*" />
//                 Select Image
//                 </label>
//             </div>
//             <div className="w-full">
//                 <button
//                 onClick={handleCameraCapture}
//                 className="inline-flex justify-center text-center items-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-miracle-white bg-miracle-darkBlue hover:bg-miracle-darkBlue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-200"
//                 >
//                 <Camera className="w-5 h-5 mr-2" />
//                 Capture
//                 </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   )
// }

// export default UploadStep

import { motion } from "framer-motion";
import { Upload, X, Camera } from "lucide-react";
import { useRef, useEffect } from "react";

const UploadStep = ({
  uploadedImage,
  handleImageUpload,
  handleReupload,
  setStep,
  handleCameraCapture,
  videoRef,
  canvasRef,
}) => {
  const videoElement = useRef(null);

  useEffect(() => {
    // Start Camera on mount
    const startCamera = async () => {
      try {
        if (videoRef.current && !videoRef.current.srcObject) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
          });
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera access error:", error);
      }
    };

    startCamera();

    // Stop Camera on unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [videoRef]);

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <Upload className="mx-auto h-16 w-16 text-blue-500" />
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">
          Upload an image
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Choose a photo to turn into a caricature
        </p>
        {uploadedImage ? (
          <div className="mt-6 relative">
            <img
              src={uploadedImage || "/placeholder.svg"}
              alt="Uploaded"
              className="w-full max-h-64 object-contain rounded-lg"
            />
            <button
              onClick={handleReupload}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-miracle-red/30"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setStep(2)}
              className="mt-6 px-6 py-3 w-full border border-transparent text-base font-medium rounded-md shadow-sm text-miracle-white bg-miracle-darkBlue hover:bg-miracle-darkBlue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-4 justify-center w-full">
            <div className="w-full">
              <label className="inline-flex justify-center text-center items-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-miracle-white bg-miracle-darkBlue hover:bg-miracle-darkBlue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-200">
                <input
                  type="file"
                  className="sr-only"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
                Select Image
              </label>
            </div>
            <div className="w-full">
              <button
                onClick={handleCameraCapture}
                className="inline-flex justify-center text-center items-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-miracle-white bg-miracle-darkBlue hover:bg-miracle-darkBlue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-200"
              >
                <Camera className="w-5 h-5 mr-2" />
                Capture
              </button>
            </div>

            <div className="w-full">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UploadStep;