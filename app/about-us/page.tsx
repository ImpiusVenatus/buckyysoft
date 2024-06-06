"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { BackgroundBeams } from "../components/background-beams";
import { motion } from "framer-motion";
import { Globe } from "./globe";
import { CardHoverEffectDemo } from "./card-hover";
import { ContactSection } from "./contact";
import ContactButton from "./contact-button";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/impius_venatus",
		name: "Sadman Hossain",
		post: "Technical Lead",
		handle: "@buckyySoft_",
		src: "/images/sadman.jpeg",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:buckyypayment@gmail.com",
		name: "Mahdee Mahi",
		post: "Marketing Lead",
		handle: "buckyypayment@gmail.com",
		src: "/images/mahdee.png",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/buckyy",
		name: "Tareq Rahman",
		post: "Graphic and Design Lead",
		handle: "buckyy",
		src: "/images/tareq.png",
	},
];

const words = 'Meet our team'
const heading = 'Get your business started'
const subheading = ''

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInVariant2 = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

export default function AboutUs() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
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
			</div>
			<div className="min-h-screen bg-black">
				<Globe />
			</div>
			<div className="min-h-screen bg-black">
				<CardHoverEffectDemo />
			</div>
			<div className="pt-16 text-center">
				<h1 className="text-2xl text-white pb-8"><TextGenerateEffect words={words} /></h1>
				<CardContainer className="inter-var py-8">
					<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
							<CardItem
							translateZ="50"
							className="text-xl m-auto font-bold text-neutral-600 dark:text-white"
							>
							Akhyar Noor
							</CardItem>
							<CardItem
							as="p"
							translateZ="60"
							className="m-auto text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
							>
							Founder & CEO
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
							<Image
								src="/images/akhyar.png"
								height="1000"
								width="600"
								className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
								alt="thumbnail"
							/>
							</CardItem>
					</CardBody>
				</CardContainer>
			</div>
			<div className="container flex items-center justify-center pb-8 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<CardContainer className="inter-var">
						<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
							<CardItem
							translateZ="50"
							className="m-auto text-xl font-bold text-neutral-600 dark:text-white"
							>
							{s.name}
							</CardItem>
							<CardItem
							as="p"
							translateZ="60"
							className="m-auto text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
							>
							{s.post}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
							<Image
								src={s.src}
								height="1000"
								width="600"
								className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
								alt="thumbnail"
							/>
							</CardItem>
						</CardBody>
						</CardContainer>
					))}
				</div>
			</div>
			<div className="py-32 flex flex-col justify-center align-middle min-h-screen bg-black">
				<ContactSection />
				<ContactButton />
			</div>
		</div>
	);
}
