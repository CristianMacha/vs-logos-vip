"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
    {
        id: 1,
        img: "",
        title: "Texto texto texto",
        description: "Texto texto texto",
    },
    {
        id: 2,
        img: "",
        title: "Texto texto texto",
        description: "Texto texto texto",
    },
    {
        id: 3,
        img: "",
        title: "Texto texto texto",
        description: "Texto texto texto",
    },
    {
        id: 4,
        img: "",
        title: "Texto texto texto",
        description: "Texto texto texto",
    },
    {
        id: 5,
        img: "",
        title: "Texto texto texto",
        description: "Texto texto texto",
    },
    {
        id: 6,
        img: "",
        title: "Texto texto texto",
        description: "Texto texto texto",
    },
];

export default function Testimonials() {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            breakpoints: {
                "(min-width: 400px)": {
                    slides: { perView: 1, spacing: 5 },
                },
                "(min-width: 760px)": {
                    slides: { perView: 2, spacing: 5 },
                },
                "(min-width: 1000px)": {
                    slides: { perView: 3, spacing: 10 },
                },
            },
            slides: { perView: 1 },
        },
        [
            // add plugins here
        ]
    );
    return (
        <div>
            <div>
                <h1 className="text-2xl text-center text-vs-blue-600 font-semibold">Testimonios de Clientes</h1>
            </div>
            <div className="bg-vs-blue-600 py-4">
                <div ref={sliderRef} className="keen-slider">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="keen-slider__slide flex flex-col"
                        >
                            <div className="flex justify-center">imagen</div>
                            <div>
                                <h3 className="text-vs-sky font-semibold text-center">
                                    {t.title}
                                </h3>
                                <p className="text-white text-center">
                                    {t.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
