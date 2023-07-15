import Head from "next/head";
import Link from "next/link";
import { ArrowLeft as ArrowLeftIcon } from "lucide-react";

import appName from "./index";

export default function About() {
  return (
    <div>
      <Head>
        <title>{appName}</title>
      </Head>

      <main className="container max-w-[600px] mx-auto p-5">
        <h1 className="text-center text-5xl font-bold m-6">{appName}</h1>

        <p className="prose">
         Plug-in Based on open-source technology, provides a web-based interface for modifying images 
    using text-written instructions. You can upload an image, enter a text prompt describing how to change that image. 
      You can generate updated images based on the prompt, and download those images.
        </p>

        <p className="prose">
      The interface allows users to customize the instructions to create images with desired effects. 
      It is an easy and efficient way to generate images quickly, without having to manually edit them.
        </p>

        <p className="prose">
          It also eliminates the need for costly software and complex coding. 
      It provides an intuitive way to create high-quality images in a fraction of the time.
        </p>
              <p className="prose">
         Your imagination is the only barrier
        </p>

        <div className="text-center mt-10">
          <Link href="/">
            <a className="bg-black text-white rounded-md text-small inline-block p-3 flex-none">
              <ArrowLeftIcon className="icon" />
              Back to making stuff
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
