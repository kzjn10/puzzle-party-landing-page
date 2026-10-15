"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  Users,
  Zap,
  ChevronRight,
  Wifi,
  LayoutGrid,
  Puzzle,
} from "lucide-react";

import { useState } from "react";
import { AppStoreIcon, PlayStoreIcon } from "@/components/store-icons";
import type React from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScroll = () => {
    const section = document.getElementById('download');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B8FF3A]/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/3 w-72 h-72 bg-[#B8FF3A]/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-black/50 border-b border-white/10">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <Link
              href="#"
              className="flex gap-2 items-center text-xl font-bold"
            >
              <div className="relative">
                <div className="w-6 h-6 bg-[#B8FF3A] text-black rounded-full flex items-center justify-center text-xs font-bold">
                      <Image
                      src="/logo.png?height=32&width=32"
                      width={32}
                      height={32}
                      alt="Puzzle Party"
                    />
                </div>
              </div>
              <span className="text-[#B8FF3A]">
                Puzzle Party
              </span>
            </Link>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-6">
                <Link
                  href="#features"
                  className="hidden text-sm font-medium transition-all duration-300 hover:text-[#B8FF3A] sm:block"
                >
                  Features
                </Link>
                <Link
                  href="#gameplay"
                  className="hidden text-sm font-medium transition-all duration-300 hover:text-[#B8FF3A] sm:block"
                >
                  How to Play
                </Link>
                <Link
                  href="#testimonials"
                  className="hidden text-sm font-medium transition-all duration-300 hover:text-[#B8FF3A] sm:block"
                >
                  Reviews
                </Link>
                <Link
                  href="#contact"
                  className="hidden text-sm font-medium transition-all duration-300 hover:text-[#B8FF3A] sm:block"
                >
                  Contact
                </Link>

                <Button
                  size="sm"
                  className="gap-1 bg-[#B8FF3A] text-black hover:bg-[#a6eb2a] transition-all duration-300 shadow-lg shadow-[#B8FF3A]/25"
                  onClick={handleScroll}
                >
                  <Download className="h-4 w-4" />
                  Download Free
                </Button>

              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 relative z-10">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
            <div className="container px-4 md:px-6 relative">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#B8FF3A]">
                      Slide the tiles. Rebuild the picture.
                    </h1>
                    <p
                      className="max-w-[600px] text-gray-300 md:text-xl animate-fadeIn"
                      style={{ animationDelay: "0.2s" }}
                    >
                      Puzzle Party is a cheerful sliding-puzzle game. Choose a
                      collection, pick an illustrated character, and put the
                      picture back together by sliding tiles into the empty
                      space.
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-2 min-[400px]:flex-row animate-fadeIn"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Link href="#download">
                      <Button
                        size="lg"
                        className="gap-1 bg-[#B8FF3A] text-black hover:bg-[#a6eb2a] transition-all duration-300 shadow-lg shadow-[#B8FF3A]/25 transform hover:scale-105"
                      >
                        <Download className="h-5 w-5" />
                        Download Free
                      </Button>
                    </Link>
                    <Link href="#gameplay">
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-1 border-[#B8FF3A]/50 text-white hover:bg-[#B8FF3A]/10 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn How to Play
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div
                    className="flex items-center gap-4 pt-4 animate-fadeIn"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Wifi className="h-4 w-4" />
                      <span>No Internet Required</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>Made for kids and teens</span>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-4 pt-2 animate-fadeIn"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <Link
                      href="#download"
                      className="flex items-center gap-2 transition-all duration-300 hover:text-[#B8FF3A]"
                    >
                      <AppStoreIcon className="h-6 w-6" />
                      <span className="text-sm">App Store</span>
                    </Link>
                    <Link
                      href="#download"
                      className="flex items-center gap-2 transition-all duration-300 hover:text-[#B8FF3A]"
                    >
                      <PlayStoreIcon className="h-6 w-6" />
                      <span className="text-sm">Google Play</span>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center animate-float">
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm md:aspect-square lg:order-last lg:aspect-video shadow-2xl shadow-[#B8FF3A]/20">
                    <Image
                      src="/5.png?height=720&width=1280"
                      width={1280}
                      height={720}
                      alt="Puzzle Party character puzzle"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-pulse"
                    >
                      <Zap className="h-8 w-8" />
                      <span className="sr-only">Play demo</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#B8FF3A]/15 to-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8FF3A] to-transparent"></div>
            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 animate-fadeIn">
                  <div className="inline-block rounded-lg bg-[#B8FF3A] px-3 py-1 text-sm text-black shadow-lg shadow-[#B8FF3A]/25">
                    App Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#B8FF3A]">
                    A cheerful sliding puzzle
                  </h2>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Bright, toy-inspired pictures, friendly audio, and puzzle
                    modes that work well for children and teens. Everything
                    needed to play stays on the device.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div
                  className="flex flex-col justify-center space-y-4 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 transition-all duration-300 hover:shadow-[#B8FF3A]/20 hover:translate-y-[-5px] animate-fadeIn"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#B8FF3A]/10 text-[#B8FF3A]">
                    <LayoutGrid className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Lots of layouts</h3>
                    <p className="text-gray-400">
                      Standard 3x3, 4x4, and 5x5 boards, a portrait 3x5, and two
                      3x3 variants with extra rail mechanics.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center space-y-4 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 transition-all duration-300 hover:shadow-[#B8FF3A]/20 hover:translate-y-[-5px] animate-fadeIn"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#B8FF3A]/10 text-[#B8FF3A]">
                    <Puzzle className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Two collections</h3>
                    <p className="text-gray-400">
                      A Classic 2D set alongside a toy-themed gallery of
                      illustrated characters.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center space-y-4 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 transition-all duration-300 hover:shadow-[#B8FF3A]/20 hover:translate-y-[-5px] animate-fadeIn"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#B8FF3A]/10 text-[#B8FF3A]">
                    <Wifi className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Plays on the device</h3>
                    <p className="text-gray-400">
                      Pictures, frames, fonts, and sound effects are stored
                      locally. No backend is required to play.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="gameplay"
            className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#B8FF3A]/15"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8FF3A] to-transparent"></div>
            <div className="container px-4 md:px-6 relative">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4 animate-fadeIn">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-[#B8FF3A] px-3 py-1 text-sm text-black shadow-lg shadow-[#B8FF3A]/25">
                      How to Play
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#B8FF3A]">
                      Rebuild a picture, one slide at a time
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Every board is shuffled through legal moves, so each
                      puzzle stays solvable.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div
                      className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1 animate-fadeIn"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40">
                        <span className="font-bold">1</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Choose a collection</h3>
                        <p className="text-sm text-gray-400">
                          Open the Classic 2D set or the toy-themed puzzle
                          gallery.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1 animate-fadeIn"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40">
                        <span className="font-bold">2</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Pick a character</h3>
                        <p className="text-sm text-gray-400">
                          Select an illustrated character, then start from a
                          shuffled board.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-4 transition-all duration-300 hover:translate-x-1 animate-fadeIn"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40">
                        <span className="font-bold">3</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">Slide the tiles</h3>
                        <p className="text-sm text-gray-400">
                          Tap or drag tiles into the empty space. Standard
                          boards use one empty cell. The special 3x3 modes add
                          a rail with its own movement rules.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="overflow-hidden rounded-lg border border-white/10 shadow-xl shadow-[#B8FF3A]/15 animate-float"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Image
                      src="/1.png?height=400&width=300"
                      width={300}
                      height={400}
                      alt="Illustrated puzzle character"
                      className="aspect-[3/4] object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div
                    className="overflow-hidden rounded-lg border border-white/10 shadow-xl shadow-[#B8FF3A]/15 animate-float"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Image
                      src="/2.png?height=400&width=300"
                      width={300}
                      height={400}
                      alt="Sliding puzzle board"
                      className="aspect-[3/4] object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div
                    className="overflow-hidden rounded-lg border border-white/10 shadow-xl shadow-[#B8FF3A]/15 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Image
                      src="/3.png?height=400&width=300"
                      width={300}
                      height={400}
                      alt="Toy-themed puzzle gallery"
                      className="aspect-[3/4] object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div
                    className="overflow-hidden rounded-lg border border-white/10 shadow-xl shadow-[#B8FF3A]/15 animate-float"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <Image
                      src="/4.png?height=400&width=300"
                      width={300}
                      height={400}
                      alt="Completed puzzle picture"
                      className="aspect-[3/4] object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="testimonials"
            className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#B8FF3A]/15 to-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8FF3A] to-transparent"></div>
            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 animate-fadeIn">
                  <div className="inline-block rounded-lg bg-[#B8FF3A] px-3 py-1 text-sm text-black shadow-lg shadow-[#B8FF3A]/25">
                    User Reviews
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#B8FF3A]">
                    What players enjoy
                  </h2>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Bright pictures, friendly sounds, and boards that are
                    always possible to finish.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                <div
                  className="flex flex-col justify-between rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 transition-all duration-300 hover:shadow-[#B8FF3A]/20 hover:translate-y-[-5px] animate-fadeIn"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="space-y-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-[#B8FF3A]"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300">
                      "I pick a character, slide the tiles, and the picture
                      comes back together. The toy art is bright, and every
                      shuffle can actually be solved."
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-full bg-[#B8FF3A]/10 border border-[#B8FF3A]/40 p-1">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-400">
                        Parent
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-between rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 transition-all duration-300 hover:shadow-[#B8FF3A]/20 hover:translate-y-[-5px] animate-fadeIn"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="space-y-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-[#B8FF3A]"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300">
                      "The 3x3 is a quick start. Bigger boards and the rail
                      variants keep it interesting, and the move timer makes
                      each replay feel new."
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-full bg-[#B8FF3A]/10 border border-[#B8FF3A]/40 p-1">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Robert Chen</p>
                      <p className="text-sm text-gray-400">
                        Puzzle player
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-between rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 transition-all duration-300 hover:shadow-[#B8FF3A]/20 hover:translate-y-[-5px] animate-fadeIn"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="space-y-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-[#B8FF3A]"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300">
                      "Pictures, frames, and sounds are already on the device.
                      I can play without an account or a connection."
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-full bg-[#B8FF3A]/10 border border-[#B8FF3A]/40 p-1">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        width={40}
                        height={40}
                        alt="User avatar"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Lisa Thompson</p>
                      <p className="text-sm text-gray-400">Teen player</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="download"
            className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#B8FF3A]/15"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8FF3A] to-transparent"></div>
            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 animate-fadeIn">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#B8FF3A]">
                    Ready to slide?
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Download Puzzle Party and rebuild cheerful pictures, one
                    tile at a time.
                  </p>
                </div>
                <div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Link
                    href="#download"
                  >
                    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm px-4 py-2 transition-all duration-300 hover:border-[#B8FF3A]/50 hover:shadow-[#B8FF3A]/20 hover:shadow-lg">
                      <AppStoreIcon className="h-7 w-7 text-white" />
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">
                          Download on the
                        </span>
                        <span className="text-sm font-medium">App Store</span>
                      </div>
                    </div>

                  </Link>

                  <Link href="#download">
                    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm px-4 py-2 transition-all duration-300 hover:border-[#B8FF3A]/50 hover:shadow-[#B8FF3A]/20 hover:shadow-lg">
                      <PlayStoreIcon className="h-7 w-7" />
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">GET IT ON</span>
                        <span className="text-sm font-medium">Google Play</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>



        </main>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#B8FF3A]/15 to-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8FF3A] to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 animate-fadeIn">
                <div className="inline-block rounded-lg bg-[#B8FF3A] px-3 py-1 text-sm text-black shadow-lg shadow-[#B8FF3A]/25">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#B8FF3A]">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Need help with the app or have a suggestion? Send a note
                  about Puzzle Party.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <div
                className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-200"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-400 focus:border-[#B8FF3A] focus:outline-none focus:ring-1 focus:ring-[#B8FF3A] transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-200"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        required
                        className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-400 focus:border-[#B8FF3A] focus:outline-none focus:ring-1 focus:ring-[#B8FF3A] transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-200"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-[#B8FF3A] focus:outline-none focus:ring-1 focus:ring-[#B8FF3A] transition-colors duration-200"
                    >
                      <option value="">Select a topic</option>
                      <option value="technical">Technical Support</option>
                      <option value="features">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="feedback">General Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help improve Puzzle Party..."
                      rows={5}
                      required
                      className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-400 focus:border-[#B8FF3A] focus:outline-none focus:ring-1 focus:ring-[#B8FF3A] transition-colors duration-200"
                    ></textarea>
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 rounded-md bg-green-500/10 border border-green-500/30 text-green-400">
                      Thank you! Your message has been sent successfully. We'll
                      get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-md bg-red-500/10 border border-red-500/30 text-red-400">
                      Sorry, there was an error sending your message. Please try
                      again or contact us directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-1 bg-[#B8FF3A] text-black hover:bg-[#a6eb2a] transition-all duration-300 shadow-lg shadow-[#B8FF3A]/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">

                <div
                  className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 animate-fadeIn"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-white">Email Support</h3>
                      <p className="text-gray-400">phanes.dev@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 shadow-xl shadow-[#B8FF3A]/10 animate-fadeIn"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="space-y-4">
                    <h3 className="font-medium text-white">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40 transition-all duration-300 hover:bg-[#B8FF3A]/20 hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40 transition-all duration-300 hover:bg-[#B8FF3A]/20 hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40 transition-all duration-300 hover:bg-[#B8FF3A]/20 hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3A]/10 text-[#B8FF3A] border border-[#B8FF3A]/40 transition-all duration-300 hover:bg-[#B8FF3A]/20 hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15 5-3-5-3z"></path>
                        </svg>
                        <span className="sr-only">YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-lg py-6 relative z-10">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <div className="flex gap-2 items-center text-lg font-bold">
              <div className="relative">
                <div className="w-5 h-5 bg-[#B8FF3A] text-black rounded-full flex items-center justify-center text-xs font-bold">
                  P
                </div>
              </div>
              <span className="text-[#B8FF3A]">
                Puzzle Party
              </span>
            </div>
            <p className="text-center text-sm text-gray-400 md:text-left">
              &copy; {new Date().getFullYear()} Phanes Team. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-[#B8FF3A] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-[#B8FF3A] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#contact"
                className="text-sm text-gray-400 hover:text-[#B8FF3A] transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
