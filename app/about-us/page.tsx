"use client";
import { Navigation } from "../components/nav";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { BackgroundBeams } from "../components/background-beams";
import { motion, useAnimation, useInView } from "framer-motion";
import { Globe } from "./globe";
import { CardHoverEffectDemo } from "./card-hover";
import { ContactSection } from "./contact";
import ContactButton from "./contact-button";
import { useRef, useEffect  } from "react";
import { TeamSection } from "./team";

const heading = 'Get your business started'

export default function AboutUs() {
		const titleControls = useAnimation();
		const visionControls = useAnimation();
		const coreValuesControls = useAnimation();
		const ourTeamControls = useAnimation();
		
		const titleRef = useRef(null);
		const visionRef = useRef(null);
		const coreValuesRef = useRef(null);
		const ourTeamRef = useRef(null);
	
		const titleInView = useInView(titleRef, { amount: 0.5 });
		const visionInView = useInView(visionRef, { amount: 0.5 });
		const coreValuesInView = useInView(coreValuesRef, { amount: 0.5 });
		const ourTeamInView = useInView(ourTeamRef, { amount: 0.5 });
	
	  useEffect(() => {
		if (titleInView) {
		  titleControls.start("visible");
		} else {
		  titleControls.start("hidden");
		}
	
		if (visionInView) {
		  visionControls.start("visible");
		} else {
		  visionControls.start("hidden");
		}
	
		if (coreValuesInView) {
		  coreValuesControls.start("visible");
		} else {
		  coreValuesControls.start("hidden");
		}

		if (ourTeamInView) {
			ourTeamControls.start("visible");
		  } else {
			ourTeamControls.start("hidden");
		  }
	}, [titleInView, visionInView, coreValuesInView, ourTeamInView, visionControls, titleControls, coreValuesControls, ourTeamControls]);
	
	  const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	  };

	return (
		<div className="bg-black from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<motion.div 
				ref={titleRef}
				initial="hidden"
				animate={titleControls}
				variants={variants}
				transition={{ duration: 1 }}
				className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
			>
				<div className="max-w-4xl mx-auto p-4">
					<motion.h1 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="relative z-10 text-xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold leading-3"
					>
					<TextGenerateEffect words={heading} />
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-neutral-500 font-normal max-w-2xl mx-auto my-2 text-md text-center relative z-10"
					>
					Welcome to BuckyySoft, the best all in one solution for your dream project. We provide reliable, scalable and customizable solutions for your business. So, what are you waiting for. Tell us about your dream and let us help you morph it into reality
					</motion.p>
				</div>
				<BackgroundBeams />
			</motion.div>
			<motion.div 
				className="min-h-screen bg-black"
			>
				<Globe />
			</motion.div>
			<motion.div 
				ref={coreValuesRef}
				initial="hidden"
				animate={coreValuesControls}
				variants={variants}
				transition={{ duration: 1 }}
				className="min-h-screen bg-black py-16"
			>
				<CardHoverEffectDemo />
			</motion.div>
			<motion.div
				ref={visionRef}
				initial="hidden"
				animate={visionControls}
				variants={variants}
				transition={{ duration: 1 }}
				className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
			>
				<TeamSection />
			</motion.div>
			<div className="py-32 flex flex-col justify-center align-middle min-h-screen bg-black">
				<ContactSection />
				<ContactButton />
			</div>
		</div>
	);
}
