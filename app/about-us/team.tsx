import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import Image from "next/image";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { Github, Mail, Twitter } from "lucide-react";

const words = 'Meet our team'

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

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function TeamSection() {
  return (
    <div>
		<div className="pt-16 text-center">
					<h1 className="text-4xl text-white font-bold pb-8"><TextGenerateEffect words={words} /></h1>
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
	</div>
  );
}