import { forwardRef } from "react";
import { HeroButtton } from "./HeroButton/HeroButtton";
import { ScrollButton } from "./ScrollButton/ScrollButton";
import { useAnimatedText } from "../../hooks/useAnimatedText";
import mobileAvif from "./../../assets/hero/hero_mobile.avif";
import mobileWebp from "./../../assets/hero/hero-mobile.webp";
import tabletAvif from "./../../assets/hero/hero_tablet.avif";
import tabletWebp from "./../../assets/hero/hero_tablet.webp";
import desktopAvif from "./../../assets/hero/hero_desktop.avif";
import desktopWebp from "./../../assets/hero/hero-desktop.webp";

export const Hero = forwardRef(function Hero(_, ref) {
	const {
		textValue,
		textChanging,
		dialogueStatus,
		answerQuestion,
		onStartOver,
		onDelete,
	} = useAnimatedText();
	return (
		<header
			id="home"
			className="relative grid grid-cols-6 grid-rows-5 justify-items-center w-full h-screen text-quaternary font-luxury "
			ref={ref}
		>
			<picture className="fixed -z-10 w-full h-screen">
				<source
					srcSet={mobileAvif}
					type="image/avif"
					media="(max-width: 440px)"
					className="w-full h-full object-cover object-center"
					alt="background hero"
				/>
				<source
					srcSet={mobileWebp}
					type="image/webp"
					media="(max-width: 440px)"
					className="w-full h-full object-cover object-center"
					alt="background hero"
				/>
				<source
					srcSet={tabletAvif}
					type="image/avif"
					media="(min-width: 441px) and (max-width: 1023px)"
					className="w-full h-full object-cover object-center"
					alt="background hero"
				/>
				<source
					srcSet={tabletWebp}
					type="image/webp"
					media="(min-width: 441px) and (max-width: 1023px)"
					className="w-full h-full object-cover object-center"
					alt="background hero"
				/>
				<source
					srcSet={desktopAvif}
					type="image/avif"
					media="(min-width: 1024px)"
					className="w-full h-full object-cover object-center"
					alt="background hero"
				/>
				<img
					src={desktopWebp}
					alt="background hero"
					className="w-full h-full object-cover object-center"
				/>
			</picture>
			<div className="col-span-full row-start-2 tracking-tight space-y-3 sm:space-y-4 lg:col-end-6 xl:col-end-5">
				<h1 className="font-bold mb-1 text-4xl antialiased xs:text-5xl sm:text-6xl lg:text-7xl 3xl:text-8xl lg:mb-3 3xl:mb-4">
					Diego Reyes
				</h1>
				<span className="pl-0.5 text-2xl antialiased font-semibold leading-7 lg:text-4xl 3xl:text-5xl">
					Frontend Developer
				</span>
				<div className="pt-6 font-medium select-none lg:pt-10 2xl:pt-14">
					<span
						className={`text-xl lg:text-2xl 3xl:text-3xl relative after:content-['|'] after:relative after:bottom-[2px] after:left-[3px] after:inline-block ${
							textChanging ? "" : "after:motion-safe:animate-text-machine"
						}`}
					>
						{textValue}
					</span>
					<div className="mt-2 space-x-7 lg:mt-4">
						<HeroButtton
							type="button"
							animation="fromBottom"
							text="Why should I?"
							shouldShow={dialogueStatus === "What do you think?"}
							callback={answerQuestion}
						/>
						<HeroButtton
							type="button"
							animation="fromBottom"
							text="Of course!"
							shouldShow={dialogueStatus === "What do you think?"}
							callback={answerQuestion}
						/>
						<HeroButtton
							type="anchor"
							animation="fromRight"
							text="Projects"
							shouldShow={dialogueStatus === "Let me show you."}
							callback={onDelete}
						/>
						<HeroButtton
							type="anchor"
							animation="fromRight"
							text="Contact"
							shouldShow={dialogueStatus === "That's great to hear!"}
							callback={onDelete}
						/>
						<HeroButtton
							type="button"
							animation="fromLeft"
							text="Start Over"
							shouldShow={dialogueStatus === "Let's work together!"}
							callback={onStartOver}
						/>
					</div>
				</div>
			</div>
			<ScrollButton />
		</header>
	);
});
