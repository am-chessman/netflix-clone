"use client"
import React, {useRef} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import imageItems from "@/components/imageItems";

const ScrollWrapper = () => {
    const scrollRef = useRef(null)
    const scrollNextButtonRef = useRef(null)
    const scrollPrevButtonRef = useRef(null)

    const handleOnScroll = () => {
        const scrollElement = scrollRef.current;
        const scrollNextButton = scrollNextButtonRef.current;
        const scrollPrevButton = scrollPrevButtonRef.current;
        const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth

        if (Math.floor(scrollElement.scrollLeft) === maxScroll) {
            scrollNextButton.classList.add("hidden");
        } else {
            scrollNextButton.classList.remove("hidden");
        }

        if (Math.floor(scrollElement.scrollLeft) > 0) {
            scrollPrevButton.classList.remove("hidden");
            scrollPrevButton.classList.add("flex");
        }  else {
            scrollPrevButton.classList.remove("flex");
            scrollPrevButton.classList.add("hidden");
        }
    }

    const handleNextScroll = () => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        scrollElement.scrollBy({
            left: scrollElement.clientWidth,
            behavior: "smooth"
        });
    };

    const handlePrevScroll = () => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        scrollElement.scrollBy({
            left: -scrollElement.clientWidth,
            behavior: "smooth"
        });
    };
    return (
        <div>
            <div
                ref={scrollRef}
                onScroll={handleOnScroll}
                className="
                h-50 w-[100%]
                grid
                grid-flow-col
                gap-2
                overflow-x-hidden
                ">
                <div
                    ref={scrollPrevButtonRef}
                    onClick={handlePrevScroll}
                    className='
                    text-5xl
                    hidden
                    justify-center
                    items-center
                    absolute
                    left-10
                    h-50
                    min-w-[70px]
                    bg-black
                    opacity-50
                    hover:opacity-80
                    transition ease-in-out duration-100
                    cursor-pointer'
                >
                    <i className="bi bi-chevron-left"></i>
                </div>
                <div
                    ref={scrollNextButtonRef}
                    onClick={handleNextScroll}
                    className='
                    text-5xl
                    flex
                    justify-center
                    items-center
                    absolute
                    right-10
                    h-50
                    min-w-[70px]
                    bg-black
                    opacity-50
                    hover:opacity-80
                    transition ease-in-out duration-100
                    cursor-pointer'
                >
                    <i className="bi bi-chevron-right"></i>
                </div>
                {
                    imageItems.map((item, index) => (
                        <div className='h-full w-[350px] bg-center bg-cover bg-no-repeat border-red-500 border rounded-md' style={{backgroundImage: `url(${item})`}} key={index}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default ScrollWrapper