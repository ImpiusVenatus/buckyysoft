"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { PinContainer } from "../components/3d-pin";
import Image from "next/image";

const socials = [
	{
		href: "/web-dev",
		title: "Web Development",
		desc: "Building Cutting-Edge Digital Solutions",
		img: "/images/thumbnails/web-dev.png",
	},
	{
		href: "/graphic-design",
		title: "Graphic Design",
		desc: "Crafting Visually Stunning Designs",
		img: "/images/thumbnails/graphic-design.jpg",
	},
	{
		href: "https://github.com/buckyy",
		title: "Marketing",
		desc: "Creating Impactful Campaigns that Deliver Results",
		img: "/images/thumbnails/marketing.jpg",
	},
];

export default function Contact() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container mx-auto pt-32 px-8">
				<h2 className="text-white font-bold text-4xl">Projects</h2>
				<p className="my-4 text-zinc-400">Some of the projects are from work and some are on our own time.</p>
				<div className="w-full h-px bg-zinc-800"></div>
			</div>
			<div className="container min-h-screen px-4 py-32 mx-auto">
				<div className="w-full flex justify-center gap-16 xl:flex-nowrap flex-wrap">
					{socials.map((s) => (
						<div className="h-[24rem] my-4 flex items-center justify-center ">
						<Link href={s.href}>
							<PinContainer
							title="See more"
							href={s.href}
							>
							<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[24rem] ">
								<h3 className="!pb-2 !m-0 font-bold  text-base text-slate-100">
								{s.title}
								</h3>
								<div className="text-base !m-0 pb-4 font-normal">
								<span className="text-slate-500">
									{s.desc}
								</span>
								</div>
								<Image
									src={s.img}
									alt="Web development"
									layout="responsive"
									width={1080}
                					height={720} 
									objectFit="contain"
								/>
							</div>
							</PinContainer>
						</Link>
					  </div>
					))}
				</div>
			</div>
		</div>
	);
}
