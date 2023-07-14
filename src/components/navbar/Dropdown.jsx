import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

const Dropdown = () => {
  return (
    <div className="dropdown relative inline-block px-3">
      <button className="inline-flex items-center px-4 py-1 uppercase text-gray-700">
        <span className="flex">
          contest <AiOutlineDown className="mx-1 mt-1" />
        </span>
      </button>

      <ul className="dropdown-content absolute hidden w-full pt-1 text-gray-700">
        <li>
          <Link
            class="whitespace-no-wrap flex bg-gray-200 py-1 pl-8 hover:bg-gray-400"
            href="#"
          >
            Contest 1
          </Link>
        </li>
        <li>
          <Link
            class="whitespace-no-wrap block bg-gray-200 py-2 pl-8 hover:bg-gray-400"
            href="#"
          >
            Contest 2
          </Link>
        </li>
        <li>
          <Link
            class="whitespace-no-wrap block bg-gray-200 py-2 pl-8 hover:bg-gray-400"
            href="#"
          >
            Contest 3
          </Link>
        </li>
        <li>
          <Link
            class="whitespace-no-wrap block bg-gray-200 py-2 pl-8 hover:bg-gray-400"
            href="#"
          >
            Contesl-8
          </Link>
        </li>
        <li>
          <Link
            class="whitespace-no-wrap block bg-gray-200 py-2 pl-8 hover:bg-gray-400"
            href="#"
          >
            Contest 5
          </Link>
        </li>

        <li className="dropdown">
          <li>
            <Link
              class="whitespace-no-wrap flex bg-gray-200 py-1 pl-8 hover:bg-gray-400"
              href="#"
            >
              Contest 6 <AiOutlineRight className="mt-1" />
            </Link>
          </li>
          <ul className="dropdown-content absolute -mt-10 ml-36 hidden text-gray-700">
            <li>
              <Link
                href="#"
                className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400"
              >
                Professional
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400"
              >
                Student
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
