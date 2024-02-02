"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { ArrowDown } from "./arrowDown";
import { useState } from "react";

export default function Home() {
  const [openOption, setOpenOption] = useState(false);
  const [optionValue, setOptionValue] = useState("Option 1");

  const users = [
    {
      "name": "Leslie Abbott",
      "designation": "Co-Founder / CEO",
      "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      "name": "Hector Adams",
      "designation": "VP, Marketing",
      "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      "name": "Blake Alexander",
      "designation": "Account Coordinator",
      "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]
  return (
    <>
      {/* user profile */}
      <div className="w-full h-screen bg-gray-200 grid place-items-center ">
        <ul className="max-w-md w-screen bg-white p-5 rounded-lg">

          {
            users.map((user, index) => {
              return (
                <li className="group/item rounded-lg flex items-center justify-between p-2 text-sm hover:bg-slate-100 hover:shadow">
                  <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full" src={user.imageUrl} alt={user.name} />
                    <div>
                      <a href="#" className="font-semibold text-slate-900">{user.name}</a>
                      <p className="text-slate-500">{user.designation}</p>
                    </div>
                  </div>

                  <a href="#" className="group/edit invisible group-hover/item:visible flex items-center rounded-2xl px-4 py-1 text-slate-500 font-semibold hover:bg-slate-200">
                    <span className="group-hover/edit:text-slate-900">Call</span>
                    <span className="group-hover/edit:text-slate-700 group-hover/edit:translate-x-0.5 text-lg"><MdOutlineKeyboardArrowRight /></span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>

      {/* form validation/disabled */}
      {/* <div className="p-5">
        <input
          className="bg-white rounded-md p-1 ring-1 ring-blue-500 disabled:bg-slate-200 disabled:ring-slate-300"
          type="text" placeholder="Name" disabled
        />
        <br />
        <br />
        <input
          className="peer bg-white rounded-lg p-1 border border-slate-300 ring-blue-500 focus:ring-1 focus:outline-none invalid:ring-1 invalid:ring-pink-500 invalid:text-pink-500"
          type="email" placeholder="Email" />
        <p className="text-pink-500 text-sm invisible peer-invalid:visible">Invalid Email</p>

      </div> */}

      {/* input type radio and it's peer */}
      {/* <div className="p-5">
        <input
          className="peer/draft mr-2"
          id="draft" type="radio" name="status"
        />
        <label htmlFor="draft">Draft</label>

        <input
          className="peer/published ml-3 mr-2"
          id="published" type="radio" name="status"
        />
        <label htmlFor="published">Published</label>

        <p className="hidden peer-checked/draft:block">Draft are checked.</p>
        <p className="hidden peer-checked/published:block">Published are checked.</p>
      </div> */}

      {/* Custom theme */}
      {/* <h1 className="font-mono text-5xl text-newColor-112 border-4 border-green-800">
        Hello World!
      </h1>

      <h2 className="lg:text-3xl sm:text-lg border-5 p-5 text-tahiti font-dipayan bg-[#000]">Hello India!</h2> */}

      {/* Use google font */}
      {/* <p className="card">Hii how are you?</p> */}

      {/* Text Decoration */}
      {/* <p className="text-base italic">The quick brown fox ...</p>
      <p className="text-sm underline decoration-double underline-offset-4">The quick brown fox ...</p>
      <p className="text-lg line-through decoration-dotted">The quick brown fox ...</p>
      <p className="text-xl overline decoration-slate-500 decoration-wavy leading-loose">The quick brown fox ...</p>
      <p className="-mt-4 bg-slate-100">Lorem ipsum dolor sit amet qwertyuioplkjwertyuiopoijhgcfghjhgfdsasxcvbnmzqwertyuiopojnbvcxsertyuioloiuygtghjuytfvbghjkjhgvb consectetur adipisicing elit. Veniam, aliquid. Officiis praesentium unde, iure quod cum, deleniti dignissimos nisi ab numquam reprehenderit veniam, quos sequi maxime? Dignissimos quibusdam autem hic.</p> */}

      {/* Grid */}
      {/* <div className="text-white container bg-orange-600 text-center grid grid-flow-dense grid-cols-4 gap-4">
        <div className="bg-sky-600 rounded-lg p-4 col-span-3 col-start-2 row-span-2">01</div>
        <div className="bg-sky-600 rounded-lg p-4 ">02</div>
        <div className="bg-sky-600 rounded-lg p-4">03</div>
        <div className="bg-sky-600 rounded-lg p-4">04</div>
        <div className="bg-sky-600 rounded-lg p-4">05</div>
        <div className="bg-sky-600 rounded-lg p-4">06</div>
        <div className="bg-sky-600 rounded-lg p-4 col-span-3">07</div>
        <div className="bg-sky-600 rounded-lg p-4">08</div>
        <div className="bg-sky-600 rounded-lg p-4">09</div>
      </div> */}

      {/* conainer and columns classes */}
      {/* <div className="bg-slate-200 container columns-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi non ducimus dicta minima id sunt error maiores porro, minus nostrum consequuntur accusamus officiis omnis facere alias ex, veniam eveniet.</p>
        <p className="bg-green-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, eligendi non ducimus dicta minima id sunt error maiores porro, minus nostrum consequuntur accusamus officiis omnis facere alias ex, veniam eveniet.</p>
      </div> */}

      {/* Divide with border */}
      {/* <div className="divide-y divide-slate-200">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div> */}

      {/* Hover, Ring, Shadow */}
      {/* <div className="w-fit flex flex-col rounded-lg border mx-auto mt-10 p-4 hover:shadow-xl hover:shadow-cyan-500/50 duration-300">
        <span className="text-lg">Hello</span>
        <button className="bg-cyan-600 text-slate-100 p-1 rounded-lg ring-1 duration-300 hover:ring-offset-2 hover:opacity-50">Click Me</button>
      </div> */}

      {/* Animation, Mix blend */}
      {/* <div className="flex justify-center -space-x-14 animate-bounce">
        <div className="blur-md mix-blend-multiply bg-blue-400 w-20 h-20 rounded-full"></div>
        <div className="mix-blend-multiply bg-pink-400 w-20 h-20 rounded-full"></div>
      </div> */}

      {/* Transform (Rotate, Transform Origin) */}
      {/* <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" className="w-60 hover:-rotate-45 duration-200 origin-top-right" alt="" /> */}

      {/* <input type="checkbox" className="accent-rose-500 w-6 h-6" checked /> */}


      {/* Design System */}
      {/* <div>
        <h1 className="text-3xl font-semibold">This is a title</h1>

        <h2 className="text-xl">This is a subtitle</h2>

        <p>This is a paragraph</p>

        <a href="" className="underline text-blue-600 hover:text-purple-500">This is a anchor</a>

        <br />
        <button className="bg-blue-500 p-2 text-white rounded-lg m-6 hover:opacity-80 hover:shadow-lg shadow-black">This is a button</button>

        <br />
        <input className="m-2 outline-none border-2 p-1 rounded-md placeholder:text-slate-500 focus:ring  focus:border-black/0 duration-200" type="text" placeholder="This is a input" />

        <div className="flex gap-2 m-2">
          <input id="checkbox" type="checkbox" className="accent-rose-500 w-6 h-6" />
          <label htmlFor="checkbox">Checkbox</label>
        </div>

        <select className="border-2 px-4 py-1 rounded-sm">
          <option>01</option>
          <option>02</option>
          <option>03</option>
        </select>
        <br />

        <div className="Select" onClick={()=>setOpenOption(!openOption)}>
          <div className="border-b p-1 flex items-center gap-3 hover:bg-slate-100">
            {optionValue}
            <span className={`transition ${openOption ? "rotate-180" : "rotate-0"}`}><ArrowDown /></span>
          </div>
          <ul className={`flex-col divide-y w-full ${openOption ? 'flex' : 'hidden'}`}>
            <li onClick={()=>setOptionValue('Option 1')}>Option 1</li>
            <li onClick={()=>setOptionValue('Option 2')}>Option 2</li>
            <li onClick={()=>setOptionValue('Option 3')}>Option 3</li>
          </ul>
        </div>
      </div> */}
    </>
  );
}
