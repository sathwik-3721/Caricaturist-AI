// "use client"

// import { useState, useEffect } from "react"
// import { AnimatePresence } from "framer-motion"
// import dynamic from "next/dynamic"
// import { useTheme } from "next-themes"
// import MiracleLoader from "../assets/Loader.gif"
// import Header from "@/components/Header"
// import UploadStep from "@/components/UploadStep"
// import PromptStep from "@/components/PromptStep"
// import StyleStep from "@/components/StyleStep"
// import GenerateStep from "@/components/GenerateStep"
// import ResultStep from "@/components/ResultStep"

// const Image = dynamic(() => import("next/image"), { ssr: false })

// export default function Car() {
//   const [subTitle, setSubTitle] = useState("Excited to transform your photo? Click 'Generate'!")
//   const [title, setTitle] = useState("Generate Caricature")
//   const [selectedPrompts, setSelectedPrompts] = useState([])
//   const [uploadedImage, setUploadedImage] = useState(null)
//   const [selectedStyle, setSelectedStyle] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const { theme, setTheme } = useTheme()
//   const [step, setStep] = useState(1)

//   const [prompts, setPrompts] = useState([
//     "Create an image with a humorous and lighthearted theme to entertain.",
//     "Make the elements exaggerated to enhance drama and visual impact.",
//     "Use a bright and bold color palette for a vibrant effect.",
//     "Keep the design simple, clean, and minimal with fewer details.",
//     "Illustrate the subject in a playful and whimsical cartoon-like style.",
//     "Ensure the artwork looks as close to real life as possible.",
//     "Use abstract shapes and unconventional forms to create a unique composition.",
//     "Give the design an old-fashioned, nostalgic look reminiscent of past eras.",
//   ])

//   const styles = [
//     "https://i.pinimg.com/736x/fe/7f/1d/fe7f1dedecc075f178e90eb098a55daa.jpg",
//     "https://www.instantaiprompt.com/wp-content/uploads/2023/12/simple-cartoon-from-photo.jpg",
//     "https://caricaturer.io/_next/image?url=%2Fimages%2Fv2%2Fpreview_image_1.webp&w=1080&q=75",
//     "https://xinva.ai/wp-content/uploads/2023/12/111.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI4DvFm-J5lkCmUedd_7MWsXXXn75l1gpMg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdF1FTBA9oAPmtxSTrfP1Wn-E3nJ60-I5jA&s",
//     "https://easy-peasy.ai/_next/image?url=https%3A%2F%2Fmedia.easy-peasy.ai%2F1a341e0f-d9e0-42b6-8ee0-eb60a7493e4d%2Ff7426714-3913-44c8-8726-4dca0071b563.png&w=828&q=75",
//     "https://www.shutterstock.com/image-vector/character-face-cartoon-icon-vector-600nw-2225068655.jpg",
//   ]

//   useEffect(() => {
//     const body = document.querySelector("body")
//     body?.classList.remove("light", "dark")
//     body?.classList.add(theme || "")

//     console.log(theme, "From FE")
//   }, [theme])

//   const handleStartOver = () => {
//     setSelectedPrompts([])
//     setUploadedImage(null)
//     setSelectedStyle(null)
//     setStep(1)
//   }

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (e) => {
//         setUploadedImage(e.target?.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handlePromptToggle = (prompt) => {
//     setSelectedPrompts((prev) => (prev.includes(prompt) ? prev.filter((p) => p !== prompt) : [...prev, prompt]))
//   }

//   const handleStyleSelect = (style) => {
//     setSelectedStyle(style)
//     setStep(4)
//   }

//   const generateCaricature = async () => {
//     console.log("Generating caricature with:", {
//       uploadedImage,
//       selectedPrompts,
//       selectedStyle,
//     })
//     setStep(5)
//   }

//   const loadingAnimation = async () => {
//     setTitle("Creating your caricature... Almost there!")
//     setSubTitle("Generating your unique caricature – almost there!")
//     setLoading(true)
//     console.log("loading", loading)
//     setTimeout(async () => {
//       await generateCaricature()
//       setLoading(false)
//       setTitle("Generating your caricature... Please wait.")
//       setSubTitle("Excited to transform your photo? Click 'Generate'!")
//     }, 5000)
//   }

//   const handleReupload = () => {
//     setUploadedImage(null)
//     setStep(1)
//   }

//   const handleCameraCapture = () => {
//     // Implement camera capture functionality here
//     console.log("Camera capture functionality to be implemented")
//   }

//   const handleDownload = () => {
//     // Implement download functionality here
//     console.log("Download functionality to be implemented")
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-200">
//       <Header step={step} theme={theme} />

//       <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <AnimatePresence mode="wait">
//           {step === 1 && (
//             <UploadStep
//               uploadedImage={uploadedImage}
//               handleImageUpload={handleImageUpload}
//               handleReupload={handleReupload}
//               setStep={setStep}
//               handleCameraCapture={handleCameraCapture}
//             />
//           )}

//           {step === 2 && (
//             <PromptStep
//               prompts={prompts}
//               selectedPrompts={selectedPrompts}
//               handlePromptToggle={handlePromptToggle}
//               setStep={setStep}
//             />
//           )}

//           {step === 3 && <StyleStep styles={styles} handleStyleSelect={handleStyleSelect} setStep={setStep} />}

//           {step === 4 && (
//             <GenerateStep
//               title={title}
//               subTitle={subTitle}
//               loading={loading}
//               loadingAnimation={loadingAnimation}
//               MiracleLoader={MiracleLoader}
//             />
//           )}

//           {step === 5 && <ResultStep handleStartOver={handleStartOver} handleDownload={handleDownload} />}
//         </AnimatePresence>
//       </main>
//     </div>
//   )
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import MiracleLoader from "../assets/Loader.gif";
import Header from "@/components/Header";
import UploadStep from "@/components/UploadStep";
import PromptStep from "@/components/PromptStep";
import StyleStep from "@/components/StyleStep";
import GenerateStep from "@/components/GenerateStep";
import ResultStep from "@/components/ResultStep";

const Image = dynamic(() => import("next/image"), { ssr: false });

export default function Car() {
  const [subTitle, setSubTitle] = useState(
    "Excited to transform your photo? Click 'Generate'!"
  );
  const [title, setTitle] = useState("Generate Caricature");
  const [selectedPrompts, setSelectedPrompts] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  const [step, setStep] = useState(1);
  const videoRef = useRef(null); // Ref to hold the video element
  const canvasRef = useRef(null); // Ref to hold the canvas element

  const [prompts, setPrompts] = useState([
    "Create an image with a humorous and lighthearted theme to entertain.",
    "Make the elements exaggerated to enhance drama and visual impact.",
    "Use a bright and bold color palette for a vibrant effect.",
    "Keep the design simple, clean, and minimal with fewer details.",
    "Illustrate the subject in a playful and whimsical cartoon-like style.",
    "Ensure the artwork looks as close to real life as possible.",
    "Use abstract shapes and unconventional forms to create a unique composition.",
    "Give the design an old-fashioned, nostalgic look reminiscent of past eras.",
  ]);

  const styles = [
    "https://i.pinimg.com/736x/fe/7f/1d/fe7f1dedecc075f178e90eb098a55daa.jpg",
    "https://www.instantaiprompt.com/wp-content/uploads/2023/12/simple-cartoon-from-photo.jpg",
    "https://caricaturer.io/_next/image?url=%2Fimages%2Fv2%2Fpreview_image_1.webp&w=1080&q=75",
    "https://xinva.ai/wp-content/uploads/2023/12/111.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI4DvFm-J5lkCmUedd_7MWsXXXn75l1gpMg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdF1FTBA9oAPmtxSTrfP1Wn-E3nJ60-I5jA&s",
    "https://easy-peasy.ai/_next/image?url=https%3A%2F%2Fmedia.easy-peasy.ai%2F1a341e0f-d9e0-42b6-8ee0-eb60a7493e4d%2Ff7426714-3913-44c8-8726-4dca0071b563.png&w=828&q=75",
    "https://www.shutterstock.com/image-vector/character-face-cartoon-icon-vector-600nw-2225068655.jpg",
  ];

  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.remove("light", "dark");
    body?.classList.add(theme || "");

    console.log(theme, "From FE");
  }, [theme]);

  const handleStartOver = () => {
    setSelectedPrompts([]);
    setUploadedImage(null);
    setSelectedStyle(null);
    setStep(1);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePromptToggle = (prompt) => {
    setSelectedPrompts((prev) =>
      prev.includes(prompt) ? prev.filter((p) => p !== prompt) : [...prev, prompt]
    );
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    setStep(4);
  };

  const generateCaricature = async () => {
    console.log("Generating caricature with:", {
      uploadedImage,
      selectedPrompts,
      selectedStyle,
    });
    setStep(5);
  };

  const loadingAnimation = async () => {
    setTitle("Creating your caricature... Almost there!");
    setSubTitle("Generating your unique caricature – almost there!");
    setLoading(true);
    console.log("loading", loading);
    setTimeout(async () => {
      await generateCaricature();
      setLoading(false);
      setTitle("Generating your caricature... Please wait.");
      setSubTitle("Excited to transform your photo? Click 'Generate'!");
    }, 5000);
  };

  const handleReupload = () => {
    setUploadedImage(null);
    setStep(1);
  };

  const handleCameraCapture = async () => {
    try {
      // 1. Access the camera (if not already accessed)
      if (!videoRef.current.srcObject) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      }

      // 2. Draw the current video frame onto the canvas
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth; // Set canvas dimensions to video dimensions
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // 3. Get the image data URL from the canvas
      const dataURL = canvas.toDataURL("image/png"); // You can change format if needed
      setUploadedImage(dataURL); // Update state to display the captured image
      setStep(2);
    } catch (error) {
      console.error("Error accessing camera or capturing image:", error);
      alert("Error accessing camera: " + error.message); // Provide feedback
    }
  };

  const handleDownload = () => {
    if (uploadedImage) {
      // 1. Create a temporary link element
      const link = document.createElement("a");
      link.href = uploadedImage;
      link.download = "captured_image.png"; // Set the filename

      // 2. Append the link to the document (it needs to be in the DOM to work)
      document.body.appendChild(link);

      // 3. Programmatically click the link to trigger the download
      link.click();

      // 4. Remove the link from the document
      document.body.removeChild(link);
    } else {
      alert("No image to download. Capture an image first.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-200">
      <Header step={step} theme={theme} />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <UploadStep
              uploadedImage={uploadedImage}
              handleImageUpload={handleImageUpload}
              handleReupload={handleReupload}
              setStep={setStep}
              handleCameraCapture={handleCameraCapture}
              videoRef={videoRef} // Pass the ref
              canvasRef={canvasRef} // Pass the ref
            />
          )}

          {step === 2 && (
            <PromptStep
              prompts={prompts}
              selectedPrompts={selectedPrompts}
              handlePromptToggle={handlePromptToggle}
              setStep={setStep}
            />
          )}

          {step === 3 && (
            <StyleStep styles={styles} handleStyleSelect={handleStyleSelect} setStep={setStep} />
          )}

          {step === 4 && (
            <GenerateStep
              title={title}
              subTitle={subTitle}
              loading={loading}
              loadingAnimation={loadingAnimation}
              MiracleLoader={MiracleLoader}
            />
          )}

          {step === 5 && (
            <ResultStep handleStartOver={handleStartOver} handleDownload={handleDownload} />
          )}
        </AnimatePresence>
      </main>
      {/* Hidden video and canvas elements */}
      <video ref={videoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}