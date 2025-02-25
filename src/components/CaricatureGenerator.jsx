"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import React, { useState, useEffect } from "react";
import MiracleLoader from "../assets/Loader.gif";
import { Upload, Edit2, X } from "lucide-react";
import LabsLogo from "../assets/labs.png";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), { ssr: false });

export default function CaricatureGenerator() {
  const [subTitle, setSubTitle] = useState("Excited to transform your photo? Click 'Generate'!")
  const [title, setTitle] = useState("Generate Caricature")
  const [selectedPrompts, setSelectedPrompts] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [editingPrompt, setEditingPrompt] = useState(null);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  const [step, setStep] = useState(1);

  const [prompts, setPrompts] = useState([
    "Exaggerated",
    "Minimalist",
    "Realistic",
    "Colorful",
    "Abstract",
    "Vintage",
    "Cartoon",
    "Funny",
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
    // Force a re-render when the theme changes
    const body = document.querySelector("body");
    body?.classList.remove("light", "dark");
    body?.classList.add(theme || "");
  }, [theme]);

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
      prev.includes(prompt)
        ? prev.filter((p) => p !== prompt)
        : [...prev, prompt]
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
    setTitle("Creating your caricature... Almost there!")
    setSubTitle("Generating your unique caricature – almost there!")
    setLoading(true);
    console.log("loading", loading);
    setTimeout(async () => {
      await generateCaricature();
      setLoading(false);
      setTitle("Generating your caricature... Please wait.");
      setTitle("Excited to transform your photo? Click 'Generate'!")
    }, 5000);
  };

  const handleEditPrompt = (prompt) => {
    setEditingPrompt(prompt);
  };

  const handleSavePrompt = (oldPrompt, newPrompt) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((p) => (p === oldPrompt ? newPrompt : p))
    );
    setEditingPrompt(null);
  };

  const handleReupload = () => {
    setUploadedImage(null);
    setStep(1);
  };

  const handleNextStep = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            <img
              // className="border border-black"
              src={LabsLogo}
              alt="Labs Logo"
              width={120}
              height={120}
            />
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white m-auto">
              AI Caricature Generator
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {step} of 5
            </span>
            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2 transition-all duration-500 ease-out"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
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
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setStep(2)}
                      className="mt-6 px-6 py-3 w-full border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <label className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-200">
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                    Select Image
                  </label>
                )}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Select a prompt
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {prompts.map((prompt) => (
                  <div
                    key={prompt}
                    className={`relative p-4 rounded-lg shadow-md text-center transition-all duration-200 transform hover:scale-105 ${
                      selectedPrompts.includes(prompt)
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    }`}
                  >
                    {editingPrompt === prompt ? (
                      <input
                        type="text"
                        defaultValue={prompt}
                        className="w-full bg-transparent text-center focus:outline-none"
                        onBlur={(e) => handleSavePrompt(prompt, e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            handleSavePrompt(prompt, e.currentTarget.value);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <>
                        <button
                          onClick={() => handlePromptToggle(prompt)}
                          className="w-full h-full"
                        >
                          {prompt}
                        </button>
                        <button
                          onClick={() => handleEditPrompt(prompt)}
                          className="absolute top-1 right-1 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        >
                          <Edit2 size={16} />
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Next
                </button>
                {/* <div className="mt-8 flex justify-between"> */}
                {/* </div> */}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Choose a Style
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => handleStyleSelect(style)}
                    className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 transform hover:scale-105"
                  >
                    <img
                      src={style || "/placeholder.svg"}
                      alt="Style"
                      layout="fill"
                      objectFit="cover"
                    />
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Back
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-md mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {subTitle}
              </p>
              {loading === true ? (
                <div className="flex item-center w-fit justify-center m-auto">
                  <img src={MiracleLoader} alt="Loader" width={150} />
                </div>
              ) : (
                <div className="flex justify-center">
                  {/* <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Back
                </button> */}
                  <button
                    onClick={loadingAnimation}
                    className="px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 transform hover:scale-105"
                  >
                    Generate
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-md mx-auto"
            >
              {console.log("loading stp5", loading)}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Caricature
                </h2>
                <div className="bg-white shadow-lg rounded-lg p-8 inline-block items-center">
                  <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center m-auto">
                    {/* <ImageIcon className="h-16 w-16 text-gray-400" /> */}
                    <img src="https://i.pinimg.com/736x/50/b7/58/50b7589adbdac2274b92d32eca46629b.jpg" className="w-64 h-64"/>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Here is your caricature
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  {/* <button
                      onClick={() => setStep(4)}
                      className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      Back
                    </button> */}
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* <footer className="shadow-sm mt-auto bg-gradient-to-br from-blue-100 via-white to-red-100">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <img
            src={LabsLogo}
            alt="Labs logo"
            width={120}
            height={40}
          />
        </div>
      </footer> */}
    </div>
  );
}
